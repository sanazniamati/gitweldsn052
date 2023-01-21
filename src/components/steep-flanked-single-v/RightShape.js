import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";
import { PropTypes } from "prop-types";

function RightShape({
  xCoordinateRightShape,
  bRightShape,
  initialX,
  y4RightShape,
  y3RightShape,
  y1RightShape,
  y2RightShape,
  yBetaBigLine,
  xAdditionalLine,
  yBetaSmallLine,
  initialXQuadratic,
  initialA,
  showDetails,
}) {
  return (
    <Group>
      <Shape
        x={xCoordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(625, bRightShape);
          context.lineTo(initialX, bRightShape);
          context.lineTo(350, 196);
          context.lineTo(625, 196);
          context.lineTo(625, y4RightShape);
          context.lineTo(645, y3RightShape);
          context.lineTo(605, y2RightShape);
          context.lineTo(625, y1RightShape);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
      <Line
        visible={showDetails}
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[625, bRightShape, 723, bRightShape]}
        dash={[10, 5]}
      />
      <Arrow
        visible={showDetails}
        x={xCoordinateRightShape}
        points={[718, bRightShape + 3, 718, 196 - 3]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        visible={showDetails}
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[625, 196, 723, 196]}
        dash={[10, 5]}
      />
      <Text
        visible={showDetails}
        x={xCoordinateRightShape + 736}
        y={y1RightShape}
        text={"t1"}
        fontSize={30}
      />
      {/*    beta */}
      <Shape
        visible={showDetails}
        x={xCoordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(350, yBetaBigLine);
          context.quadraticCurveTo(
            initialXQuadratic,
            yBetaSmallLine - 40,
            xAdditionalLine,
            yBetaSmallLine + 10
          );
          context.fillStrokeShape(shape);
        }}
        stroke="blue"
        strokeWidth={3}
      />
      <Arrow
        visible={showDetails}
        x={xCoordinateRightShape}
        points={[336, yBetaBigLine + 5, 346, yBetaBigLine]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"red"}
        strokeWidth={3}
      />
      <Arrow
        visible={showDetails}
        x={xCoordinateRightShape}
        points={[
          xAdditionalLine + 2,
          yBetaSmallLine + 10,
          xAdditionalLine + 10,
          yBetaSmallLine + 15,
        ]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtEnding={false}
        pointerAtBeginning={true}
        stroke={"red"}
        strokeWidth={3}
      />
      <Text
        visible={showDetails}
        x={xCoordinateRightShape + initialX - 25}
        y={yBetaBigLine - 55}
        text={"β"}
        fontSize={35}
      />
      {/*additional line*/}
      <Line
        visible={showDetails}
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[
          initialX,
          bRightShape,
          xAdditionalLine,
          yBetaSmallLine + initialA,
        ]}
        dash={[10, 5]}
      />
    </Group>
  );
}
RightShape.prototype = {
  xCoordinateRightShape: PropTypes.number.isRequired,
  bRightShape: PropTypes.number.isRequired,
  initialX: PropTypes.number.isRequired,
  y4RightShape: PropTypes.number.isRequired,
  y3RightShape: PropTypes.number.isRequired,
  y1RightShape: PropTypes.number.isRequired,
  y2RightShape: PropTypes.number.isRequired,
  yBetaBigLine: PropTypes.number.isRequired,
  xAdditionalLine: PropTypes.number.isRequired,
  yBetaSmallLine: PropTypes.number.isRequired,
  initialXQuadratic: PropTypes.number.isRequired,
  initialA: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
};

export default RightShape;
