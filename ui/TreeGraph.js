import React from "react";
import { Group } from "@vx/group";
import { Tree } from "@vx/hierarchy";
import { LinkHorizontal } from "@vx/shape";
import { hierarchy } from "d3-hierarchy";
import Node from './Node.js';
import Link from './Link.js';

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
