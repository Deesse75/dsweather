import { useContext } from "react";
import { DailyContext } from "../context/daily.context";
import convertDate from "./ConvertDate";

const Details = () => {
  const daily = useContext(DailyContext);
  const dailySunrise = convertDate(
    daily.state.sunrise - daily.state.timezone,
    1000
  );
  const sunrise = dailySunrise.split(" ")[4];
  const dailySunset = convertDate(
    daily.state.sunset - daily.state.timezone,
    1000
  );
  const sunset = dailySunset.split(" ")[4];

  return (
    <div className="details">
      <div className="detailsDiv">{`min : ${Math.ceil(daily.state.temp_min)}°`}</div>
      <div className="detailsDiv">{`max : ${Math.ceil(daily.state.temp_max)}°`}</div>
      <div className="detailsDiv">{`Vent : ${Math.ceil(daily.state.wind_speed)}km/h`}</div>
      <div className="detailsDiv">{`Humidité : ${Math.ceil(daily.state.humidity)}%`}</div>
      <div className="detailsDiv">{`Lever du soleil : ${sunrise}`}</div>
      <div className="detailsDiv">{`Coucher du sloeil : ${sunset}`}</div>
    </div>
  );
};

export default Details;
