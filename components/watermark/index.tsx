import React, { useState, useEffect } from 'react';
import style from './style.module.css'

let wmposition: number;
let windowWidth: number;
const WaterMark = () => {
    const [skew, setSkew] = useState(0)

    useEffect(() => {
        windowWidth = innerWidth;
    })

    useEffect(() => {
        wmposition = Math.ceil(document.getElementById('wm').getBoundingClientRect().x)
    }, [windowWidth])

    const onMouseHover = (e) => {
        setSkew(e.clientX - wmposition)
    }

    return (
        <div id={'wm'} className={style.watermark} onMouseMove={onMouseHover}>

            <div className={[style.layer, style.bottom].join(' ')}>
                <div className={style.content__wrap}>
                    <div className={style.content__body}>
                        <text>JER</text>
                        <text>ICO</text>
                    </div>
                </div>
            </div>

            <div className={[style.layer, style.top].join(' ')} style={{ width: `${skew + 1000}px` }}>
                <div className={style.content__wrap}>
                    <div className={style.content__body}>
                        <text>VAL</text>
                        <text>INO</text>
                    </div>
                </div>
            </div>

            <div className={style.handle} style={{ left: `${skew}px` }}></div>

        </div>
    )
}

export default WaterMark;