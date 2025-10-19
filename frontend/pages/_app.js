import React from 'react'
// @ts-ignore
import '../styles/globals.css'
// @ts-ignore
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp