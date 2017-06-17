import React from "react";
import TreeGraph from "./tree.js";
import Trie from "../packages/trie/index.js";
import toTreeData from "../packages/trie/util/toTreeData.js";

const trie = new Trie();
const margin = {
  top: 40,
  left: 50,
  right: 50,
  bottom: 40
};

/**
 * A trie with buttons to activate specific words.
 */
class TrieWithButtons extends React.Component {
  constructor(props) {
    super(props);

    const data = toTreeData(trie)[0];

    this.state = {
      data: data,
      activeWords: []
    };

    this.addWord = this.addWord.bind(this);
  }

  addWord(event) {
    trie.add(event.target.value);

    this.setState({
      data: toTreeData(trie)[0]
    });
  }

  render() {
    const buttons = this.props.words.map(w =>
      <button className="btn" onClick={this.addWord} value={w} key={w}>
        {w}
      </button>
    );

    return (
      <div
        style={{
          "margin-bottom": "25px"
        }}
      >
        <div
          style={{
            background: "#eff1fa",
            margin: "25px 0",
            "border-radius": "5px"
          }}
        >
          <TreeGraph
            width={this.props.width}
            height={this.props.height}
            margin={margin}
            data={this.state.data}
          />
        </div>

        <div className="btn-group btn-group-block">
          {buttons}
        </div>

      </div>
    );
  }
}

export default TrieWithButtons;
