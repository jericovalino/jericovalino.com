import React from 'react';
import style from '../src/pages_styles/index.module.css';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import WaterMark from '../components/watermark';

import GithubIcon from '../public/vectors/githubIcon';
import LinkedinIcon from '../public/vectors/linkedinIcon';

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>jerico</title>
      </Head>

      <div className={style.Index}>

        <div style={{ position: 'fixed', top: '5px', right: '5px', width: '80px', height: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <LinkedinIcon />
          <GithubIcon />
        </div>

        <main className={style.content}>
          <h1>Awesome every Pixels.</h1>
          <p>I’m a web developer from Batangas Philippines. I love building reactive and responsive website using the latest technologies available to deliver awesome experience to the user.</p>
          <div className={style.nameTag}>
            <div className={style.dp}>
              <img src={'/images/me.jpeg'} />
            </div>
            <section>
              <h1>Jerico C. Valino</h1>
              <p>React.js Web Developer</p>
            </section>
          </div>

          <Link href={'/portfolio'}>
            <button className={style.mainBtn}>view portfolio</button>
          </Link>
        </main>
        <div className={style.waterMark}>
          <WaterMark />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage