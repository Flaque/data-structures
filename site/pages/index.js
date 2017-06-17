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

class App extends React.Component {

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
          words={["cats", "hats", "hall"]}
        />
      </div>
    )
  }
}


export default () => (
  <App />
)
