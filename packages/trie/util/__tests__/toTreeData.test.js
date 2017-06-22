import toTreeData from "../toTreeData.js";
import Trie from "../../index.js";

describe("toTreeData", () => {
  test("exists", () => {
    const trie = new Trie();
    trie.add("heat");
    trie.add("hat");
    console.log(JSON.stringify(toTreeData(trie), null, 2))
  })
})
