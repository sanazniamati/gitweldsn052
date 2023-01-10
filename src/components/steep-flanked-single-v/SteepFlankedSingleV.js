import { Stage, Layer, Line } from "react-konva";
import { useState } from "react";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import BottomShape from "./BottomShape";
export default function SteepFlankedSingleV() {
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
  const [bDistance, setBDistance] = useState(346);
  const [width, setWidth] = useState(316);
  let initialXQuadratic = (xAdditionalLine + 360) / 2;
  const handelIncT2 = () => {
    setT2(f - bLeftShape);
    console.log("T2: " + t2);
    setBLeftShape(bLeftShape - 10);
    setY4LeftShape(y4LeftShape - 5);
    setY3LeftShape(y3LeftShape - 5);
    setY2LeftShape(y2LeftShape - 5);
    setY1LeftShape(y1LeftShape - 5);
  };
  const handelDecT2 = () => {
    setT2(f - bLeftShape);
    console.log("T2: " + t2);
    setBLeftShape(bLeftShape + 10);
    setY4LeftShape(y4LeftShape + 5);
    setY3LeftShape(y3LeftShape + 5);
    setY2LeftShape(y2LeftShape + 5);
    setY1LeftShape(y1LeftShape + 5);
  };
  const handelIncT1 = () => {
    setBRightShape(bRightShape - 10);
    setT1(f - bRightShape);
    setY4RightShape(y4RightShape - 5);
    setY3RightShape(y3RightShape - 5);
    setY2RightShape(y2RightShape - 5);
    setY1RightShape(y1RightShape - 5);
    setYBetaSmallLine(yBetaSmallLine - 10);
    setYBetaBigLine(yBetaBigLine - 10);
  };
  const handelDecT1 = () => {
    setBRightShape(bRightShape + 10);
    setT1(f - bRightShape);
    setY4RightShape(y4RightShape + 5);
    setY3RightShape(y3RightShape + 5);
    setY2RightShape(y2RightShape + 5);
    setY1RightShape(y1RightShape + 5);
    setYBetaSmallLine(yBetaSmallLine + 10);
    setYBetaBigLine(yBetaBigLine + 10);
  };
  const handelIncBeta = () => {
    setGrad(grad + 5);
  };
  const handelDecBeta = () => {
    setGrad(grad - 5);
  };
  const handelIncB = () => {
    setBDistance(bDistance + 10);
    setWidth(width + 10);
    setXCoordinateLeftShape(xCoordinateLeftShape - 5);
    setXCoordinateRightShape(xCoordinateRightShape + 5);
  };
  const handelDecB = () => {
    setBDistance(bDistance - 10);
    setWidth(width - 10);
    console.log(bDistance);
    setXCoordinateLeftShape(xCoordinateLeftShape + 5);
    setXCoordinateRightShape(xCoordinateRightShape - 5);
  };
  const handelOnChangeT1 = (e) => {
    setT1(e.target.value);
    console.log("t1: " + e.target.value);
    if (e.target.value >= f) {
      setBRightShape(0 - (e.target.value - f));
      setY1RightShape(88 - (e.target.value - f) / 2);
      setY2RightShape(93 - (e.target.value - f) / 2);
      setY3RightShape(103 - (e.target.value - f) / 2);
      setY4RightShape(109 - (e.target.value - f) / 2);
      setYBetaBigLine(-81 - (e.target.value - f));
      setYBetaSmallLine(-78 - (e.target.value - f));
    } else {
      setBRightShape(f - e.target.value);
      setY1RightShape(88 + (f - e.target.value) / 2);
      setY2RightShape(93 + (f - e.target.value) / 2);
      setY3RightShape(103 + (f - e.target.value) / 2);
      setY4RightShape(109 + (f - e.target.value) / 2);
      setYBetaBigLine(-81 + (f - e.target.value));
      setYBetaSmallLine(-78 + (f - e.target.value));
    }
  };
  const handelOnChangeT2 = (e) => {
    setT2(e.target.value);
    console.log("t2: " + e.target.value);
    if (e.target.value >= f) {
      setBLeftShape(0 - (e.target.value - f));
      console.log("bLeftShape: " + (0 - (e.target.value - f)));
      setY1LeftShape(88 - (e.target.value - f) / 2);
      console.log("y1LeftShape: " + (88 - (e.target.value - f) / 2));
      setY2LeftShape(93 - (e.target.value - f) / 2);
      console.log("y2LeftShape: " + (93 - (e.target.value - f) / 2));
      setY3LeftShape(103 - (e.target.value - f) / 2);
      console.log("y3LeftShape: " + (103 - (e.target.value - f) / 2));
      setY4LeftShape(109 - (e.target.value - f) / 2);
      console.log("y4LeftShape: " + (109 - (e.target.value - f) / 2));
    } else {
      setBLeftShape(f - e.target.value);
      setY1LeftShape(88 + (f - e.target.value) / 2);
      setY2LeftShape(93 + (f - e.target.value) / 2);
      setY3LeftShape(103 + (f - e.target.value) / 2);
      setY4LeftShape(109 + (f - e.target.value) / 2);
    }
  };
  const handelOnChangeBeta = (e) => {
    setGrad(e.target.value);
  };
  const initialBDistance = 346;
  const handelOnChangeBDistance = (e) => {
    setBDistance(() => Number(e.target.value));
    console.log("typeof bDistance: " + typeof Number(bDistance) + bDistance);
    if (e.target.value >= initialBDistance) {
      setWidth(316 + (e.target.value - initialBDistance));
      console.log("Width:" + (316 + (e.target.value - initialBDistance)));
      setXCoordinateRightShape((e.target.value - initialBDistance) / 2);
      setXCoordinateLeftShape(0 - (e.target.value - initialBDistance) / 2);
    } else {
      setWidth(316 - (initialBDistance - e.target.value));
      setXCoordinateRightShape(0 - (initialBDistance - e.target.value) / 2);
      setXCoordinateLeftShape((initialBDistance - e.target.value) / 2);
    }
  };

  return (
    <>
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
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ background: "lightgray" }}
        draggable={true}
      >
        <Layer>
          <LeftShape
            xCoordinateLeftShape={xCoordinateLeftShape}
            bLeftShape={bLeftShape}
            y4LeftShape={y4LeftShape}
            y3LeftShape={y3LeftShape}
            y2LeftShape={y2LeftShape}
            y1LeftShape={y1LeftShape}
            initialXLeftShape={initialXLeftShape}
          />
          <RightShape
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
          />
          <BottomShape
            xCoordinateRightShape={xCoordinateRightShape}
            yBetaBigLine={yBetaBigLine}
            xCoordinateLeftShape={xCoordinateLeftShape}
            bDistance={bDistance}
            width={width}
          />
          {/*additional line*/}
          <Line
            x={xCoordinateRightShape}
            stroke={"green"}
            strokeWidth={2}
            points={[
              initialX,
              bRightShape,
              xAdditionalLine,
              yBetaSmallLine + initialA,
            ]}
          />
        </Layer>
      </Stage>
    </>
  );
}
