import React from 'react';
import style from '../src/pages_styles/index.module.css';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import WaterMark from '../components/watermark';

import GithubIcon from '../public/vectors/githubIcon';
import LinkedinIcon from '../public/vectors/linkedinIcon';
import Avatar from '../public/vectors/avatar';

const { index, social_accounts, content, name_tag, dp, main_btn, watermark } = style;

const IndexPage = (props) => {

  return (
    <>
      <Head>
        <title>Jerico Valino</title>
        <meta property="og:title" content="Awesome every Pixel" />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:description" content="I’m a web developer from Batangas Philippines. I love building reactive and responsive website using the latest technologies available to deliver awesome experience to the user." />
      </Head>

      <Layout watermark="about">
        <div className={index}>
          <div className={content}>
            <div className={social_accounts}>
              <LinkedinIcon />
              <GithubIcon />
            </div>
            <section>
              <h1>Awesome every Pixel.</h1>
              <p>I’m a web developer from Batangas Philippines. I love building reactive and responsive website using the latest technologies available to deliver awesome experience to the user.</p>

              <div className={name_tag}>
                <div className={dp}>
                  <Avatar />
                </div>
                <section>
                  <h1>Jerico C. Valino</h1>
                  <p>React.js Web Developer</p>
                </section>
              </div>

              <Link href={'/portfolio'}>
                <button className={main_btn}>view portfolio</button>
              </Link>
            </section>

            <div className={watermark}>
              <WaterMark />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

export default IndexPage;

  // import { useSelector, useDispatch, connect } from 'react-redux'

  // const {count} = useSelector(state => state)
  // const dispatch = useDispatch();

  // const disFunc = () => {
  //  dispatch({
  //    type: "ADD-BLOG",
  //    name: "ninja"
  //  }) 
  // }