import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a>La Sintaxis!</a>
        </h1>

        <p className={styles.description}>
          En este sitio podrás encontrar las sintaxis de los lenguajes de programación y{' '}
          <i>frameworks</i>
        </p>

        <div className={styles.grid}>
          <Link href="/javascript">
            <a className="card card-js">
              <h2>Javascript</h2>
              <p>Ver la sintaxis de este lenguaje</p>
            </a>
          </Link>

          <Link href="/python">
            <a className="card card-python">
              <h2>Python</h2>
              <p>Ver la sintaxis de este lenguaje</p>
            </a>
          </Link>

          <Link href="/php">
            <a className="card card-php">
              <h2>PHP</h2>
              <p>Ver la sintaxis de este lenguaje</p>
            </a>
          </Link>

          <Link href="/rust">
            <a className="card card-rust">
              <h2>Rust</h2>
              <p>Ver la sintaxis de este lenguaje</p>
            </a>
          </Link>

          <Link href="/react">
            <a className="card">
              <h2>React</h2>
              <p>Ver la sintaxis de este framework</p>
            </a>
          </Link>
        </div>

        <div>
          <Script async defer src="https://buttons.github.io/buttons.js" />
          <a
            className="github-button"
            href="https://github.com/siturra/lasintaxis.com"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star siturra/lasintaxis.com on GitHub">
            Star
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/siturra/lasintaxis.com"
          target="_blank"
          rel="noopener noreferrer">
          Powered by LaSintaxis
        </a>
      </footer>
    </div>
  )
}
