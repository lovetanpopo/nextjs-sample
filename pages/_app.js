import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
  console.log('run in : MyApp()')
  console.log(pageProps)
  return <Component {...pageProps} />
}

export default MyApp
