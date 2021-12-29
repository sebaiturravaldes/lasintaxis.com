import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sintaxis de los lenguajes de programación</title>
        <meta name="description" content="Sintaxis de los lenguajes de programación" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google" content="notranslate" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a>Sintaxis de los lenguajes de programación!</a>
        </h1>

        <p className="description">
          En este sitio podrás encontrar las sintaxis de los lenguajes de programación y{' '}
          <i>frameworks</i>, para ayudarte su aprendizaje
        </p>

        <div className={styles.grid}>
          <Link href="/javascript">
            <a className={styles.card}>
              <h2>Javascript &rarr;</h2>
              <p>Ver la sintaxis de este lenguaje.</p>
            </a>
          </Link>

          <Link href="/react">
            <a className={styles.card}>
              <h2>React &rarr;</h2>
              <p>Ver la sintaxis de este framework.</p>
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
