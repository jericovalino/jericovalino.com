import React from 'react';
import style from '../src/pages_styles/portfolio.module.css';
import Head from 'next/head';

import Layout from '../components/layout'

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>portfolio</title>
      </Head>


      <div className={style.Portfolio}>
        <main className={style.content}>


          <div className={style.card}>
            <img src={'/images/personal.png'}></img>
          </div>

          <div className={style.card}>
            <img src={'/images/yakad.png'}></img>
          </div>

          <div className={style.card}>
            <img src={'/images/burger builder.png'}></img>
          </div>

          <div className={style.card}>
            <img src={'/images/detection.png'}></img>
          </div>
        </main>
      </div>

    </Layout>
  )
}

export default Portfolio;
