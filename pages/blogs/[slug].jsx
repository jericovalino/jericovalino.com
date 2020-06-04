import React from 'react';
import style from '../../src/pages_styles/blogStyle.module.css';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

import Layout from '../../components/layout';

const Post = ({content, data}) => {

    return(
        <>
        <Head>
            <title>{data.title}</title>
        </Head>
        <Layout>
            <div className={style.post}>
                <main className={style.content} dangerouslySetInnerHTML={{__html: content}}>
                    
                </main>
            </div>
        </Layout>
        </>
    )
}

export const getStaticPaths = async() => {

    const files = fs.readdirSync("src/blog/posts");
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))

    return{
        paths,
        fallback: false
    };
};

export const getStaticProps = async({params: {slug}}) => {

    const file = fs.readFileSync(path.join("src/blog/posts", slug + ".md")).toString();
    const parsedMarkdown = matter(file);
    const markdownhtml = marked(parsedMarkdown.content)
    return{
        props: {
           data: parsedMarkdown.data,
           content: markdownhtml 
        }
    };
};

export default Post;