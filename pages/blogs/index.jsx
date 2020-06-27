import React, { useEffect } from 'react';
import style from '../../src/pages_styles/blogs.module.css';
import BlogCard from '../../components/blogs/card';

import Head from 'next/head';
import fs from 'fs';
import { useDispatch } from 'react-redux';

const { blogs } = style;

const Blogs = ({ filenames }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CHANGE_LABEL", label: "blogs" })
  }, [])

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