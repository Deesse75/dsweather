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
    const coords = await getNavigatorPosition();
    return {
      latitude: coords.coords.latitude,
      longitude: coords.coords.longitude,
    };
  } catch (error) {
    return {
      latitude: 0,
      longitude: 0,
    };
  }
}
