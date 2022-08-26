import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>About - Free &amp; Open Source Services</title>
      </Head>

      <h1 className={styles.title}>
        About <Link href="/" passHref><a>foss.run</a></Link>
      </h1>

      <p className={styles.description}>
        At foss.run we offer <strong>free</strong> and <a href="https://github.com/SamHellawell/foss-services" target="_blank" rel="noreferrer">open source</a> services.<br /><br />
        We have seen that there are some basic and crucial services that could, and should, be free in <i>current year</i>.
        We aim to offer those services for free, no strings attached. In part because they are useful to us, and in part because
        they are useful to you.

        <br /><br />
        We are able to do this through an open source nature of the project and because of services like Vercel that allow for free hosting.
        If you wish to contribute, you can do so on the <a href="https://github.com/SamHellawell/foss-services" target="_blank" rel="noreferrer">GitHub repository</a>.

        <br /><br />
        We do not log any traffic or data of any kind that could be linked to any individual or entity. You can audit our code.
        You can also fork this project and deploy it on vercel/your own server if you wish to have some services ran by yourself.
      </p>
    </>
  )
}
