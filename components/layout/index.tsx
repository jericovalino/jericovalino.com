import React from 'react';
import style from './style.module.css';
import Navigation from '../navigation';

const Layout = (props) => {
    return(
        <div className={style.Layout}>
            <Navigation />
            <main className={style.content}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;