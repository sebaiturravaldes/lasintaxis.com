import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Sintaxis de los lenguajes de programación</title>
        <meta name="description" content="Sintaxis de los lenguajes de programación" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google" content="notranslate" />
      </Head>

      {children}
    </>
  )
}
