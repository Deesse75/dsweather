import { CoordonatesProps, GeolocProps } from "../interfaces/props.interface";

export const getNavigatorPosition = ({
  setLat,
  setLon,
}: CoordonatesProps): Promise<void> => {
  {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
};

export default async function getPosition({
  setLat,
  setLon,
  setIsLocate,
}: GeolocProps) {
  try {
    await getNavigatorPosition({ setLat, setLon });
    setIsLocate(true);
  } catch (error) {
    setIsLocate(false);
    setLat(48.857972);
    setLon(2.294364);
  }
}
