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
    const url = `${import.meta.env.VITE_API_DAILY_URI}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric `;

    const dailyData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            "An error occurred while trying to connect to the API."
          );
        }
        const data = await response.json();
        if (!data) {
          throw new Error(
            "An error occurred while trying to connect to the API."
          );
        }
        localStorage.setItem("defineLocation", data.name);
        daily.dailyDispatch({
          type: "SET_DAILYDATA",
          payload: {
            lat: lat,
            lon: lon,
            isLocate: isLocate,
            summary: data.weather[0].main,
            icon: data.weather[0].icon,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            clouds: data.clouds.all,
            dt: data.dt,
            location: data.name,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            timezone: data.timezone,
          },
        });
        setIsLoading(false);
        nav("/");
      } catch (error) {
        setIsLoading(false);
        nav("/error");
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
          <div className="dasboard">
            <div className="dailyBox">
              <Daily setLat={setLat} setLon={setLon} setIsLocate={setIsLocate} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
// const timestamp = 1712275200;
// const date = new Date(timestamp * 1000);
