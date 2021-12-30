import Link from 'next/link'
import { CopyBlock } from 'react-code-blocks'

export default function Page() {
  return (
    <div>
      <h1>
        <Link href="/">React</Link>
      </h1>
      <p>En construcción ⛏</p>
      <div className="syntax">
        <div>
          <h2>
            <a href="https://es.reactjs.org/docs/hooks-intro.html" target="_blank" rel="noreferrer">
              Hooks
            </a>
          </h2>
          <CopyBlock
            text={`import React from 'react';
            
export default function Example() {
  return <div>Hello World</div>
}`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
        <div>
          <h2>
            <a href="https://es.reactjs.org/docs/hooks-state.html" target="_blank" rel="noreferrer">
              useState
            </a>
          </h2>
          <CopyBlock
            text={`import React, { useState } from 'react';
            
export default function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://es.reactjs.org/docs/hooks-effect.html"
              target="_blank"
              rel="noreferrer">
              useEffect
            </a>
          </h2>
          <CopyBlock
            text={`import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = 'You clicked ' + count + ' times';
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}
