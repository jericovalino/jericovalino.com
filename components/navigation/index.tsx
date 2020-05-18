import React, { useState } from 'react';
import style from './style.module.css';
import Link from 'next/link';

import ThemeSwitch from '../themeSwitcher';
import UserIcon from '../../public/vectors/userIcon';
import ProjectsIcon from '../../public/vectors/projectsIcon';
import HomeIcon from '../../public/vectors/homeIcon';

const Navigation = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <nav className={style.navbar}>
                <div className={[style.main__nav__item, style.js].join(' ')} onClick={() => setShow(!show)}><h1>{show ? 'JS' : 'JV'}</h1></div>
                <div style={{ left: show ? '50px' : '0px' }} className={[style.main__nav__item, style.html].join(' ')}><text>5</text><h1>HTML</h1></div>
                <div style={{ left: show ? '100px' : '0px' }} className={[style.main__nav__item, style.css].join(' ')}><text>3</text><h1>CSS</h1></div>

                <Link href={'/'}>
                    <div className={style.nav__item}>
                        <UserIcon width="30px" height="30px" />
                    </div>
                </Link>
                <Link href={'/portfolio'}>
                    <div className={style.nav__item}>
                        <ProjectsIcon width="30px" height="30px" />
                    </div>
                </Link>
                <Link href={'/contact'}>
                <div className={style.nav__item}>
                    <HomeIcon width="25px" height="25px" />
                </div>
                </Link>
                

                <div className={style.ThemeSwitch}>
                    <ThemeSwitch />
                </div>
            </nav>
        </>
    )
}

export default React.memo(Navigation);