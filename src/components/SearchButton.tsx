import { useEffect, useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import { CoordonatesProps } from "../interfaces/props.interface";
import LocationSearchIcon from "./icons/LocationSearchIcon";

const SearchButton = ({ setLat, setLon }: CoordonatesProps) => {
  const [errMess, setErrMess] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const url = import.meta.env.VITE_GEO_URI;

  const handleClick = () => {
    setLocation("");
    setErrMess("");
    setOpen(!open);
  };

  const handleFocus = () => {
    setLocation("");
    setErrMess("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.loc.value === "") {
      return;
    }
    setLocation(e.currentTarget.loc.value);
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!location) return;
    const findGeolocation = async () => {
      try {
        const response = await fetch(
          `${url}${location}&appid=${import.meta.env.VITE_API_KEY}`
        );
        if (!response.ok) {
          throw new Error(
            "An error occurred while trying to connect to the API."
          );
        }
        const data = await response.json();
        if (!data) {
          throw new Error(
            "An error occurred while trying to connect to the API."
          );
        }
        setLat(data[0].lat);
        setLon(data[0].lon);
        setLocation("");
        setOpen(false);
      } catch (error) {
        setLocation("");
        setErrMess("Merci d'entrer un nom de ville valide");
      }
    };
    findGeolocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div className="searchIconOpen" onClick={handleClick}>
        <SearchIcon />
      </div>
      {open && (
        <>
          <div className="searchBox">
            <div className="searchForm">
              <form onSubmit={handleSubmit}>
                  <input
                    onFocus={handleFocus}
                    type="text"
                    name="loc"
                    placeholder="Entrer un nom de ville"
                  />
                    <button type="submit">
                      <LocationSearchIcon />
                    </button>
              </form>
            </div>
            {errMess && <div className="searchErr">{errMess}</div>}
          </div>
        </>
      )}
    </>
  );
};

export default SearchButton;
