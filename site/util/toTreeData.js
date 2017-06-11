export function fromTrie(trie) {
  if (trie.edges.length === 0) return undefined;

  let children = trie.edges
    .map(fromTrie)

  console.log(children)
}
