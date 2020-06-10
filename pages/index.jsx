import React from 'react';
import style from '../src/pages_styles/index.module.css';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import WaterMark from '../components/watermark';

import GithubIcon from '../public/vectors/githubIcon';
import LinkedinIcon from '../public/vectors/linkedinIcon';

// import { useSelector, useDispatch, connect } from 'react-redux'

const { index, social_accounts, content, name_tag, dp, main_btn, watermark } = style;

const IndexPage = (props) => {

  // const {count} = useSelector(state => state)
  // const dispatch = useDispatch();

  // const disFunc = () => {
  //  dispatch({
  //    type: "ADD-BLOG",
  //    name: "ninja"
  //  }) 
  // }

  return (
    <Layout watermark={"about"}>
      <Head>
        <title>Jerico Valino</title>
      </Head>

      <div className={index}>
        <div className={social_accounts}>
          <LinkedinIcon />
          <GithubIcon />
        </div>

        <main className={content}>
          <h1>Awesome every Pixel.</h1>
          <p>I’m a web developer from Batangas Philippines. I love building reactive and responsive website using the latest technologies available to deliver awesome experience to the user.</p>
          <div className={name_tag}>
            <div className={dp}>
              <img src={'/images/me.jpeg'} />
            </div>
            <section>
              <h1>Jerico C. Valino</h1>
              <p>React.js Web Developer</p>
            </section>
          </div>

          {/* <button onClick={disFunc}>
            dispatch
          </button>
          <p>{count}</p> */}

          <Link href={'/portfolio'}>
            <button className={main_btn}>view portfolio</button>
          </Link>
        </main>
        <div className={watermark}>
          <WaterMark />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;