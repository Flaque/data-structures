import TrieWithButtons from '../TrieWithButtons.js';
import SyntaxHighlighter from 'react-syntax-highlighter';

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

    <div className="code-wrapper">
      <SyntaxHighlighter language="python">
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
      </SyntaxHighlighter>
    </div>

    <h5> Demo </h5>

    <TrieWithButtons
      width={600}
      height={300}
      words={["cats", "hats", "hall"]}
    />

    <h4><code>Find()</code></h4>
    <p>
      // TODO
    </p>

  </div>
)
