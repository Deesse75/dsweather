import { Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments";
import Happened from "./pages/Happened";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { DailyContextProvider } from "./context/daily.context";

function App() {
  return (
    <>
      <DailyContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-happened" element={<Happened />} />
          <Route path="/contact" element={<Comments />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DailyContextProvider>
    </>
  );
}

export default App;
