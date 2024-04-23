import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { DailyContextProvider } from "./context/daily.context";
import ErrorApi from "./pages/ErrorApi";

function App() {
  return (
    <>
      <DailyContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Error_api" element={<ErrorApi />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DailyContextProvider>
    </>
  );
}

export default App;
