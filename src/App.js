import HyButt from "./components/widened-hy-butt/HyButt";
import SteepFlankedSingleV from "./components/steep-flanked-single-v/SteepFlankedSingleV";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/HyButt" element={<HyButt />} />
        <Route path="/SteepFlankedSingleV" element={<SteepFlankedSingleV />} />
      </Routes>
    </>
  );
}
