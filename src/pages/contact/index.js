import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

function About() {
  return (
    <div>
      <Head>
        <title>Edison aca</title>
      </Head>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">OTRA.js!</a>
      </h1>
      <h1>
        <Link href="/">vamos</Link>
      </h1>
    </div>
  );
}

export default About;
