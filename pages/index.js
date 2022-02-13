import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  // const [filters, setfilters] = useState();
  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

  const router = useRouter();
  const gotoDetailPage = () => {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 123,
        ref: "social",
      },
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coder Wikipedia | Home</title>
        <meta name="keywords" content="coders"></meta>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Home Page</h1>
        {/* <button onClick={gotoDetailPage}>Go to PostDetail</button> */}
        <div className={styles.grid}>
          <Link href='/about' >
            <a href="" className={styles.card}>
              <h2>About </h2>
              <p>Go To About Page.</p>
            </a>
          </Link>
          <Link href='/coders' >
            <a href="" className={styles.card}>
              <h2>Coders</h2>
              <p>Go To Coders Page.</p>
            </a>
          </Link>
          <Link href='/todo' >
            <a href="" className={styles.card}>
              <h2>To Do &rarr;</h2>
              <p>Go To To Do Page.</p>
            </a>
          </Link>
          <Link href='/coders' >
            <a href="" className={styles.card}>
              <h2>Coders &rarr;</h2>
              <p>Go To Coders Page.</p>
            </a>
          </Link>
          <Link href='/coders' >
            <a href="" className={styles.card}>
              <h2>Coders &rarr;</h2>
              <p>Go To Coders Page.</p>
            </a>
          </Link>
          <Link href='/coders' >
            <a href="" className={styles.card}>
              <h2>Coders &rarr;</h2>
              <p>Go To Coders Page.</p>
            </a>
          </Link>
        </div>
        <Link href="/coders">
          <button className="btn">See All Coders</button>
        </Link>
        {/* <div style={{marginTop:' 2000px'}}></div>
        <Link href="/about"><a>Go to about</a></Link> */}
        <style jsx>
          {`
            .btn {
              display: block;
              width: 150px;
              padding: 8px 0;
              margin: 20px auto;
              background: #ffbf49;
              color: black;
              text-align: center;
              border: none;
              border-radius: 3px;
            }
          `}
        </style>
      </main>
    </div>
  );
}
