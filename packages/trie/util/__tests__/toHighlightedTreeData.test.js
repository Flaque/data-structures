import toHighlightedTreeData from "../toHighlightedTreeData.js";
import Trie from "../../index.js";

test("highlightedTreeData", () => {
  const trie = new Trie();
  trie.add("hey");
  trie.add("hello");

  console.log(JSON.stringify(toHighlightedTreeData(trie, "h"), null, 2));
})
