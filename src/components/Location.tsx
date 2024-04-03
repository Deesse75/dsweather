import { useContext } from "react";
import { DailyContext } from "../context/daily.context";
import LocationOffIcon from "./icons/LocationOffIcon";
import LocationOnIcon from "./icons/LocationOnIcon";
import getPosition from "./Geoloc";
import { GeolocProps } from "../interfaces/props.interface";

const Location = ({ setLat, setLon, setIsLocate }: GeolocProps) => {
  const daily = useContext(DailyContext);

  return (
    <>
      <div>
        {daily.state.isLocate ? (
          <>
            <LocationOnIcon />
          </>
        ) : (
          <>
            <LocationOffIcon />
          </>
        )}
      </div>

      <div
        className="locationName"
        onClick={() => {
          getPosition({ setLat, setLon, setIsLocate });
        }}
      >{`${daily.state.location}, ${daily.state.country}`}</div>
    </>
  );
};

export default Location;
