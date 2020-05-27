import React from 'react';
import Head from 'next/head';
import style from '../src/pages_styles/portfolio.module.css';

import Layout from '../components/layout';
import Card from '../components/card';

const { portfolio, content } = style;

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>portfolio</title>
      </Head>

      <div className={portfolio}>
        <main className={content}>

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
