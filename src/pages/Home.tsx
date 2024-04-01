import { useEffect, useContext, useState } from "react";
import getPosition from "../components/Geoloc";
import Location from "../components/Location";
import { LocalContext } from "../context/local.context";
import LocalDate from "../components/LocalDate";

const Home = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const state = useContext(LocalContext);

  useEffect(() => {
    const weatherData = async () => {
      try {
        await getPosition({ lat, lon, setLat, setLon });
        const url = `${import.meta.env.VITE_API_URI}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric `;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        if (!data) {
          throw new Error("Error fetching data");
        }
        console.log(data);
        state.LocalDispatch({
          type: "SET_LOCALDATA",
          payload: {
            city_lat: data.city.lat,
            city_lon: data.city.lon,
            city_name: data.city.name,
            city_state: data.city.country,
            city_sunrise: data.city.sunrise,
            city_sunset: data.city.sunset,
            city_timezone: data.city.timezone,
            list_clouds: data.list[0].clouds.all,
            last_update: data.list[0].dt_txt,
            temp: data.list[0].main.temp,
            temp_min: data.list[0].main.temp_min,
            temp_max: data.list[0].main.temp_max,
            temp_fells_like: data.list[0].main.feels_like,
            temp_humidity: data.list[0].main.humidity,
            temp_tendance: data.list[0].main.temp_kf,
            prob_of_precipitation: data.list[0].pop,
            part_of_day: data.list[0].sys.pod,
            visibility: data.list[0].visibility,
            wind_speed: data.list[0].wind.speed,
            wind_max: data.list[0].wind.gust,
            wind_direction: data.list[0].wind.deg,
            description: data.list[0].weather[0].description,
            icon: data.list[0].weather[0].icon,
          },
        });
      } catch (error) {
        console.error(error);
      }
    };
    weatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  return (
    <div className="home">
      <div className="weatherBox">
        <div className="location">
          <Location />
        </div>
        <div className="date">
          <LocalDate />
        </div>
      </div>
      <div className="plusBox"></div>
    </div>
  );
};

export default Home;
// const timestamp = 1712275200;
// const date = new Date(timestamp * 1000);
