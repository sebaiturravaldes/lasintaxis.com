import Link from 'next/link'
import { CopyBlock } from 'react-code-blocks'

export default function Page() {
  return (
    <div>
      <h1>
        <Link href="/">Rust</Link>
      </h1>
      <p>En construcción ⛏</p>
      <div className="syntax">
        <div>
          <h2>
            <a
              href="https://doc.rust-lang.org/rust-by-example/fn.html"
              target="_blank"
              rel="noreferrer">
              Funciones
            </a>
          </h2>
          <CopyBlock
            text={`fn print_number(n: i32) {
  println!("n is: {}", n);
}`}
            language="rust"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://doc.rust-lang.org/rust-by-example/flow_control/if_else.html"
              target="_blank"
              rel="noreferrer">
              if / else if / else
            </a>
          </h2>
          <CopyBlock
            text={`if n < 0 {
  print!("{} is negative", n);
} else if n > 0 {
  print!("{} is positive", n);
} else {
  print!("{} is zero", n);
}`}
            language="rust"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}
