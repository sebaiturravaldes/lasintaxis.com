import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a>Sintaxis!</a>
        </h1>

        <p className="description">
          En este sitio podrás encontrar las sintaxis de los lenguajes de programación y{' '}
          <i>frameworks</i>, para ayudarte en tu aprendizaje
        </p>

        <div className={styles.grid}>
          <Link href="/javascript">
            <a className="card card-js">
              <h2>Javascript &rarr;</h2>
              <p>Ver la sintaxis de este lenguaje.</p>
            </a>
          </Link>

          <Link href="/python">
            <a className="card card-python">
              <h2>Python &rarr;</h2>
              <p>Ver la sintaxis de este lenguaje.</p>
            </a>
          </Link>

          <Link href="/react">
            <a className="card">
              <h2>React &rarr;</h2>
              <p>Ver la sintaxis de este framework.</p>
            </a>
          </Link>
          <Link href="/rust">
            <a className="card card-rust">
              <h2>Rust &rarr;</h2>
              <p>Ver la sintaxis de este lenguaje.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/siturra/syntax" target="_blank" rel="noopener noreferrer">
          Powered by Syntax
        </a>
      </footer>
    </div>
  )
}
