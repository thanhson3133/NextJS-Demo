import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../component/footer'
import Navbar from '../component/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  // const [filters, setfilters] = useState();
  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

  const router = useRouter()
  const gotoDetailPage = () =>{
    router.push({
      pathname: '/posts/[postId]',
      query:{
        postId: 123,
        ref: 'social',
      }
    })
  }
  
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <h1>Home Page</h1>
        <button onClick={gotoDetailPage}>Go to PostDetail</button>
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
        </div>
        <div style={{marginTop:' 2000px'}}></div>
        <Link href="/about"><a>Go to about</a></Link>
      </main>
    </div>
  )
}
