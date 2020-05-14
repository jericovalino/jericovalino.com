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
      <main className={style.content}>
        <h1>Awesome every Pixels.</h1>
        <p>I’m a web developer from Batangas Philippines. I love building reactive and responsive website to deliver awesome experience to the user.</p>
      </main>
      <button className={style.mainBtn}>Send Me An Email</button>
      <WaterMark />
    </div>
  )
}

export default IndexPage