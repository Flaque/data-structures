<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import TreeGraph from '../ui/tree.js';
import Trie from '../packages/trie/index.js';
import toTreeData from '../packages/trie/util/toTreeData.js';
=======
import TreeGraph from '../ui/tree.js';
>>>>>>> b9fd6f233c9a0e1a222643f8ce30f42159c0025f

const margin = {
  top: 10,
  left: 30,
  right: 40,
  bottom: 80,
}

<<<<<<< HEAD
const trie = new Trie()
trie.add("hey");
trie.add("heat");

const data = toTreeData(trie)[0];
=======
const data = {
  name: "T",
  children: [
    { name: "A"},
    { name: "B"},
    { name: "C"},
  ]
}
>>>>>>> b9fd6f233c9a0e1a222643f8ce30f42159c0025f

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
