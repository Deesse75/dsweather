import { useContext } from "react";
import LocationIcon from "./icons/LocationIcon";
import { DailyContext } from "../context/daily.context";

const Location = () => {
  const daily = useContext(DailyContext);

  return (
    <>
    <div><LocationIcon /></div>
      <div>{`${daily.state.location}, ${daily.state.country}`}</div>
    </>
  );
};

export default Location;
