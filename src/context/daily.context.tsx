import {
  DailyDataInitial,
  dailyActionType,
  fullDailyDataType,
} from "../interfaces/daily.interface";
import { Dispatch, createContext, useReducer } from "react";

export const DailyReducer = (
  state: fullDailyDataType,
  action: dailyActionType
) => {
  switch (action.type) {
    case "SET_DAILYDATA":
      return {
        ...state,
        summary: action.payload.summary,
        description: action.payload.description,
        icon: action.payload.icon,
        temp: action.payload.temp,
        feels_like: action.payload.feels_like,
        temp_min: action.payload.temp_min,
        temp_max: action.payload.temp_max,
        humidity: action.payload.humidity,
        visibility: action.payload.visibility,
        wind_speed: action.payload.wind_speed,
        wind_deg: action.payload.wind_deg,
        clouds: action.payload.clouds,
        dt: action.payload.dt,
        location: action.payload.location,
        country: action.payload.country,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset,
        timezone: action.payload.timezone,
      };
    default:
      return state;
  }
};

export const DailyContext = createContext<{
  state: fullDailyDataType;
  dailyDispatch: Dispatch<dailyActionType>;
}>({
  state: DailyDataInitial,
  dailyDispatch: () => {},
});

export const DailyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(DailyReducer, DailyDataInitial);
  console.log("payload", state);
  return (
    <DailyContext.Provider
      value={{
        state,
        dailyDispatch: dispatch,
      }}
    >
      {children}
    </DailyContext.Provider>
  );
};
