import React from 'react';
import ReactDOM from 'react-dom';
import TreeGraph from '../ui/tree.js';
import Trie from '../packages/trie/index.js';
import toTreeData from '../packages/trie/util/toTreeData.js';
import SiteHead from '../ui/SiteHead.js';
import TrieWithButtons from '../ui/TrieWithButtons.js';

const margin = {
  top: 40,
  left: 50,
  right: 50,
  bottom: 40,
}

const trie = new Trie()

class App extends React.Component {

  constructor(props) {
    super(props);

    const data = toTreeData(trie)[0];

    this.state = {
      data : data
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    trie.add(event.target.value)

    this.setState({
        data: toTreeData(trie)[0]
      });
  }

  render() {
    return (
      <div id="root" style={{
        display: "flex",
        "flex-direction": "column",
        "max-width": "600px",
        "margin": "auto",
      }}>
      <SiteHead titleText={"Trie - Data Structure"}/>
        <TrieWithButtons
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
