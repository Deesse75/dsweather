export const findIp = async (): Promise<{
  latitude: number;
  longitude: number;
}> => {
  const response = await fetch("http://ip-api.com/json");
  if (!response.ok) {
    throw new Error("Failed to fetch IP address");
  }
  const data = await response.json();
  if (!data) {
    throw new Error("Invalid IP address");
  }
  return { latitude: data.lat, longitude: data.lon };
};

export const getNavigatorPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        position.coords.latitude;
        position.coords.longitude;
        resolve(position);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export default async function getPosition(): Promise<{
  latitude: number;
  longitude: number;
}> {
  try {
    return await findIp();
  } catch (error) {
    try {
      const coords = await getNavigatorPosition();
      return {
        latitude: coords.coords.latitude,
        longitude: coords.coords.longitude,
      };
    } catch (error) {
      return { latitude: 0, longitude: 0 };
    }
  }
}
