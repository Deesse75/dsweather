import { useContext, useEffect, useState } from "react";
import getPosition from "../components/Geoloc";
import { DailyContext } from "../context/daily.context";
import { useNavigate } from "react-router-dom";
import LocationModule from "../components/LocationModule";
import TempModule from "../components/TempModule";
import Details from "../components/Details";
import Sync from "../components/Sync";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [isLocate, setIsLocate] = useState(false);
  const daily = useContext(DailyContext);
  const nav = useNavigate();

  useEffect(() => {
    setLoading(true);
    //Get the latitude and longitude of the user
    const getCoords = async () => {
      const geoloc = await getPosition();
      if (geoloc.latitude === 0 && geoloc.longitude === 0) setIsLocate(false);
      else setIsLocate(true);
      setCoords({
        latitude: geoloc.latitude ? geoloc.latitude : 48.8588897,
        longitude: geoloc.longitude ? geoloc.longitude : 2.32004102,
      });
    };
    getCoords();
  }, []);

  //Request API daily weather
  useEffect(() => {
    if (!coords.latitude || !coords.longitude) return;

    const dailyData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_FORECAST_URI}lat=${coords.latitude}&lon=${coords.longitude}&lang=FR&appid=${import.meta.env.VITE_API_KEY}&units=metric `
        );
        if (!response.ok) {
          nav("/Error_api");
          return;
        }
        const data = await response.json();
        if (!data) {
          nav("/Error_api");
          return;
        }
        daily.dailyDispatch({
          type: "SET_DAILYDATA",
          payload: {
            lat: coords.latitude,
            lon: coords.longitude,
            isLocate: isLocate,
            description: data.list[0].weather[0].description,
            icon: data.list[0].weather[0].icon,
            temp: data.list[0].main.temp,
            feels_like: data.list[0].main.feels_like,
            temp_min: data.list[0].main.temp_min,
            temp_max: data.list[0].main.temp_max,
            humidity: data.list[0].main.humidity,
            wind_speed: data.list[0].wind.speed,
            clouds: data.list[0].clouds.all,
            sync: data.list[0].dt,
            location: data.city.name,
            country: data.city.country,
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
            timezone: data.city.timezone,
          },
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        nav("/Error_api");
        return;
      }
    };
    dailyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords.latitude, coords.longitude]);

  return (
    <>
      <div className="home">
        <div className="daily">
          <div>
            <LocationModule setCoords={setCoords} setLoading={setLoading} />
          </div>
          <div>
            <TempModule />
          </div>
          <div>
            <Details />
          </div>
          <div>
            <Sync setCoords={setCoords} setLoading={setLoading} />
          </div>
        </div>
        {loading && <div className="loading">Chargement...</div>}
      </div>
    </>
  );
};

export default Home;
