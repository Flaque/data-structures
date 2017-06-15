import _ from 'lodash';

function fromTrieChildren(trie, previous = "") {
  return Object.keys(trie.edges).map(d => {
    const prev = previous + d;
    return {
      name: prev,
      children: fromTrieChildren(trie.edges[d], prev)
    }
  });
}

export default function fromTrie(trie, previous = "") {
  const children = fromTrieChildren(trie);
  return [{
    name: "<root>",
    children: children
  }]
}
