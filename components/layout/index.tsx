import React from 'react';
import style from './style.module.css';
import Navigation from '../navigation';

const { layout, content } = style;

const Layout = (props) => {
    return (
        <div className={layout}>
            <Navigation />
            <main className={content}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;