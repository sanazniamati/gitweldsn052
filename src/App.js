import HY_Butt from "./components/widened-hy-butt/HY_Butt";
import SteepFlankedSingleV from "./components/steep-flanked-single-v/SteepFlankedSingleV";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/HY_Butt" element={<HY_Butt />} />
        <Route path="/SteepFlankedSingleV" element={<SteepFlankedSingleV />} />
      </Routes>
    </>
  );
}
