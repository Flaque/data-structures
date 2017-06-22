import TrieWithButtons from '../TrieWithButtons.js';
import CodeBlock from '../CodeBlock.js';

/**
 * Describes the basic functions of a trie.
 */
export default () => (
  <div id="basic-functions">

    <h3>Basic Functions of a Trie</h3>
    <h4><code>Insert()</code></h4>
    <p>
      The insert method of a Trie works by taking string and progressively taking each letter. The first node is generally empty, but for the purposes of explaination, we've labeled it as <code>"root"</code> in the demo below.
    </p>

    <h5> Pseudocode </h5>

    <CodeBlock>
       {`
  def insert(word):

    # Step 1: Grab the first letter of the word.
    firstLetter = word[0]

    # Step 2: Check if this letter already exists in
    #         our children at this node.
    if not this.children[firstLetter]:
      this.children[firstLetter] = new Trie()

    # Step 3: Pop off the first letter, then recurse.
    word = word.removeFirstLetter()
    this.children[firstLetter].add(word)
       `}
    </CodeBlock>

    <h5> Demo </h5>

    <TrieWithButtons
      width={600}
      height={300}
      words={["cats", "hats", "hall"]}
    />

    <h4><code>Find()</code></h4>
    <p>
      The find method of a Trie works in the same way that most other tree structures work. Take the first letter of the word you're looking for and see if that exists as a child node. If it doesn't, you can stop, as that word does not exist in the Trie. Otherwise, find the node with that letter and search it's children for the next lettter. If you've run out of letters, then you've your item.
    </p>

    <h5> Pseudocode </h5>

    <CodeBlock>
      {`
  def find(word):

    # Step 1: Do a check to see we've found the node
    if isEmptyString(word) return true;

    # Step 2: Check to see if we've hit a letter that's not
    #         in the children of the current node
    const firstLetter = word[0];
    if not this.children[firstLetter]:
      return false;
    else:

      # Step 3: Pop off the first letter and continue searching
      word = word.removeFirstLetter()
      return this.children[firstLetter].has(word)
      `}
    </CodeBlock>

  </div>
)
