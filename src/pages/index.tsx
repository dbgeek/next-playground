import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js & React Playground</title>
        <meta name="description" content="Next.js & React Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <h1 className="text-3xl font-bold underline">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>
    </div>
  )
}

export default Home
