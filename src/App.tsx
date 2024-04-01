import { Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments";
import Happened from "./pages/Happened";
import Home from "./pages/Home";
import { LocalContextProvider } from "./context/local.context";

function App() {
  return (
    <>
      <LocalContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-happened" element={<Happened />} />
          <Route path="/contact" element={<Comments />} />
        </Routes>
      </LocalContextProvider>
    </>
  );
}

export default App;
