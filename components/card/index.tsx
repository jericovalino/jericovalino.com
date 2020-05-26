import React from 'react';
import style from './style.module.css'

import OpenIcon from '../../public/vectors/openIcon';

const Card = (props) => {
    return (
        <div className={style.Card}>
            <div className={style.overlay}>
                <header>
                    <h3>{props.title}</h3>
                </header>
                <section>
                    {props.children}
                </section>
            </div>
            <span><OpenIcon /></span>
            <img src={props.imgUrl}></img>
        </div>
    )
}

export default Card;