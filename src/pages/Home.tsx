import { useContext, useEffect, useState } from "react";
import getPosition from "../components/Geoloc";
import { DailyContext } from "../context/daily.context";
import { useNavigate } from "react-router-dom";
import Daily from "./Daily";

const Home = () => {
  const [lat, setLat] = useState(0.0);
  const [lon, setLon] = useState(0.0);
  const [isLocate, setIsLocate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const daily = useContext(DailyContext);
  const nav = useNavigate();

  useEffect(() => {
    //Get the latitude and longitude of the user
    const getLonLat = async () => {
      await getPosition({ setLat, setLon, setIsLocate });
    };
    getLonLat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Request API daily weather
  useEffect(() => {
    if (!lat || !lon) return;
    const url = `${import.meta.env.VITE_API_FORECAST_URI}lat=${lat}&lon=${lon}&lang=FR&appid=${import.meta.env.VITE_API_KEY}&units=metric `;
    // const url = `${import.meta.env.VITE_ONE_CALL_URI}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric `;

    const dailyData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            "An error occurred while trying to connect to the API."
          );
        }
        const data = await response.json();
        console.log("data", data);
        if (!data) {
          throw new Error(
            "An error occurred while trying to connect to the API."
          );
        }
        daily.dailyDispatch({
          type: "SET_DAILYDATA",
          payload: {
            lat: lat,
            lon: lon,
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
            dt: data.list[0].dt_txt,
            location: data.city.name,
            country: data.city.country,
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
            timezone: data.city.timezone,
          },
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        nav("/error_api");
      }
    };
    dailyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  return (
    <div className="home">
      {isLoading ? (
        <>
          <div className="loading">Loading...</div>
        </>
      ) : (
        <>
          <Daily setLat={setLat} setLon={setLon} setIsLocate={setIsLocate} />
          {/* <Forecast /> */}
        </>
      )}
    </div>
  );
};

export default Home;
// const timestamp = 1712275200;
// const date = new Date(timestamp * 1000);
