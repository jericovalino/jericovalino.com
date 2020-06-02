import React from 'react';
import Head from 'next/head';
import style from '../src/pages_styles/portfolio.module.css';

import { motion } from 'framer-motion';

import Layout from '../components/layout';
import Card from '../components/card';

const { portfolio, content } = style;

const Portfolio = () => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <Layout>
      <Head>
        <title>portfolio</title>
      </Head>

      <div className={portfolio}>
        <motion.main
          className={content}
          variants={container}
          initial="hidden"
          animate="visible">

          <Card title={'JERICOVALNO'} imgUrl={'/images/personal.png'} >Elit mollit incididunt magna consequat enim.</Card>
          <Card title={'YAKADAPP'} imgUrl={'/images/yakad.png'} >Elit mollit incididunt magna consequat enim.</Card>
          <Card title={'BURGERMAKER'} imgUrl={'/images/burger builder.png'} >Elit mollit incididunt magna consequat enim.</Card>
          <Card title={'TENSORFLOW'} imgUrl={'/images/flexdetection.png'} >Elit mollit incididunt magna consequat enim.</Card>
          <Card title={'FLUTTERAPP'} imgUrl={'/images/flutterIOTClient.png'} >Elit mollit incididunt magna consequat enim.</Card>

        </motion.main>
      </div>

    </Layout>
  )
}

export default Portfolio;
