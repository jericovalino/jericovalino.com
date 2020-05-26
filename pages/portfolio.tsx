import React from 'react';
import style from '../src/pages_styles/portfolio.module.css';
import Head from 'next/head';

import Layout from '../components/layout';
import Card from '../components/card';

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>portfolio</title>
      </Head>

      <div className={style.Portfolio}>
        <main className={style.content}>

          <Card title={'JERICOVALNO'} imgUrl={'/images/personal.png'}>Elit mollit incididunt magna consequat enim.</Card>
          <Card title={'YAKADAPP'} imgUrl={'/images/yakad.png'}>Elit mollit incididunt magna consequat enim.</Card>
          <Card title={'BURGERMAKER'} imgUrl={'/images/burger builder.png'}>Elit mollit incididunt magna consequat enim.</Card>
          <Card title={'TENSORFLOW'} imgUrl={'/images/flexdetection.png'}>Elit mollit incididunt magna consequat enim.</Card>

        </main>
      </div>

    </Layout>
  )
}

export default Portfolio;
