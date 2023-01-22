import React from "react";
import { Arrow, Group, Line, Text } from "react-konva";
import { PropTypes } from "prop-types";
function BottomShape({
  xCoordinateLeftShape,
  xCoordinateRightShape,
  bDistance,
  showDetails,
}) {
  return (
    <Group>
      <Line
        visible={showDetails}
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={1.5}
        points={[114, 539, 114, 606]}
        dash={[10, 5]}
      />
      <Text
        visible={showDetails}
        x={114 + bDistance / 2}
        y={626}
        text={"b"}
        fontSize={30}
      />
      <Arrow
        visible={showDetails}
        x={xCoordinateLeftShape}
        points={[114 + 3, 606, bDistance + 114 - 3, 606]}
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
        strokeWidth={1.5}
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
  show: PropTypes.bool,
};

export default BottomShape;
