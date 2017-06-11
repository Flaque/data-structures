import Trie from "../index.js";

describe("Trie", () => {

  test("it can add a word", () => {
    const trie = new Trie();
    trie.addWord("hey");
    expect(trie.has("hey")).toBe(true);
    expect(trie.has("hello")).toBe(false);
    expect(trie.has("ey")).toBe(false);
    expect(trie.has("he")).toBe(true);
  })

  test("it can count prefixes", () => {
    const trie = new Trie();
    trie.addWord("hey");
    trie.addWord("hi");
    expect(trie.countPrefixes("h")).toBe(2);
    expect(trie.countPrefixes("he")).toBe(1);
  })

  test("it can count words", () => {
    const trie = new Trie();
    trie.addWord("hello");
    trie.addWord("hello");
    expect(trie.countWords("hello")).toBe(2);
    expect(trie.countWords("floops")).toBe(0);
  })
})
