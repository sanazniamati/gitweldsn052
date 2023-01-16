import React from "react";
import { Arrow, Group, Line, Rect, Text } from "react-konva";
import useImage from "use-image";
import rect from "../../assets/rect.png";
import { PropTypes } from "prop-types";

function BottomShape({
  xCoordinateRightShape,
  yBetaBigLine,
  xCoordinateLeftShape,
  bDistance,
  width,
  show,
}) {
  const [image] = useImage(rect);
  return (
    <Group>
      {/*  b */}
      <Line
        visible={show}
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[350, yBetaBigLine, 350, 325]}
      />
      <Line
        visible={show}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[277, 194, 277, 325]}
      />
      <Arrow
        visible={show}
        x={xCoordinateLeftShape}
        points={[280, 321, bDistance + 277 - 3, 321]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text
        visible={show}
        x={555 - 250}
        y={555 - 229}
        text={"b"}
        fontSize={40}
      />

      <Rect
        x={xCoordinateLeftShape + 154}
        y={197}
        width={width}
        height={54}
        stroke={"blue"}
        strokeWidth={3}
        fillPatternImage={image}
      />
    </Group>
  );
}
BottomShape.prototype = {
  xCoordinateRightShape: PropTypes.number.required,
  xCoordinateLeftShape: PropTypes.number.required,
  yBetaBigLine: PropTypes.number.required,
  bDistance: PropTypes.number.required,
  width: PropTypes.number.required,
  show: PropTypes.bool,
};

export default BottomShape;
