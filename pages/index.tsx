import React from 'react';
import style from '../src/pages_styles/index.module.css';
import Head from 'next/head'

import WaterMark from '../components/watermark';
import Navigation from '../components/navigation';


const IndexPage = () => {
  return (
    <div className={style.Index}>
      <Head>
        <title>jerico</title>
      </Head>
      <Navigation />
      <WaterMark />
    </div>
  )
}

export default IndexPage