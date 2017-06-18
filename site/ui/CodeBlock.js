import SyntaxHighlighter from 'react-syntax-highlighter';

export default ({
  children
}) => (
  <div className="code-wrapper">
    <SyntaxHighlighter language="python">
     {children}
    </SyntaxHighlighter>
  </div>
)
