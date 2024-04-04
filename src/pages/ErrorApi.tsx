import { useNavigate } from "react-router-dom";

const ErrorApi = () => {
  const nav = useNavigate();
  return (
    <div className="errorPage">
      <span>
        Une erreur est survenue lors de l'appel a l'API{" "}
        <a href="https://openweathermap.org" target="blank">openweather.org</a>
      </span>
      <span>Si le probleme persiste, merci de nous laisser un message <button>ici</button></span>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Accueil
      </button>
    </div>
  );
};

export default ErrorApi;
