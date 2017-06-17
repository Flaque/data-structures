import React from 'react';
import ReactDOM from 'react-dom';
import TreeGraph from '../ui/tree.js';
import Trie from '../packages/trie/index.js';
import toTreeData from '../packages/trie/util/toTreeData.js';
import SiteHead from '../ui/SiteHead.js';
import Introduction from '../ui/sections/introduction.js';
import BasicFunctions from '../ui/sections/BasicFunctions.js';



class App extends React.Component {

  render() {
    return (
      <div id="root" style={{
        display: "flex",
        "flex-direction": "column",
        "max-width": "600px",
        "margin": "auto",
        "padding-top": "50px",
        "padding-bottom": "50px",
      }}>
      <SiteHead titleText={"Trie - Data Structure"}/>
        <Introduction/>
        <BasicFunctions/>
      </div>
    )
  }
}


export default () => (
  <App />
)
