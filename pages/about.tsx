import Head from "next/head";
import React from "react";
export interface AboutPageProps {}
export default function AboutPage(props: AboutPageProps) {
  return (
    <div>
      <Head>
        <title>Coder Wikipedia | About</title>
        <meta name="keywords" content="about"></meta>
      </Head>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        modi, eos et facilis dolor laudantium laborum necessitatibus corporis
        eum, ut quam sint quasi quas est ratione. Ullam enim magni praesentium?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque
        atque id similique nostrum dolorum, praesentium sequi nobis illum,
        dicta, at rem. Cum optio voluptatem repellendus qui voluptas maxime.
        Itaque?
      </p>
    </div>
  );
}
