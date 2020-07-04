import React from 'react';
import { blogs } from '../../src/pages_styles/blogs.module.css';

import fs from 'fs';
import Head from 'next/head';

import BlogCard from '../../components/blogs/card';

const Blogs = ({ filenames }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>

      <div className={blogs}>
        <ul>
          {filenames.map((filename, i) =>
            <BlogCard key={i} link={`blogs/${filename}`}>{filename.replace(/-/g, " ")}</BlogCard>
          )}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const filenames = await new Promise((res, rej) => {
    fs.readdir("src/blog/posts", { encoding: 'utf8' }, (err, file) => {
      if (err) rej(err)
      else res(file)
    })
  })
    .then(data => data.map(filename => filename.replace(".md", "")))
    .catch(err => console.log(err))

  return {
    props: {
      filenames
    }
  }
}

export default Blogs;