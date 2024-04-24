import { useContext } from "react";
import { DailyContext } from "../context/daily.context";

const TempModule = () => {
  const daily = useContext(DailyContext);
  const icon = `http://openweathermap.org/img/wn/${daily.state.icon}.png`;
  return (
    <div className="temp">
      <div className="temp_icon">
        <img src={icon} alt="" />
      </div>
      <div className="temp_num">{`${Math.ceil(daily.state.temp)}°`}</div>
      <div className="temp_detail">
        <div>{daily.state.description}</div>
        <div>{`Ressenti ${Math.ceil(daily.state.feels_like)}°`}</div>
      </div>
    </div>
  );
};

export default TempModule;
