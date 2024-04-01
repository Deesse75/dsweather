export type fullLocalDAtaType = {
    city_lat: number;
    city_lon: number;
    city_name: string;
    city_state: string;
    city_sunrise: number;
    city_sunset: number;
    city_timezone: number;
    list_clouds: number;
    last_update: number;
    temp: number;
    temp_min: number;
    temp_max: number;
    temp_fells_like: number;
    temp_humidity: number;
    temp_tendance: number;
    prob_of_precipitation: number;
    part_of_day: string;
    visibility: number;
    wind_speed: number;
    wind_max: number;
    wind_direction: number;
    description: string;
    icon: string;
    };

    export type geoDataType = {
      city_lat: number;
      city_lon: number;
    }

    export const LocalDataInitial: fullLocalDAtaType = {
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
    };

    export type localActionType =
      | { type: "SET_LOCALDATA"; payload: fullLocalDAtaType }
      | { type: "SET_GEOLOC"; payload: geoDataType };

