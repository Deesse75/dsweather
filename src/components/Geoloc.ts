type getPosProps = {
  setLat: React.Dispatch<React.SetStateAction<number>>;
  setLon: React.Dispatch<React.SetStateAction<number>>;
};

export default function getPosition({ setLat, setLon }: getPosProps): void {
  navigator.geolocation.getCurrentPosition((position) => {
    position.coords.latitude
      ? setLat(position.coords.latitude)
      : setLat(48.8534);
    position.coords.longitude
      ? setLon(position.coords.longitude)
      : setLon(2.3488);
  });
}

