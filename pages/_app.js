import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import React, {useEffect, useState } from 'react';
import {Layout } from '../components'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
      <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
