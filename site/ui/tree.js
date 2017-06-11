import React from 'react';
import { Group } from '@vx/group';
import { Tree } from '@vx/hierarchy';
import { LinkHorizontal } from '@vx/shape';
import { hierarchy } from 'd3-hierarchy';


function Node({ node, events }) {
  const width = 40;
  const height = 20;
  const cornerRadius = 5;
  const color = "#2980b9";
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
        fontSize={9}
        fontFamily={"Helvetica"}
        textAnchor={"middle"}
        style={{ pointerEvents: "none"}}
        fill={textColor}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

function Link({ link }) {
  const color = "black";
  return (
    <LinkHorizontal
      data={link}
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
  )
}

class TreeGraph extends React.Component {

  constructor(props) {
    super(props);

    const data = hierarchy(props.data);
    this.state = {
      data : data
    }

    this.margin = props.margin;
    this.size = [
      props.height - this.margin.top - this.margin.bottom,
      props.width - this.margin.left - this.margin.right
    ];
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Tree
          top={this.margin.top}
          left={this.margin.left}
          root={this.state.data}
          size={this.size}
          nodeComponent={Node}
          linkComponent={Link}
        />
      </svg>
    )
  }
}

export default TreeGraph;
