import { useContext } from "react";
import { DailyContext } from "../context/daily.context";
import { MdLocationOff, MdLocationOn } from "react-icons/md";
import Search from "./Search";
import convertDate from "./ConvertDate";
import getPosition from "./Geoloc";

export type Props = {
  setCoords: React.Dispatch<
    React.SetStateAction<{
      latitude: number;
      longitude: number;
    }>
  >;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LocationModule = ({ setCoords, setLoading }: Props) => {
  //date du jour
  const daily = useContext(DailyContext);
  const today = convertDate((new Date().getTime()) , 1);

  const handleClick = async () => {
    setLoading(true);
    const loc = await getPosition();
    setCoords({
      latitude: loc.latitude,
      longitude: loc.longitude,
    });
    setLoading(false);
  };
  return (
    <>
      <div className="location_div">
        <div className="location_icon" onClick={handleClick}>
          {daily.state.isLocate ? (
            <>
              <MdLocationOn size={24} />
            </>
          ) : (
            <>
              <MdLocationOff size={24} />
            </>
          )}
        </div>
        <div className="location_country">{`${daily.state.location}, ${daily.state.country}`}</div>
        <Search setCoords={setCoords} setLoading={setLoading} />
      </div>
      <div className="location_date">{today}</div>
    </>
  );
};

export default LocationModule;
