import React from 'react';
import { blog_card } from './style.module.css';

import Link from 'next/link';

const BlogCard = (props) => {
    return (
        <Link href={props.link}>
            <li className={blog_card}>
                <h3> {props.children} </h3>
            </li>
        </Link>
    )
}

export default BlogCard;