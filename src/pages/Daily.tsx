import { useContext } from "react";
import LocalDate from "../components/LocalDate";
import MinMax from "../components/MinMax";
import SearchButton from "../components/SearchButton";
import LocationOffIcon from "../components/icons/LocationOffIcon";
import LocationOnIcon from "../components/icons/LocationOnIcon";
import { DailyContext } from "../context/daily.context";
import { GeolocProps } from "../interfaces/props.interface";
import Temp from "./Temp";
import getPosition from "../components/Geoloc";

const Daily = ({ setLat, setLon, setIsLocate }: GeolocProps) => {
  const daily = useContext(DailyContext);
  return (
    <div className="daily">
      <div className="top">
        <div className="location">
          <div
            className="topIcon"
            onClick={() => {
              getPosition({ setLat, setLon, setIsLocate });
            }}
          >
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
          <div className="topName">{`${daily.state.location}, ${daily.state.country}`}</div>
        </div>
        <div className="search">
          <SearchButton setLat={setLat} setLon={setLon} />
        </div>
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
