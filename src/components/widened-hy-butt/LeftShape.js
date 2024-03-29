import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";
import { PropTypes } from "prop-types";
import "konva/lib/shapes/Line";
import "konva/lib/shapes/Text";
import "konva/lib/shapes/Arrow";
function LeftShape({
  xCoordinateLeftShape,
  x1LeftShape,
  x2LeftShape,
  x3LeftShape,
  x4LeftShape,
  showDetails,
  startPointLeftShape,
}) {
  return (
    <Group>
      <Line
        visible={showDetails}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={1.5}
        points={[startPointLeftShape, -56, startPointLeftShape, 0]}
        dash={[10, 5]}
      />
      <Text
        visible={showDetails}
        x={xCoordinateLeftShape + x1LeftShape}
        y={-90}
        text={"t2"}
        fontSize={30}
      />
      <Arrow
        visible={showDetails}
        x={xCoordinateLeftShape}
        points={[startPointLeftShape + 3, -56, 114 - 3, -56]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        visible={showDetails}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={1.5}
        points={[114, -56, 114, 0]}
        dash={[10, 5]}
      />

      <Shape
        x={xCoordinateLeftShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(startPointLeftShape, 0);
          context.lineTo(x1LeftShape, 0);
          context.lineTo(x2LeftShape, 16);
          context.lineTo(x3LeftShape, -19);
          context.lineTo(x4LeftShape, 0);
          context.lineTo(114, 0);
          context.lineTo(114, 539);
          context.lineTo(x4LeftShape, 539);
          context.lineTo(x3LeftShape, 523);
          context.lineTo(x2LeftShape, 555);
          context.lineTo(x1LeftShape, 539);
          context.lineTo(startPointLeftShape, 539);
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
  x1LeftShape: PropTypes.number.isRequired,
  x2LeftShape: PropTypes.number.isRequired,
  x3LeftShape: PropTypes.number.isRequired,
  x4LeftShape: PropTypes.number.isRequired,
  show: PropTypes.bool,
};

export default LeftShape;
