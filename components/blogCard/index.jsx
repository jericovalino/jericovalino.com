import React from 'react';
import { blog_card } from './style.module.css';

import Link from 'next/link';


const BlogCard = (props) => {
    return (
        <Link prefetch={false} href={props.link}>
            <div className={blog_card}>
                <h1>
                    {props.children}
                </h1>
            </div>
        </Link>
    )
}

export default BlogCard;