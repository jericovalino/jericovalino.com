import React from 'react';
import style from './style.module.css'

import OpenIcon from '../../public/vectors/openIcon';

const { card, overlay } = style;

const Card = (props) => {
    return (
        <div className={card}>
            <div className={overlay}>
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