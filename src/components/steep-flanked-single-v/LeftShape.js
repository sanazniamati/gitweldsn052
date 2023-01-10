import { Arrow, Group, Line, Shape, Text } from "react-konva";

function LeftShape({
  xCoordinateLeftShape,
  initialXLeftShape,
  bLeftShape,
  y4LeftShape,
  y3LeftShape,
  y2LeftShape,
  y1LeftShape,
}) {
  return (
    <Group>
      <Line
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[-95, bLeftShape, 0, bLeftShape]}
      />
      <Arrow
        x={xCoordinateLeftShape}
        points={[-95, bLeftShape + 3, -95, 196 - 3]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[-95, 196, 0, 196]}
      />
      <Text
        x={xCoordinateLeftShape - 135}
        y={y1LeftShape - 10}
        text={"t2"}
        fontSize={30}
      />

      <Shape
        x={xCoordinateLeftShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(0, bLeftShape);
          context.lineTo(initialXLeftShape, bLeftShape);
          context.lineTo(277, 196);
          context.lineTo(0, 196);
          context.lineTo(0, y4LeftShape);
          context.lineTo(19, y3LeftShape);
          context.lineTo(-18, y2LeftShape);
          context.lineTo(0, y1LeftShape);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
    </Group>
  );
}

export default LeftShape;
