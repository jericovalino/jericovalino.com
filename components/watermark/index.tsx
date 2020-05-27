import React, { useState, useEffect } from 'react';
import style from './style.module.css'

let wmposition: number;
let windowWidth: number;

const { watermark, layer, top, bottom, content__wrap, content__body, handle } = style;

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

            <div className={[layer, top].join(' ')} style={{ width: `${slide + 1000}px` }}>
                <div className={content__wrap}>
                    <div className={content__body}>
                        <p>VAL</p>
                        <p>INO</p>
                    </div>
                </div>
            </div>

            <div className={handle} style={{ left: `${slide}px` }}></div>
        </div>
    )
}

export default WaterMark;