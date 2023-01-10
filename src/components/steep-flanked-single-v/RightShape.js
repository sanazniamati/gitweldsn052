import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

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
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[625, bRightShape, 723, bRightShape]}
      />
      <Arrow
        x={xCoordinateRightShape}
        points={[718, bRightShape + 3, 718, 196 - 3]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[625, 196, 723, 196]}
      />
      <Text
        x={xCoordinateRightShape + 736}
        y={y1RightShape}
        text={"t1"}
        fontSize={30}
      />
      {/*    beta */}
      <Shape
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
        x={xCoordinateRightShape}
        points={[336, yBetaBigLine + 5, 346, yBetaBigLine]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"red"}
        strokeWidth={3}
      />
      <Arrow
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
        x={xCoordinateRightShape + initialX - 25}
        y={yBetaBigLine - 55}
        text={"β"}
        fontSize={35}
      />
    </Group>
  );
}

export default RightShape;
