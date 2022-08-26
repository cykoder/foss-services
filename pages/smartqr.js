import {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function FormField({ label, name, value, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label><br />
      <input type="text" name={name} className={styles.textfield} value={value} onChange={onChange} />
    </>
  );
}

function SmartQRForm() {
  const [state, setState] = useState({
    android: '',
    other: '',
    ios: '',
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleClickSubmit(e) {
    e.preventDefault();
    e.target.parentNode.click();
  }

  const hasValues = !!(state.ios || state.android || state.other);
  const qrPath = hasValues ? `/qr?ios=${encodeURIComponent(state.ios)}&android=${encodeURIComponent(state.android)}&other=${encodeURIComponent(state.other)}` : '/qr-placeholder.png';

  return (
    <form method="GET" action="/qr" className={`${styles.paper} ${styles.flexRowMblCol}`}>
      <div className={styles.paperContent} style={{
        width: '100%',
        marginRight: '1rem'
      }}>
        <FormField label="iOS URL:" name="ios" value={state.ios} onChange={handleChange} />
        <br />
        <FormField label="Android URL:" name="android" value={state.android} onChange={handleChange} />
        <br />
        <FormField label="Fallback URL:" name="other" value={state.other} onChange={handleChange} />
      </div>
      <div className={styles.paperContent} style={{
        flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div className={styles.qrContainer}>
          <img src={qrPath} style={{ width: '210px', heighT: '210px' }} />
        </div>
        <a
          style={{ marginTop: '1rem' }}
          disabled={!hasValues}
          href={hasValues ? qrPath : undefined}
          target="_blank"
          download={hasValues} rel="noreferrer">
          <input className={styles.button} onClick={handleClickSubmit} type="submit" value="Download PNG" />
        </a>
      </div>
    </form>
  )
}

export default function SmartQR() {
  return (
    <>
      <Head>
        <title>Generate Smart QR Code - Free &amp; Open Source Services</title>
        <meta name="description" content="Generate Smart QR codes that can " />
      </Head>

      <h1 className={styles.title}>
        Boost app downloads with a Smart QR Code
      </h1>

      <p className={styles.description}>
        Use the form below to generate a Smart QR code that will redirect to 3 different URLs based on what device scanned it.
        This can be used for creating a single QR code that links to the iOS/Android app stores, removing one step in acquisition flow. 
      </p>

      <SmartQRForm />

      <p className={styles.description}>
        It works by creating a QR code that redirects to our services, which then checks the user agent of the device that scanned it.
        If it detects iOS/Android, it will navigate the user with a fast 301 redirect to the URL you provided in the form.
        If it cannot determine the user agent, it will redirect the user to the &quot;Fallback URL&quot; provided.
        <br /><br />
        If you dont want to rely on our service for the redirection, you can fork our repository and deploy it yourself easily.
        &nbsp;
        <Link href="/about" passHref>
          <a>
            Read more on our about page.
          </a>
        </Link>
      </p>
    </>
  )
}
