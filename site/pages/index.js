import React from 'react';
import ReactDOM from 'react-dom';
import TreeGraph from '../ui/tree.js';
import Trie from '../packages/trie/index.js';
import toTreeData from '../packages/trie/util/toTreeData.js';

const margin = {
  top: 10,
  left: 30,
  right: 40,
  bottom: 80,
}

const trie = new Trie()

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data : toTreeData(trie)[0]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    trie.add(event.target.value)

    this.setState((prevState) => {
      return {
        data: toTreeData(trie)
      }
    });
  }

  render() {
    return (
      <div id="root" style={{
        display: "flex"
      }}>
        <TreeGraph
          width={600}
          height={300}
          margin={margin}
          data={this.state.data}
        />

        <input type="text" onChange={this.handleChange}>
        </input>
      </div>
    )
  }
}


export default () => (
  <App />
)
