import TrieUI from './TrieUI.js';
import React from 'react';
import toHighlightedTreeData from "../packages/trie/util/toHighlightedTreeData.js";

export default ({
  data,
  width,
  height,
  searchWord,
}) => {
  return (
    <TrieUI
      data={toHighlightedTreeData(data, searchWord)}
      width={width}
      height={height}
    />
  )
}
