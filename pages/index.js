import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  // const [filters, setfilters] = useState();

  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);
  

  return (
    <div className={styles.container}>
      <Head>
        {/* <title>Thanh Sơn Nè Bé Chang</title>
        <meta name="description" content="Learn NextJs + TypeScript " />
        <link rel="icon" href="/favicon.ico" /> */}
        <title>alo alo</title>
        <meta name="description" content="alo alo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Thanh Sơn Nè Bé Chang
        </h1>
        <img src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/271932316_1135946097148432_2474306911556889316_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=1r_tOoAKy2oAX_mIeru&tn=wm8d0-KbowfodKge&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVIUWfVnAvrczpXBIhH7_bghnhCgvvD8RYh5fFrruQyhSA&oe=62252026" alt="Girl in a jacket" width="500" height="600"></img>
        <h2>I love you bé chang</h2>
        <h2>Đừng có cap màn hình up story nha a khóc á :((((((</h2>
{/* 
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
