import { createContext, Dispatch, useReducer } from "react";
import { fullLocalDAtaType, localActionType, LocalDataInitial } from "../interfaces/local.interface";


export const LocalReducer = (state: fullLocalDAtaType, action: localActionType) => {
  switch (action.type) {
    case "SET_LOCALDATA":
      return {
        ...state,
        city_lat: action.payload.city_lat,
        city_lon: action.payload.city_lon,
        city_name: action.payload.city_name,
        city_state: action.payload.city_state,
        city_sunrise: action.payload.city_sunrise,
        city_sunset: action.payload.city_sunset,
        city_timezone: action.payload.city_timezone,
        list_clouds: action.payload.list_clouds,
        last_update: action.payload.last_update,
        temp: action.payload.temp,
        temp_min: action.payload.temp_min,
        temp_max: action.payload.temp_max,
        temp_fells_like: action.payload.temp_fells_like,
        temp_humidity: action.payload.temp_humidity,
        temp_tendance: action.payload.temp_tendance,
        prob_of_precipitation: action.payload.prob_of_precipitation,
        part_of_day: action.payload.part_of_day,
        visibility: action.payload.visibility,
        wind_speed: action.payload.wind_speed,
        wind_max: action.payload.wind_max,
        wind_direction: action.payload.wind_direction,
        description: action.payload.description,
        icon: action.payload.icon,
      };
    case "SET_GEOLOC":
      return {
        ...state,
        city_lat: action.payload.city_lat,
        city_lon: action.payload.city_lon,
      };
    default:
      return state;
  }
};

export const LocalContext = createContext<{
  state: fullLocalDAtaType;
  LocalDispatch: Dispatch<localActionType>;
}>({
  state: LocalDataInitial,
  LocalDispatch: () => {},
});

export const LocalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(LocalReducer, {
    city_lat: 0,
    city_lon: 0,
    city_name: "",
    city_state: "",
    city_sunrise: 0,
    city_sunset: 0,
    city_timezone: 0,
    list_clouds: 0,
    last_update: 0,
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    temp_fells_like: 0,
    temp_humidity: 0,
    temp_tendance: 0,
    prob_of_precipitation: 0,
    part_of_day: "",
    visibility: 0,
    wind_speed: 0,
    wind_max: 0,
    wind_direction: 0,
    description: "",
    icon: "",
  });

  return (
    <LocalContext.Provider
      value={{
        state,
        LocalDispatch: dispatch,
      }}
    >
      {children}
    </LocalContext.Provider>
  );
};
