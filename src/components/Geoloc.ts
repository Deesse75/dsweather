type GeolocProps = {
  lat: number;
  lon: number;
  setLat: (lat: number) => void;
  setLon: (lon: number) => void;
};

export default async function getPosition({
  lat,
  lon,
  setLat,
  setLon,
}: GeolocProps): Promise<void> {
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });
  if (!lat && !lon) {
    setLat(50.4061);
    setLon(4.52198);
  }
}
