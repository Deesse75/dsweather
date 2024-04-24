import { useEffect, useRef, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { CiWarning } from "react-icons/ci";
import { Props } from "./LocationModule";

const Search = ({setCoords}: Props) => {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [warning, setWarning] = useState(false);

  const handleClick = () => {
    setMessage("");
    if (!ref1.current?.value) {
      setWarning(true);
      return;
    }
    setLocation(ref1.current.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && open) handleClick();
  };

  useEffect(() => {
    if (!location) return;
    const findGeolocation = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_GEO_URI}${location}&appid=${import.meta.env.VITE_API_KEY}`
        );
        if (!response.ok) {
          setMessage("Erreur de connexion à l'API");
          return;
        }
        const data = await response.json();
        if (!data) {
          setMessage("Erreur de connexion à l'API");
          return;
        }
        setCoords({
          latitude: data[0].lat,
          longitude: data[0].lon,
        });
        setOpen(false);
        return;
      } catch (error) {
        setLocation("");
          setMessage("Ville inconnue");
      }
    };
    findGeolocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="location_search">
      <div
        className="location_search_icon"
        onClick={() => {
          setOpen(!open);
          setWarning(false);
          setMessage("");
        }}
      >
        <FaSearchLocation size={24} />
      </div>
      {open && (
        <>
          <div className="location_input" ref={ref2}>
            <input
              onFocus={() => {
                setWarning(false);
                setMessage("");
              }}
              onKeyDown={handleKeyPress}
              type="text"
              ref={ref1}
              placeholder="Entrer une ville"
            />
            <div className="location_input_icon" onClick={handleClick}>
              {warning && <CiWarning size={20} color="#d60707" />}
              {!warning && <CiWarning size={20} style={{ opacity: 0 }} />}
              <TfiReload style={{cursor: "pointer"}} />
            </div>
          </div>
          {message && <div className="location_input_message">{message}</div>}
        </>
      )}
    </div>
  );
};

export default Search;
