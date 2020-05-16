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

      </div>

    </Layout>
  )
}

export default Portfolio;
