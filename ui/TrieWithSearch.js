import React from "react";
import TreeGraph from "./TreeGraph.js";
import Trie from "../packages/trie/index.js";
import toTreeData from "../packages/trie/util/toTreeData.js";
import toHighlightedTreeData from "../packages/trie/util/toHighlightedTreeData.js";
import HighlightedTrie from './HighlightedTrie.js';

const trie = new Trie();

class TrieWithSearch extends React.Component {

  constructor(props) {
    super(props);

    props.words.forEach(w => trie.add(w));
    this.state = {
      data: toTreeData(trie)[0],
      searchWord: ""
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      searchWord : event.target.value
    })
  }

  render() {
    const hasError = !trie.has(this.state.searchWord)

    return (
      <div
        style={{
          "margin-bottom": "25px"
        }}
      >
        <HighlightedTrie
          data={this.state.data}
          width={this.props.width}
          height={this.props.height}
          searchWord={this.state.searchWord}/>

        <div className={`form-group ${(hasError) ? "has-error" : ""}`}>
          <input
            type="text"
            className="form-input"
            placeholder="Search a word"
            onChange={this.onChange}
          />

        </div>

      </div>
    );
  }
}

export default TrieWithSearch;
