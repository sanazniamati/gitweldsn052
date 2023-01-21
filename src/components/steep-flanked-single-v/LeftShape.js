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
  showDetails,
}) {
  return (
    <Group>
      <Line
        visible={showDetails}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[-95, bLeftShape, 0, bLeftShape]}
        dash={[10, 5]}
      />
      <Arrow
        visible={showDetails}
        x={xCoordinateLeftShape}
        points={[-95, bLeftShape + 3, -95, 196 - 3]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        visible={showDetails}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[-95, 196, 0, 196]}
        dash={[10, 5]}
      />
      <Text
        visible={showDetails}
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
