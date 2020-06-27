import React from 'react';
import style from './style.module.css';
import Navigation from '../navigation';

import { useSelector } from 'react-redux';

const { layout, watermark, content } = style;

const Layout = (props) => {
    const { watermark: label } = useSelector(state => state.layout)
    return (
        <div className={layout}>
            <Navigation />
            <main className={content}>
                <h1 className={watermark}>{label}</h1>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;