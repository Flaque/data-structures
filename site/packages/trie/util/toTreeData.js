import _ from 'lodash';

export default function fromTrie(trie, previous = "") {
  return Object.keys(trie.edges).map(d => {
    const prev = previous + d;
    return {
      name: prev,
      children: fromTrie(trie.edges[d], prev)
    }
  });
}
