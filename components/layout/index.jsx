import React from 'react';
import { layout, watermark, content } from './style.module.css';

// import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navigation from '../navigation';

const Layout = (props) => {
    
    // const { watermark: label } = useSelector(state => state.layout)
    const { pathname } = useRouter();
    
    return (
        <div className={layout}>
            <Navigation />
            <main className={content}>
                <h1 className={watermark}>{pathname.replace("/", "") || "about"}</h1>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;