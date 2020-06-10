import React from 'react';
import style from './style.module.css';
import Navigation from '../navigation';

const { layout, watermark, content } = style;

const Layout = (props) => {
    return (
        <div className={layout}>
            <Navigation />
            <main className={content}>
                <h1 className={watermark}>{props.watermark}</h1>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;