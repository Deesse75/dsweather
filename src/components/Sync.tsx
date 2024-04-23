import { useContext, useEffect, useState } from "react";
import { DailyContext } from "../context/daily.context";
import convertDate from "./ConvertDate";
import { Props } from "./LocationModule";

const Sync = ({ setCoords }: Props) => {
  const daily = useContext(DailyContext);
  const [sync, setSync] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const dailySync = convertDate(daily.state.sync - daily.state.timezone, 1000);
  const syncDate = dailySync.split(" ");

  const handleClick = () => {
    setSync(true);
  };

  useEffect(() => {
    if (!sync) return;
    setCoords({ latitude: daily.state.lat, longitude: daily.state.lon });
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
      </div>
      {showNotif ? <div className="notif">Synchronisé</div> : null}
    </div>
  );
};

export default Sync;
