import React from 'react';
import Head from 'next/head';
import style from '../../src/pages_styles/blogs.module.css';
import Layout from '../../components/layout';
import BlogCard from '../../components/blogCard';

import fs from 'fs'

const { blogs } = style;

const Blogs = ({ filenames }) => {
  return (
    <Layout>
      <Head>
        <title>Blogs</title>
      </Head>

      <div className={blogs}>
        <ul>
          {filenames.map((filename, i) => {
            return <BlogCard key={i} link={`blogs/${filename}`}>{filename.replace(/-/g, " ")}</BlogCard>
          })
          }
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("src/blog/posts");
  const filenames = files.map(filename => filename.replace(".md", ""))

  return {
    props: {
      filenames
    }
  }
}

export default Blogs;