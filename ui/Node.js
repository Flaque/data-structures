/**
 * I hear you like Node.js, so I put a Node.js in your Node.js.
 */
import { Group } from "@vx/group";

export default function Node({ node, events }) {
  const width = 55;
  const height = 23;
  const cornerRadius = 5;
  const color = "#5764c6";
  const textColor = "white";

  return (
    <Group top={node.x} left={node.y}>
      <rect
       height={height}
       width={width}
       y={-height / 2}
       x={-width / 2}
       fill={color}
       stroke={color}
       strokeWidth={1}
       rx={cornerRadius}
       ry={cornerRadius}
     />
     <text
       dy={".33em"}
       fontSize={13}
       fontFamily={"Courier New"}
       textAnchor={"middle"}
       style={{ pointerEvents: "none" }}
       fill={textColor}
     >
       {node.data.name}
     </text>
   </Group>
  );
 }
