import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Ghost from '../components/Ghost/Ghost'
import Menu from './Menu/Menu'
// import Link from 'next/link'

function Main() {
  return (
    <div>
      <Head>
        <title>Trecia Kat's Personal Portfolio</title>
        <meta name="description" content="Trecia Kat @TreciaKS Personal Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name='robots' content='index, follow'/>
        <meta name="keywords" content="Trecia Kat, TreciaKS, @TreciaKS, Trecia Sekgalo, Trecia Kat Twitter" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      
      <>
      <Navbar />
      <Ghost />
      <Menu />
      <Footer/>
      </>
    </div>
  )
}

export default Main