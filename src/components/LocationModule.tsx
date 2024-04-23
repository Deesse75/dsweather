import { useContext } from "react";
import { DailyContext } from "../context/daily.context";
import { MdLocationOff, MdLocationOn } from "react-icons/md";
import Search from "./Search";

export type Props = {
  setCoords: React.Dispatch<React.SetStateAction<{
    latitude: number;
    longitude: number;
}>>
}

const LocationModule = ({setCoords} : Props) => {
  const daily = useContext(DailyContext);

  return (
    <>
      <div className="location_div">
        <div className="location_icon">
          {daily.state.isLocate ? (
            <>
              <MdLocationOn size={24} />
            </>
          ) : (
            <>
              <MdLocationOff size={24} color="grey" />
            </>
          )}
        </div>
        <div className="location_country">{`${daily.state.location}, ${daily.state.country}`}</div>
        <Search setCoords={setCoords} />
      </div>
    </>
  );
};

export default LocationModule;
