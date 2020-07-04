import React from 'react';
import {post, contents} from '../../src/pages_styles/blog.module.css';

import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

const Post = ({ content, data }) => {
    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta property="og:title" content={data.title} />
            </Head>

            <div className={post}>
                <main className={contents} dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </>
    )
}

export const getStaticPaths = async () => {

    const files = fs.readdirSync("src/blog/posts");
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params: { slug } }) => {

    const file = fs.readFileSync(path.join("src/blog/posts", slug + ".md")).toString();
    const parsedMarkdown = matter(file);
    const markdownhtml = marked(parsedMarkdown.content)
    return {
        props: {
            data: parsedMarkdown.data,
            content: markdownhtml
        }
    };
};

export default Post;