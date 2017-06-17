import React from 'react'
import TreeGraph from './tree.js';
import Trie from '../packages/trie/index.js';
import toTreeData from '../packages/trie/util/toTreeData.js';

const trie = new Trie();

class TrieWithButtons extends React.Component {

  constructor(props) {
    super(props);

    const data = toTreeData(trie)[0];

    this.state = {
      data : data
    }

    this.addWord = this.addWord.bind(this);
  }

  addWord(event) {
    trie.add(event.target.value)

    this.setState({
        data: toTreeData(trie)[0]
      });
  }

  render() {

    const buttons = this.props.words.map( w => (
      <button
        className="btn"
        onClick={this.addWord}
        value={w}
        key={w}>
        {w}
      </button>
    ));

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
            data={this.state.data}
          />
        </div>

        <div className="btn-group btn-group-block">
          {buttons}
        </div>

      </div>
    )
  }
}

export default TrieWithButtons
