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
  marginX,
  // marginY,
}) {
  return (
    <Group>
      <Line
        visible={showDetails}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[-95 + marginX, bLeftShape, marginX, bLeftShape]}
        dash={[10, 5]}
      />
      <Arrow
        visible={showDetails}
        x={xCoordinateLeftShape}
        points={[-95 + marginX, bLeftShape + 3, -95 + marginX, 196 - 3]}
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
        points={[-95 + marginX, 196, marginX, 196]}
        dash={[10, 5]}
      />
      <Text
        visible={showDetails}
        x={xCoordinateLeftShape - 135 + marginX}
        y={y1LeftShape - 10}
        text={"t2"}
        fontSize={30}
      />

      <Shape
        x={xCoordinateLeftShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(marginX, bLeftShape);
          context.lineTo(marginX + initialXLeftShape, bLeftShape);
          context.lineTo(277 + marginX, 196);
          context.lineTo(marginX, 196);
          context.lineTo(marginX, y4LeftShape);
          context.lineTo(19 + marginX, y3LeftShape);
          context.lineTo(-18 + marginX, y2LeftShape);
          context.lineTo(marginX, y1LeftShape);
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
