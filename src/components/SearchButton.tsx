import { useEffect, useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import { CoordonatesProps } from "../interfaces/props.interface";

const SearchButton = ({ setLat, setLon }: CoordonatesProps) => {
  const [errMess, setErrMess] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const url = import.meta.env.VITE_GEO_URI;

  const handleFocus = () => {
    setLocation("");
    setErrMess("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.loc.value === "") {
      setErrMess("Please enter a location.");
      return;
    }
    setLocation(e.currentTarget.loc.value);
    e.currentTarget.reset();
    setIsLoading(true);
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
        setIsLoading(false);
      } catch (error) {
        setLocation("");
        setErrMess("Location not found");
      }
    };
    findGeolocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            onFocus={handleFocus}
            type="text"
            name="loc"
            placeholder="Search"
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>{errMess && <div className="err">{errMess}</div>}</>
      )}
    </>
  );
};

export default SearchButton;
