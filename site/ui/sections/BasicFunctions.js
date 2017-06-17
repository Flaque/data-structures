import TrieWithButtons from '../TrieWithButtons.js';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default () => (
  <div id="basic-functions">

    <h3>Basic Functions of a Trie</h3>
    <h4><code>Insert()</code></h4>
    <p>
      The insert method of a trie works by taking string and progressively taking each letter. The first node is generally empty, but for the purposes of explaination, we've labeled it as <code>"root"</code> in the demo below.
    </p>

    <div className="code-wrapper">
      <SyntaxHighlighter language="python">
       {`
  def insert(word):
    k = word[0]

    if not this.edges[k]:
      this.edges[k] = new Trie()

    word = word.removeFirstLetter()
    this.edges[k].add(word)
       `}
      </SyntaxHighlighter>
    </div>

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
