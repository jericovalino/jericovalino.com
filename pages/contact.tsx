import React from 'react';
import style from '../src/pages_styles/contact.module.css';
import Head from 'next/head';

import Layout from '../components/layout'

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>contact</title>
      </Head>


      <div className={style.Contact}>

      </div>

    </Layout>
  )
}

export default Contact;