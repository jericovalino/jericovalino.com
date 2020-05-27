import React, { useState } from 'react';
import style from './style.module.css';
import Link from 'next/link';

import ThemeSwitch from '../themeSwitch';
import UserIcon from '../../public/vectors/userIcon';
import ProjectsIcon from '../../public/vectors/projectsIcon';
import HomeIcon from '../../public/vectors/homeIcon';

const { navbar, nav__item, main__nav__item, js, html, css, theme_switch } = style;

const Navigation = () => {

    const [show, setShow] = useState(false);

    return (
        <nav className={navbar}>
            <div className={[main__nav__item, js].join(' ')}
                onClick={() => setShow(!show)}>
                <h1>{show ? 'JS' : 'JV'}</h1>
            </div>
            <div className={[main__nav__item, html].join(' ')}
                style={{ left: show ? '50px' : '0px' }}>
                <p>5</p>
                <h1>HTML</h1>
            </div>
            <div className={[main__nav__item, css].join(' ')}
                style={{ left: show ? '100px' : '0px' }}>
                <p>3</p>
                <h1>CSS</h1>
            </div>

            <Link href={'/'}>
                <div className={nav__item}>
                    <UserIcon width="30px" height="30px" />
                </div>
            </Link>
            <Link href={'/portfolio'}>
                <div className={nav__item}>
                    <ProjectsIcon width="30px" height="30px" />
                </div>
            </Link>
            <Link href={'/contact'}>
                <div className={nav__item}>
                    <HomeIcon width="25px" height="25px" />
                </div>
            </Link>

            <div className={theme_switch}>
                <ThemeSwitch />
            </div>
        </nav>
    )
}

export default React.memo(Navigation);