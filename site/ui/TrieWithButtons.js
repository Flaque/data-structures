import React from 'react'
import TreeGraph from './tree.js';

class TrieWithButtons extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div style={{
          background: "#eff1fa",
          margin: "25px 0",
          "border-radius": "5px",
        }}>
          <TreeGraph
            width={this.props.width}
            height={this.props.height}
            margin={this.props.margin}
            data={this.props.data}
          />
        </div>
      </div>
    )
  }
}

export default TrieWithButtons
