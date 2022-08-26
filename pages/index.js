import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Free &amp; Open Source Services
      </h1>

      <p className={styles.description}>
        At foss.run we offer <strong>free</strong> and <a href="github">open source</a> services.<br />
        Always free, no logs, auditable code.
      </p>

      <div className={styles.grid}>
        <Link href="/about" passHref>
          <a className={styles.card}>
            <h2>About &rarr;</h2>
            <p>
              Explore our how and why we offer always free services to anyone.
            </p>
          </a>
        </Link>

        <Link href="/smartqr" passHref>
          <a className={styles.card}>
            <h2>Smart QR Codes &rarr;</h2>
            <p>
              Generate Smart QR codes that redirect to the right app store/URL.
            </p>
          </a>
        </Link>
      </div>
    </>
  )
}
