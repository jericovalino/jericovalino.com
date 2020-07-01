import React from 'react';
import { layout, watermark, content } from './style.module.css';

import { useSelector } from 'react-redux';
import Navigation from '../navigation';

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