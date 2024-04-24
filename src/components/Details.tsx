import { useContext } from "react";
import { DailyContext } from "../context/daily.context";
import convertDate from "./ConvertDate";

const Details = () => {
  const daily = useContext(DailyContext);
  //sunrise est a l'heure locale, on ajoute donc le décalage horaire pour avoir l'heure UTC et le timezone du lieu affiché
  const sunrise = convertDate(daily.state.sunrise + daily.state.timezone - 7200, 1000);
  const sunset = convertDate(daily.state.sunset + daily.state.timezone - 7200, 1000);

  return (
    <div className="detail">
      <div className="detail_minmax">
        <div>{`min : ${Math.ceil(daily.state.temp_min)}°`}</div>
        <div>{`max : ${Math.ceil(daily.state.temp_max)}°`}</div>
      </div>
      <div className="detail_sun">
        <div>Lever du soleil</div>
        <div>{sunrise}</div>
      </div>
      <div className="detail_sun">
        <div>Coucher du soleil</div>
        <div>{sunset}</div>
      </div>
    </div>
  );
};

export default Details;
