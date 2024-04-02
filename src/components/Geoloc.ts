type GeolocProps = {
  setLat: (lat: number) => void;
  setLon: (lon: number) => void;
};

export default async function getPosition({
  setLat,
  setLon,
}: GeolocProps): Promise<void> {
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });
}
