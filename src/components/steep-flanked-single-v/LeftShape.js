import { Arrow, Group, Line, Shape, Text } from "react-konva";
import { PropTypes } from "prop-types";

function LeftShape({
  xCoordinateLeftShape,
  initialXLeftShape,
  bLeftShape,
  y4LeftShape,
  y3LeftShape,
  y2LeftShape,
  y1LeftShape,
  show,
}) {
  return (
    <Group>
      <Line
        visible={show}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[-95, bLeftShape, 0, bLeftShape]}
      />
      <Arrow
        visible={show}
        x={xCoordinateLeftShape}
        points={[-95, bLeftShape + 3, -95, 196 - 3]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        visible={show}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[-95, 196, 0, 196]}
      />
      <Text
        visible={show}
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
LeftShape.propTypes = {
  xCoordinateLeftShape: PropTypes.number.isRequired,
  initialXLeftShape: PropTypes.number.isRequired,
  bLeftShape: PropTypes.number.isRequired,
  y1LeftShape: PropTypes.number.isRequired,
  y2LeftShape: PropTypes.number.isRequired,
  y3LeftShape: PropTypes.number.isRequired,
  y4LeftShape: PropTypes.number.isRequired,
  show: PropTypes.bool,
};

export default LeftShape;
