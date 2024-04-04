import { useNavigate } from "react-router-dom";

const Error = () => {
  const nav = useNavigate();
  return (
    <div className="errorPage">
      <span>Cette page n'existe pas</span>
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

export default Error;
