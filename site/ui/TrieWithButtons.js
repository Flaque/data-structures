import React from "react";
import TreeGraph from "./tree.js";
import Trie from "../packages/trie/index.js";
import toTreeData from "../packages/trie/util/toTreeData.js";
import ToggleButton from './ToggleButton.js';

let trie = new Trie();
const margin = {
  top: 40,
  left: 50,
  right: 50,
  bottom: 40
};

/**
 * Private Functions
 */

function createTrie(words) {
  const trie = new Trie(); // Reset trie
  words.forEach(w => trie.add(w));
  return trie;
}

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

    this.toggleWord = this.toggleWord.bind(this);
    this.setWords = this.setWords.bind(this);
    this.turnWordOff = this.turnWordOff.bind(this);
    this.turnWordOn = this.turnWordOn.bind(this);
  }

  /**
   * Given some active words, create a new trie with them
   * and set the state to match
   */
  setWords(activeWords) {
    const trie = createTrie(activeWords);
    this.setState({
      data: toTreeData(trie)[0],
      activeWords,
    })
  }

  /**
   * Turns a word off in the Trie
   */
  turnWordOff(activeWords, word) {
    // Remove word from list.
    const newActiveWords = activeWords.filter(item => item !== word);
    this.setWords(newActiveWords);
  }

  /**
   * Turns a word on in the Trie
   */
  turnWordOn(activeWords, word) {
    activeWords.push(word);
    this.setWords(activeWords);
  }

  /**
   * Toggle a word, given an event. Generally called by an "onClick" method.
   */
  toggleWord(event) {
    const word = event.target.value;
    const activeWords = this.state.activeWords.slice(); // Make a copy
    const wordAlreadyExists = activeWords.includes(word);

    if (wordAlreadyExists) {
      this.turnWordOff(activeWords, word);
    } else {
      this.turnWordOn(activeWords, word);
    }
  }

  render() {
    const buttons = this.props.words.map(w => {
      const isOn = this.state.activeWords.includes(w);
      return (
        <ToggleButton on={isOn} onClick={this.toggleWord} value={w} key={w}>
          {w}
        </ToggleButton>
      );
    });

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
