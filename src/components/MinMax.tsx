import { useContext } from "react";
import { DailyContext } from "../context/daily.context";

const MinMax = () => {
  const daily = useContext(DailyContext);

  return (
    <div className="minmax">
      <div className="min">{`min : ${Math.ceil(daily.state.temp_min)}°`}</div>
      <div className="max">{`max : ${Math.ceil(daily.state.temp_max)}°`}</div>
    </div>
  );
};

export default MinMax;
