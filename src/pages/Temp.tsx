import { useContext } from "react";
import { DailyContext } from "../context/daily.context";

const Temp = () => {
  const daily = useContext(DailyContext);
  const icon = `http://openweathermap.org/img/wn/${daily.state.icon}.png`;
  return (
    <div className="temp">
      <div className="left">
        <div className="tempIcon">
          <img src={icon} alt="" />
        </div>
        <div className="tempNum">{`${Math.ceil(daily.state.temp)}°`}</div>
      </div>
      <div className="right">
        <div className="summary">{daily.state.summary}</div>
        <div className="fells">{`Feels like ${Math.ceil(daily.state.feels_like)}°`}</div>
      </div>
    </div>
  );
};

export default Temp;
