import React from "react";
import { Arrow, Group, Line, Text } from "react-konva";
import { PropTypes } from "prop-types";
function BottomShape({
  xCoordinateLeftShape,
  xCoordinateRightShape,
  bDistance,
  aLeftShape,
  showDetails,
}) {
  return (
    <Group>
      <Line
        visible={showDetails}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[aLeftShape, 539, aLeftShape, 606]}
        dash={[10, 5]}
      />
      <Text
        visible={showDetails}
        x={aLeftShape + bDistance / 2}
        y={626}
        text={"b"}
        fontSize={30}
      />
      <Arrow
        visible={showDetails}
        x={xCoordinateLeftShape}
        points={[aLeftShape + 3, 606, bDistance + aLeftShape - 3, 606]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        visible={showDetails}
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[147, 539, 147, 606]}
        dash={[10, 5]}
      />
    </Group>
  );
}
BottomShape.propTypes = {
  xCoordinateLeftShape: PropTypes.number.isRequired,
  xCoordinateRightShape: PropTypes.number.isRequired,
  bDistance: PropTypes.number.isRequired,
  aLeftShape: PropTypes.number.isRequired,
  show: PropTypes.bool,
};

export default BottomShape;
