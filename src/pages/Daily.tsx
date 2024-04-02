import LocalDate from "../components/LocalDate";
import Location from "../components/Location";
import Temp from "./Temp";

const Daily = () => {
  return (
    <div>
      <div className="location">
        <Location />
      </div>
      <div className="date">
        <LocalDate />
      </div>
        <Temp />
    </div>
  );
};

export default Daily;
