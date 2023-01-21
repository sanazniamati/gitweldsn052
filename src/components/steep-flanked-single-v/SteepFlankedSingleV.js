import { Stage, Layer } from "react-konva";
import { useState, useEffect } from "react";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import BottomShape from "./BottomShape";
export default function SteepFlankedSingleV() {
  const [showDetails, setShowDetails] = useState(true);
  const [showRect, setShowRect] = useState(true);

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
  let f = 196;
  const [grad, setGrad] = useState(15);
  //LeftShape
  let [bLeftShape, setBLeftShape] = useState(0);
  let [y1LeftShape, setY1LeftShape] = useState(88);
  let [y2LeftShape, setY2LeftShape] = useState(93);
  let [y3LeftShape, setY3LeftShape] = useState(103);
  let [y4LeftShape, setY4LeftShape] = useState(109);
  const [t2, setT2] = useState(f - bLeftShape);
  let initialXLeftShape = 277 - t2 * Math.tan((grad * Math.PI) / 180);
  //RightShape
  let [bRightShape, setBRightShape] = useState(0);
  let [y1RightShape, setY1RightShape] = useState(88);
  let [y2RightShape, setY2RightShape] = useState(93);
  let [y3RightShape, setY3RightShape] = useState(103);
  let [y4RightShape, setY4RightShape] = useState(109);
  //calculate x,y for additional line
  let [yBetaSmallLine, setYBetaSmallLine] = useState(-78);
  let [yBetaBigLine, setYBetaBigLine] = useState(-81);
  const [t1, setT1] = useState(f - bRightShape);
  let initialX = t1 * Math.tan((grad * Math.PI) / 180) + 350;
  let xAdditionalLine = initialX + 65 * Math.tan((grad * Math.PI) / 180);
  let initialA = 10 * Math.cos((grad * Math.PI) / 180);
  // for calc b distance
  const [xCoordinateLeftShape, setXCoordinateLeftShape] = useState(0);
  const [xCoordinateRightShape, setXCoordinateRightShape] = useState(0);
  const [bDistance, setBDistance] = useState(350 - 277);
  const [width, setWidth] = useState(316);
  let initialXQuadratic = (xAdditionalLine + 360) / 2;
  useEffect(() => {
    if (t1 >= f) {
      setBRightShape(0 - (t1 * factor - f));
      setY1RightShape(88 - (t1 * factor - f) / 2);
      setY2RightShape(93 - (t1 * factor - f) / 2);
      setY3RightShape(103 - (t1 * factor - f) / 2);
      setY4RightShape(109 - (t1 * factor - f) / 2);
      setYBetaBigLine(-81 - (t1 * factor - f));
      setYBetaSmallLine(-78 - (t1 * factor - f));
    } else {
      setBRightShape(f - t1 * factor);
      setY1RightShape(88 + (f - t1 * factor) / 2);
      setY2RightShape(93 + (f - t1 * factor) / 2);
      setY3RightShape(103 + (f - t1 * factor) / 2);
      setY4RightShape(109 + (f - t1 * factor) / 2);
      setYBetaBigLine(-81 + (f - t1 * factor));
      setYBetaSmallLine(-78 + (f - t1 * factor));
    }
    if (t2 >= f) {
      setBLeftShape(0 - (t2 * factor - f));
      setY1LeftShape(88 - (t2 * factor - f) / 2);
      setY2LeftShape(93 - (t2 * factor - f) / 2);
      setY3LeftShape(103 - (t2 * factor - f) / 2);
      setY4LeftShape(109 - (t2 * factor - f) / 2);
    } else {
      setBLeftShape(f - t2 * factor);
      setY1LeftShape(88 + (f - t2 * factor) / 2);
      setY2LeftShape(93 + (f - t2 * factor) / 2);
      setY3LeftShape(103 + (f - t2 * factor) / 2);
      setY4LeftShape(109 + (f - t2 * factor) / 2);
    }
    if (bDistance >= 73) {
      setWidth(316 + (bDistance * factor - 73));
      setXCoordinateRightShape((bDistance * factor - 73) / 2);
      setXCoordinateLeftShape(0 - (bDistance * factor - 73) / 2);
    } else {
      setWidth(316 - (73 - bDistance * factor));
      setXCoordinateRightShape(0 - (73 - bDistance * factor) / 2);
      setXCoordinateLeftShape((73 - bDistance * factor) / 2);
    }
  }, [type, factor, t1, t2, bDistance, f]);

  const handelIncT2 = () => {
    setT2(Number(t2) + 5);
  };
  const handelDecT2 = () => {
    setT2(Number(t2) - 5);
  };
  const handelIncT1 = () => {
    setT1(Number(t1) + 5);
  };
  const handelDecT1 = () => {
    setT1(Number(t1) - 5);
  };
  const handelIncBeta = () => {
    setGrad(grad + 5);
  };
  const handelDecBeta = () => {
    setGrad(grad - 5);
  };
  const handelOnChangeT1 = (e) => {
    setT1(e.target.value);
  };
  const handelOnChangeT2 = (e) => {
    setT2(e.target.value);
  };
  const handelOnChangeBeta = (e) => {
    setGrad(e.target.value);
  };
  const handelIncB = () => {
    setBDistance(bDistance + 5);
    // setWidth(width + 5);
    // setXCoordinateLeftShape(xCoordinateLeftShape - 2.5);
    // setXCoordinateRightShape(xCoordinateRightShape + 2.5);
  };
  const handelDecB = () => {
    setBDistance(bDistance - 5);
    // setWidth(width - 5);
    // setXCoordinateLeftShape(xCoordinateLeftShape + 2.5);
    // setXCoordinateRightShape(xCoordinateRightShape - 2.5);
  };
  const handelOnChangeBDistance = (e) => {
    setBDistance(() => Number(e.target.value));
  };
  const handelSelect = (e) => {
    setType(e.target.value);
  };
  const handelShowDetails = () => {
    setShowDetails((p) => !p);
  };
  const handelShowRect = () => {
    setShowRect((prevState) => !prevState);
  };
  return (
    <>
      <label>choose an unit </label>
      <select value={type} onChange={handelSelect}>
        <option value="centimeter">centimeter</option>
        <option value="millimeter">millimeter</option>
        <option value="pixel">pixel</option>
        <option value="inch">inch</option>
      </select>
      <button onClick={handelDecT2}> t2 -</button>
      <input type={"number"} onChange={handelOnChangeT2} value={t2} />
      <button onClick={handelIncT2}> t2 +</button>
      <button onClick={handelDecBeta}> β - </button>
      <input type={"number"} onChange={handelOnChangeBeta} value={grad} />
      <button onClick={handelIncBeta}> β + </button>
      <button onClick={handelDecT1}>t1 -</button>
      <input type={"number"} onChange={handelOnChangeT1} value={t1} />
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelDecB}> b - </button>
      <input
        type={"number"}
        onChange={handelOnChangeBDistance}
        value={bDistance}
      />
      <button onClick={handelIncB}> b + </button>
      <button onClick={handelShowDetails}>on/off </button>
      <button onClick={handelShowRect}>show Rect / hide Rect </button>

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ background: "lightgray" }}
        draggable={true}
      >
        <Layer>
          <LeftShape
            showDetails={showDetails}
            xCoordinateLeftShape={xCoordinateLeftShape}
            bLeftShape={bLeftShape}
            y4LeftShape={y4LeftShape}
            y3LeftShape={y3LeftShape}
            y2LeftShape={y2LeftShape}
            y1LeftShape={y1LeftShape}
            initialXLeftShape={initialXLeftShape}
          />
          <RightShape
            showDetails={showDetails}
            xCoordinateRightShape={xCoordinateRightShape}
            bRightShape={bRightShape}
            initialX={initialX}
            y4RightShape={y4RightShape}
            y3RightShape={y3RightShape}
            y2RightShape={y2RightShape}
            y1RightShape={y1RightShape}
            yBetaBigLine={yBetaBigLine}
            xAdditionalLine={xAdditionalLine}
            initialXQuadratic={initialXQuadratic}
            yBetaSmallLine={yBetaSmallLine}
            initialA={initialA}
          />
          <BottomShape
            showDetails={showDetails}
            xCoordinateRightShape={xCoordinateRightShape}
            yBetaBigLine={yBetaBigLine}
            xCoordinateLeftShape={xCoordinateLeftShape}
            bDistance={bDistance * factor}
            width={width}
            showRect={showRect}
          />
        </Layer>
      </Stage>
    </>
  );
}
