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
trie.add("hey");
trie.add("heat");

const data = toTreeData(trie)[0];

export default () => (
  <div>
    <TreeGraph
      width={500}
      height={300}
      margin={margin}
      data={data}
    />
  </div>
)
