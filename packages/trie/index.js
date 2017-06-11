const isEmptyString = (w) => (!w || w.length === 0);

class Trie {
  constructor() {
    this.words = 0;
    this.prefixes = 0;
    this.edges = {};
  }

  /**
   * Adds a word to the trie.
   */
  addWord(word) {
    if (isEmptyString(word)) {
      this.words += 1;
    } else {
      this.prefixes += 1;

      // Check if we've got this letter yet
      const k = word[0];
      if (!this.edges[k]) {
        this.edges[k] = new Trie();
      }

      word = word.slice(1); // Cut off first letter
      this.edges[k].addWord(word);
    }
  }

  /**
   * Returns true if the word or partial word exists inside the trie.
   */
  has(word) {
    if (isEmptyString(word)) return true;

    // If this letter doesn't exist, return false.
    const k = word[0];
    if (!this.edges[k]) return false;

    // Otherwise, continue
    return this.edges[k].has(word.slice(1));
  }

  /**
   * Returns the total number of words in the trie
   * that have this prefix.
   */
  countPrefixes(prefix) {
    if (isEmptyString(prefix)) return this.prefixes;

    const k = prefix[0];
    if (!this.edges[k]) return 0;
    else {
      prefix = prefix.slice(1);
      return this.edges[k].countPrefixes(prefix);
    }
  }

  /**
   * Returns the total number of words that exactly
   * match this string.
   */
  countWords(word) {
    if (isEmptyString(word)) return this.words;

    const k = word[0];
    if (!this.edges[k]) return 0;
    else {
      word = word.slice(1);
      return this.edges[k].countWords(word);
    }
  }
}
