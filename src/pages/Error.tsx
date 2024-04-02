import { useNavigate } from "react-router-dom";

const Error = () => {
  const nav = useNavigate();
  return (
    <div className="errorPage">
      <span>An error occured</span>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
