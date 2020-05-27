import React from 'react';
import Head from 'next/head';
import style from '../src/pages_styles/contact.module.css';
import Layout from '../components/layout'

const {contact} = style;

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>contact</title>
      </Head>


      <div className={contact}>

      </div>

    </Layout>
  )
}

export default Contact;