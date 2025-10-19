import Head from 'next/head'
// @ts-ignore
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='grid h-screen overflow-hidden place-content-center'>
      <Head>
        <title>Trecia Kat's Personal Portfolio</title>
        <meta name="description" content="Trecia Kat @TreciaKS Personal Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name='robots' content='index, follow'/>
        <meta name="keywords" content="Trecia Kat, TreciaKS, @TreciaKS, Trecia Sekgalo, Trecia Kat Twitter" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo1.png" />
      </Head>

        <section className={styles.container}>
          <div className={styles.wrapper}>
              <div className={`${styles.ball} ${styles.ball1}`}></div>
              <div className={`${styles.ball} ${styles.ball2}`}></div>
              <div className={`${styles.ball} ${styles.ball3}`}></div>
              <div className={`${styles.ball} ${styles.ball4}`}></div>

              <div className={styles.pacman}>
                  <div className={styles.pacmanTop}></div>
                  <div className={styles.pacmanBottom}></div>
              </div>
          </div>
          <p className={styles.welcome}>Start!!! <Link href='/Main'><a className={styles.arrow}>&rarr;</a></Link></p>
        </section>
    </div>
  )
}