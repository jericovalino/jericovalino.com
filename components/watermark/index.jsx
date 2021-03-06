import React, { useState, useEffect } from 'react';
import {
    watermark, layer,
    top, bottom, content__wrap,
    content__body, handle
} from './style.module.css';

import { motion } from 'framer-motion';

let wmposition;
let windowWidth;

const WaterMark = () => {

    const [slide, setSlide] = useState(0)

    useEffect(() => {
        windowWidth = innerWidth;
    })

    useEffect(() => {
        wmposition = Math.ceil(document.getElementById('wm').getBoundingClientRect().x)
    }, [windowWidth])

    const onMouseHover = (e) => {
        setSlide(e.clientX - wmposition)
    }

    return (
        <div id={'wm'} className={watermark} onMouseMove={onMouseHover}>
            <div className={[layer, bottom].join(' ')}>
                <div className={content__wrap}>
                    <div className={content__body}>
                        <p>JER</p>
                        <p>ICO</p>
                    </div>
                </div>
            </div>

            <motion.div className={[layer, top].join(' ')} animate={{ width: `${slide + 1000}px` }}>
                <div className={content__wrap}>
                    <div className={content__body}>
                        <p>VAL</p>
                        <p>INO</p>
                    </div>
                </div>
            </motion.div>

            <motion.div className={handle} animate={{ left: `${slide}px` }}></motion.div>
        </div>
    )
}

export default WaterMark;