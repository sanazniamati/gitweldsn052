import React from "react";
import { Arrow, Group, Line, Text } from "react-konva";

function BottomShape({
  xCoordinateLeftShape,
  xCoordinateRightShape,
  bDistance,
  aLeftShape,
  show,
  factor,
}) {
  return (
    <Group>
      <Line
        visible={show}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[aLeftShape, 539, aLeftShape, 606]}
      />
      <Text visible={show} x={122} y={626} text={"b"} fontSize={30} />

      <Arrow
        visible={show}
        x={xCoordinateLeftShape}
        points={[aLeftShape + 3, 606, bDistance * factor, 606]}
        pointerLength={3}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        visible={show}
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[147, 539, 147, 606]}
      />
    </Group>
  );
}

export default BottomShape;
