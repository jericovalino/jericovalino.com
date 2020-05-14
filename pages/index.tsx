import React from 'react';
import style from '../src/pages_styles/index.module.css';
import Head from 'next/head';

import Layout from '../components/layout';
import WaterMark from '../components/watermark';


const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>jerico</title>
      </Head>

      <div className={style.Index}>
        <main className={style.content}>
          <h1>Awesome every Pixels.</h1>
          <p>I’m a web developer from Batangas Philippines. I love building reactive and responsive website to deliver awesome experience to the user.</p>
          <button className={style.mainBtn}>Send Me An Email</button>
        </main>
        <div className={style.waterMark}>
          <WaterMark />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage