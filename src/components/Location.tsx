import { useContext } from "react";
import LocationIcon from "./icons/LocationIcon";
import { LocalContext } from "../context/local.context";

const Location = () => {
  const state = useContext(LocalContext);

  return (
    <>
    <div className="locationIcon"><LocationIcon /></div>
      <div className="locationName">{`${state.state.city_name}, ${state.state.city_state}`}</div>
    </>
  );
};

export default Location;
