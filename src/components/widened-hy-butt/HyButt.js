import { Stage, Layer } from "react-konva";
import { useEffect, useState } from "react";
import LeftShape from "./LeftShape";
import BottomShape from "./BottomShape";
import RightShape from "./RightShape";

export default function HyButt() {
  const [show, setShow] = useState(true);
  //Right shape
  const [bRightShape, setBRightShape] = useState(196);
  let initialStateT1 = 347 - bRightShape;
  const [t1, setT1] = useState(initialStateT1);
  const [y1RightShape, setY1RightShape] = useState(261);
  const [y2RightShape, setY2RightShape] = useState(265);
  const [y3RightShape, setY3RightShape] = useState(273);
  const [y4RightShape, setY4RightShape] = useState(276);
  const [r, setR] = useState(150);
  const [ySPRightShape, setYSPRightShape] = useState(410);
  const [yCPRightShape, setYCPRightShape] = useState(207);
  //left shape
  const [aLeftShape, setALeftShape] = useState(114);
  // const [aRightShape, setARightShape] = useState(147);
  const [t2, setT2] = useState(114);
  const [x1LeftShape, setX1LeftShape] = useState(52);
  const [x2LeftShape, setX2LeftShape] = useState(55);
  const [x3LeftShape, setX3LeftShape] = useState(61);
  const [x4LeftShape, setX4LeftShape] = useState(64);
  //bottomShape
  const [xCoordinateLeftShape, setXCoordinateLeftShape] = useState(0);
  const [xCoordinateRightShape, setXCoordinateRightShape] = useState(0);
  const [bDistance, setBDistance] = useState(147 - 114);
  //choose unit
  // 1cm --> 37.8 pixel
  // 1mm --> 3.78 pixel
  // 1 inch --> 96 pixel
  let factor;
  const [type, setType] = useState("pixel");
  switch (type) {
    case "centimeter":
      factor = 37.8;
      break;
    case "millimeter":
      factor = 3.78;
      break;
    case "inch":
      factor = 96;
      break;
    default:
      factor = 1;
  }
  //347-bRightShape=151 --> initialStateT1
  //aLeftShape-0=114 --> initialStateT2
  let initialBDistance = 33;
  useEffect(() => {
    if (t1 >= 151) {
      setBRightShape(196 - (t1 * factor - 151));
      setY1RightShape(261 - (t1 * factor - 151) / 2);
      setY2RightShape(265 - (t1 * factor - 151) / 2);
      setY3RightShape(273 - (t1 * factor - 151) / 2);
      setY4RightShape(276 - (t1 * factor - 151) / 2);
      setYCPRightShape(207 - (t1 * factor - 151));
      setYSPRightShape(410 - (t1 * factor - 151));
    } else {
      setBRightShape(196 + (151 - t1 * factor));
      setY1RightShape(261 + (151 - t1 * factor) / 2);
      setY2RightShape(265 + (151 - t1 * factor) / 2);
      setY3RightShape(273 + (151 - t1 * factor) / 2);
      setY4RightShape(276 + (151 - t1 * factor) / 2);
      setYCPRightShape(207 + (151 - t1 * factor));
      setYSPRightShape(410 + (151 - t1 * factor));
    }
    if (t2 >= 114) {
      setALeftShape(114 + (t2 * factor - 114));
      setBDistance(initialBDistance - (t2 * factor - 114));
     // console.log("T2 initialBDistance: " + initialBDistance);
     // console.log("T2 bDistance" + bDistance);
      // setBDistance(bDistance - (t2 * factor - 114));
      setX1LeftShape(51 + (t2 * factor - 114) / 2);
      setX2LeftShape(55 + (t2 * factor - 114) / 2);
      setX3LeftShape(61 + (t2 * factor - 114) / 2);
      setX4LeftShape(64 + (t2 * factor - 114) / 2);
    } else {
      setALeftShape(114 - (114 - t2 * factor));
      setBDistance(initialBDistance + (114 - t2 * factor));
      // setBDistance(bDistance + (114 - t2 * factor));
      setX1LeftShape(51 - (114 - t2 * factor) / 2);
      setX2LeftShape(55 - (114 - t2 * factor) / 2);
      setX3LeftShape(61 - (114 - t2 * factor) / 2);
      setX4LeftShape(64 - (114 - t2 * factor) / 2);
    }

    setR(r);
  }, [type, factor, t1, t2, r, aLeftShape]);
  const handelOnChangeBDistance = (e) => {
    initialBDistance = e.target.value;
    setBDistance(initialBDistance);
    console.log("initialBDistance: " + initialBDistance);
    console.log("BDistance: " + bDistance);
    if (e.target.value >= 33) {
      setXCoordinateRightShape((e.target.value - 33) / 2);
      setXCoordinateLeftShape(0 - (e.target.value - 33) / 2);
    } else {
      setXCoordinateRightShape(0 - (33 - e.target.value) / 2);
      setXCoordinateLeftShape((33 - e.target.value) / 2);
    }
  };
  const handelIncT2 = () => {
    setT2(Number(t2) + 5);
  };
  const handelDecT2 = () => {
    setT2(Number(t2) - 5);
  };
  const handelOnChangeT2 = (e) => {
    if (e.target.value > 0) {
      setT2(e.target.value);
    } else {
      console.log("Error: input value for t1 ");
    }
  };
  const handelIncT1 = () => {
    setT1(t1 + 5);
  };
  const handelDecT1 = () => {
    setT1(t1 - 5);
  };
  const handelOnChangeT1 = (e) => {
    if (e.target.value > 0) {
      setT1(e.target.value);
    } else {
      console.log("Error: input value for t1 ");
    }
  };
  const handelIncB = () => {
    setBDistance(bDistance + 5);
  };
  const handelDecB = () => {
    setBDistance(bDistance - 5);
  };

  const handelIncR = () => {
    setR(r + 5);
  };
  const handelDecR = () => {
    setR(r - 5);
  };
  const handelOnChangeR = (e) => {
    if (e.target.value > 0) {
      setR(e.target.value);
    } else {
      console.log("Error");
    }
  };
  const handelSelect = (e) => {
    setType(e.target.value);
  };
  const handelShow = () => {
    setShow((p) => !p);
  };
  return (
    <div>
      <label>choose an unit </label>
      <select value={type} onChange={handelSelect}>
        <option value="centimeter">centimeter</option>
        <option value="millimeter">millimeter</option>
        <option value="pixel">pixel</option>
        <option value="inch">inch</option>
      </select>
      <button data-testid={"btn-dec-t2"} onClick={handelDecT2}>
        t2 -
      </button>
      <input
        data-testid={"input-t2"}
        type={"number"}
        onChange={handelOnChangeT2}
        value={t2}
      />
      <button data-testid={"btn-inc-t2"} onClick={handelIncT2}>
        t2 +
      </button>
      <button onClick={handelDecT1}>t1 -</button>
      <input type={"number"} onChange={handelOnChangeT1} value={t1} />
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelDecB}> b - </button>
      <input
        type={"number"}
        onChange={handelOnChangeBDistance}
        value={bDistance}
      />
      <button onClick={handelIncB}>b +</button>
      <button onClick={handelDecR}> R - </button>
      <input type={"number"} onChange={handelOnChangeR} value={r} />
      <button onClick={handelIncR}>R + </button>
      <button onClick={handelShow}>on/off </button>

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        draggable={true}
        style={{ background: "lightgray" }}
      >
        <Layer>

          <LeftShape
            show={show}
            xCoordinateLeftShape={xCoordinateLeftShape}
            aLeftShape={aLeftShape}
            x1LeftShape={x1LeftShape}
            x2LeftShape={x2LeftShape}
            x3LeftShape={x3LeftShape}
            x4LeftShape={x4LeftShape}
          />
          <BottomShape
            show={show}
            xCoordinateRightShape={xCoordinateRightShape}
            xCoordinateLeftShape={xCoordinateLeftShape}
            bDistance={bDistance * factor}
            aLeftShape={aLeftShape}
            t2={t2}
          />
          <RightShape
            show={show}
            xCoordinateRightShape={xCoordinateRightShape}
            r={r * factor}
            yCPRightShape={yCPRightShape}
            ySPRightShape={ySPRightShape}
            bRightShape={bRightShape}
            y1RightShape={y1RightShape}
            y2RightShape={y2RightShape}
            y3RightShape={y3RightShape}
            y4RightShape={y4RightShape}
          />
        </Layer>
      </Stage>
    </div>
  );
}
