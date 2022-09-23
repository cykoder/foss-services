import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const externalServices = [{
  title: 'Penpot',
  url: 'https://penpot.app/',
  description: 'Penpot - The Open-Source design & prototyping platform',
}, {
  title: 'dub.sh',
  url: 'https://dub.sh/',
  description: 'Dub - Open-Source Url Shortener - Bitly Alternative',
}, {
  title: 'Vercel',
  url: 'https://vercel.com/',
  description: 'The fastest frontend platform for deploying Next.js',
}];

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Free &amp; Open Source Services
      </h1>

      <p className={styles.description}>
        At foss.run we offer <strong>free</strong> and <a href="https://github.com/SamHellawell/foss-services" target="_blank" rel="noreferrer">open source</a> services.<br />
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

        {externalServices.map(service => (
          <Link href={service.url} passHref key={service.title}>
            <a className={styles.card} target="_blank">
              <h2>{service.title} &rarr;</h2>
              <p>
                {service.description} (external)
              </p>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}
