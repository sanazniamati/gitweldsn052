import React from "react";
import { Arrow, Group, Line, Rect, Text } from "react-konva";
import useImage from "use-image";
import rect from "../../assets/rect.png";

function BottomShape({
  xCoordinateRightShape,
  yBetaBigLine,
  xCoordinateLeftShape,
  bDistance,
  width,
}) {
  const [image] = useImage(rect);
  return (
    <Group>
      {/*  b */}
      <Line
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[350, yBetaBigLine, 350, 325]}
      />
      <Line
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[277, 194, 277, 325]}
      />
      <Arrow
        x={xCoordinateLeftShape}
        points={[280, 321, bDistance, 321]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={555 - 250} y={555 - 229} text={"b"} fontSize={40} />

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

export default BottomShape;
