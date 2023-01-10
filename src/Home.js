import HY from "../src/assets/hy.png";
import steep_flanked from "../src/assets/steep_flanked.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Link to="/HY_Butt">
        <img width="570px" src={HY} alt={"widened-hy-butt"} />
      </Link>
      <Link to="/SteepFlankedSingleV">
        <img width="570px" src={steep_flanked} alt={"SteepFlankedSingleV"} />
      </Link>
    </>
  );
}

export default Home;
