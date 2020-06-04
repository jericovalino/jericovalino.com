import React from 'react';
import Head from 'next/head';
import style from '../../src/pages_styles/contact.module.css';
import Layout from '../../components/layout'

import Link from 'next/link';
import fs from 'fs'

const {contact} = style;

const Blogs = ({filenames}) => {
  return (
    <Layout>
      <Head>
        <title>Blogs</title>
      </Head>

      <div className={contact}>
            <h4>Coming soon...</h4>
            <ul>
                {filenames.map((filename, i) => {
                    return <Link key={i} href={`blogs/${filename}`}>
                                <a><li>{filename}</li></a>
                           </Link>
                    })
                }   
            </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps = async() => {
    const files = fs.readdirSync("src/blog/posts");
    const filenames = files.map(filename => filename.replace(".md", ""))

    return{
        props: {
           filenames 
        }
    }
}

export default Blogs;