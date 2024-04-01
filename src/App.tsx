import { Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments";
import Happened from "./pages/Happened";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import getPosition from "./components/Geoloc";

function App() {
  const [lat, setLat] = useState(0.0);
  const [lon, setLon] = useState(0.0);

  useEffect(() => {
    getPosition({ setLat, setLon });
    if (!lat || !lon) return;
    const location = async () => {
      const url = `${import.meta.env.VITE_API_URI}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric `;
      const response = await fetch(url);
      if (!response.ok) return;
      const data = await response.json();
      if (!data) return;
      console.log(data);
      console.log("Location: ", data.city.name);
      console.log("Temperature: ", data.list[0].main.temp);
      console.log("Min: ", data.list[0].main.temp_min);
      console.log("Max: ", data.list[0].main.temp_max);
      console.log("Ressenti: ", data.list[0].main.feels_like);
      console.log("Humidite: ", data.list[0].main.humidity);
      console.log("Derniere mise a jour: ", data.list[0].dt_txt);
      console.log("Description: ", data.list[0].weather[0].description);
      console.log("icon: ", data.list[0].weather[0].icon);
      console.log("id: ", data.list[0].weather[0].id);
      console.log("main: ", data.list[0].weather[0].main);
      console.log("vent: ", data.list[0].wind.speed);
      const timestamp = 1712275200;
      const date = new Date(timestamp * 1000);
      console.log(date.toUTCString());
      
    };
    location();
  }, [lat, lon]);

  // const [lat, setLat] = useState(0.0);
  // const [lon, setLon] = useState(0.0);
  // useEffect(() => {
  //   if (lat === 0.0 || lon === 0.0) return;
  //   // const apiUrl = `${import.meta.env.VITE_API_URI}lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`;
  //   const apiUrl = "";

  //   const getLocalisation = async () => {
  //     const response = await fetch(apiUrl);
  //     console.log("response", response);
  //     if (!response.ok) {
  //       return;
  //     }
  //     const data = await response.json();
  //     console.log("data", data);
  //   };
  //   getLocalisation();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [lat, lon]);

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-happened" element={<Happened />} />
          <Route path="/contact" element={<Comments />} />
        </Routes>
    </>
  );
}

export default App;
