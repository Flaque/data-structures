import React from "react";
import { Group } from "@vx/group";
import { Tree } from "@vx/hierarchy";
import { LinkHorizontal } from "@vx/shape";
import { hierarchy } from "d3-hierarchy";

function Node({ node, events }) {
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

function Link({ link }) {
  const color = "#ddd";
  return (
    <LinkHorizontal data={link} stroke={color} strokeWidth="1" fill="none" />
  );
}

class TreeGraph extends React.Component {
  constructor(props) {
    super(props);

    this.margin = props.margin;
    this.size = [
      props.height - this.margin.top - this.margin.bottom,
      props.width - this.margin.left - this.margin.right
    ];
  }

  render() {
    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        style={{
          margin: "auto"
        }}
      >
        <Tree
          top={this.margin.top}
          left={this.margin.left}
          root={hierarchy(this.props.data)}
          size={this.size}
          nodeComponent={Node}
          linkComponent={Link}
        />
      </svg>
    );
  }
}

export default TreeGraph;
