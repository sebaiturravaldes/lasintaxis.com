import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Sintaxis de los lenguajes de programación</title>
        <meta name="description" content="Sintaxis de los lenguajes de programación" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google" content="notranslate" />
        <meta property="og:image" content="https://lasintaxis.com/images/og.png" />
        <meta property="og:image:alt" content="Sintaxis de los lenguajes de programación" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:site_name" content="LaSintaxis" />
        <meta property="og:type" content="object" />
        <meta property="og:title" content="Sintaxis de los lenguajes de programación" />
        <meta property="og:url" content="https://lasintaxis.com" />
        <meta property="og:description" content="Sintaxis de los lenguajes de programación" />
      </Head>

      {children}
    </>
  )
}
