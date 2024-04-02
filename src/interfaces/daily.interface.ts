export type fullDailyDataType = {
    summary: string;
    description: string;
    icon: string;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    clouds: number;
    dt: number;
    location: string;
    country: string;
    sunrise: number;
    sunset: number;
    timezone: number;
};

export const DailyDataInitial: fullDailyDataType = {
    summary: "",
    description: "",
    icon: "",
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    clouds: 0,
    dt: 0,
    location: "",
    country: "",
    sunrise: 0,
    sunset: 0,
    timezone: 0,
};

    export type dailyActionType = {
      type: "SET_DAILYDATA";
      payload: fullDailyDataType;
    };


