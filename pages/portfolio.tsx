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
          <h1>Projects</h1>
          <p>coming soon...</p>
        </main>
      </div>

    </Layout>
  )
}

export default Portfolio;
