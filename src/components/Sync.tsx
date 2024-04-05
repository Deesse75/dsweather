import { useContext, useEffect, useState } from "react";
import { DailyContext } from "../context/daily.context";
import { CoordonatesProps } from "../interfaces/props.interface";
import SyncIcon from "./icons/SyncIcon";
import convertDate from "./ConvertDate";

const Sync = ({ setLat, setLon }: CoordonatesProps) => {
  const daily = useContext(DailyContext);
  const [sync, setSync] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const dailySync = convertDate(
    daily.state.sync - daily.state.timezone,
    1000
  );
  const syncDate = dailySync.split(" ");

  const handleClick = () => {
    setLat(0.0);
    setLon(0.0);
    setSync(true);
  };

  useEffect(() => {
    if (!sync) return;
    setLat(daily.state.lat);
    setLon(daily.state.lon);
    setSync(false);
    setShowNotif(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sync]);

  useEffect(() => {
    if (!showNotif) return;
    const timer = setTimeout(() => {
      setShowNotif(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [showNotif]);

  return (
    <div className="up">
      <div className="dateUp">
        {`${syncDate[1]} ${syncDate[2]} ${syncDate[4]}`}
      </div>
      <div className="upIcon" onClick={handleClick}>
        <SyncIcon />
      </div>
      {showNotif ? <div className="notif">Synchronisé</div> : null}
    </div>
  );
};

export default Sync;
