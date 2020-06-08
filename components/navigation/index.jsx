import React, { useState } from 'react';
import style from './style.module.css';
import Link from 'next/link';

import { motion } from 'framer-motion';

import ThemeSwitch from '../themeSwitch';
import UserIcon from '../../public/vectors/userIcon';
import ProjectsIcon from '../../public/vectors/projectsIcon';
import HomeIcon from '../../public/vectors/homeIcon';
import BlogIcon from '../../public/vectors/blogIcon';

const { navbar, nav__item, nav__icon, main__nav__item, js, html, css, theme_switch } = style;

const Navigation = () => {

    const [show, setShow] = useState(false);

    return (
        <nav className={navbar}>
            <div className={[main__nav__item, js].join(' ')}
                onClick={() => setShow(!show)}>
                <h1>{show ? 'JS' : 'JV'}</h1>
            </div>
            <motion.div className={[main__nav__item, html].join(' ')}
                animate={{ left: show ? '50px' : '0px' }}>
                <p>5</p>
                <h1>HTML</h1>
            </motion.div>
            <motion.div className={[main__nav__item, css].join(' ')}
                animate={{ left: show ? '100px' : '0px' }}>
                <p>3</p>
                <h1>CSS</h1>
            </motion.div>

            <Link href={'/'}>
                <div className={nav__item}>
                    <div className={nav__icon}>
                        <UserIcon width="100%" height="100%" />
                    </div>
                    <p>Home</p>
                </div>
            </Link>
            <Link href={'/portfolio'}>
                <div className={nav__item}>
                    <div className={nav__icon}>
                        <ProjectsIcon width="100%" height="100%" />
                    </div>
                    <p>Project</p>
                </div>
            </Link>
            <Link href={'/blogs'}>
                <div className={nav__item}>
                    <div className={nav__icon}>
                        <BlogIcon width="90%" height="90%" />
                    </div>
                    <p>Blog</p>
                </div>
            </Link>
            <Link href={'/contact'}>
                <div className={nav__item}>
                    <div className={nav__icon}>
                        <HomeIcon width="90%" height="90%" />
                    </div>
                    <p>Contact</p>
                </div>
            </Link>

            <div className={theme_switch}>
                <ThemeSwitch />
            </div>
        </nav>
    )
}

export default React.memo(Navigation);