import LocalDate from "../components/LocalDate";
import Location from "../components/Location";
import MinMax from "../components/MinMax";
import SearchButton from "../components/SearchButton";
import { GeolocProps } from "../interfaces/props.interface";
import Temp from "./Temp";

const Daily = ({ setLat, setLon, setIsLocate }: GeolocProps) => {
  return (
    <div>
      <div className="location">
        <Location setLat={setLat} setLon={setLon} setIsLocate={setIsLocate} />
        <SearchButton setLat={setLat} setLon={setLon} />
      </div>
      <div className="date">
        <LocalDate />
      </div>
      <Temp />
      <MinMax />
    </div>
  );
};

export default Daily;
