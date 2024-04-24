import { useContext, useEffect, useState } from "react";
import { DailyContext } from "../context/daily.context";
import convertDate from "./ConvertDate";
import { Props } from "./LocationModule";
import { IoReloadCircleOutline } from "react-icons/io5";


const Sync = ({ setCoords }: Props) => {
  const daily = useContext(DailyContext);
  const [sync, setSync] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  //decalage 3h
  const dailySync = convertDate(daily.state.sync - 7200, 1000);
  const dailySyncNext = convertDate(daily.state.sync - 7200 + 10800, 1000);

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
    }, 2500);
    return () => clearTimeout(timer);
  }, [showNotif]);

  return (
    <div className="sync">
      <div className="sync_div">{dailySync}</div>
      <div className="sync_icon" onClick={handleClick}>
        <IoReloadCircleOutline />
      </div>
      {showNotif ? <div className="sync_notif">{`Prochaine actualisation à ${dailySyncNext}`}</div> : null}
    </div>
  );
};

export default Sync;
