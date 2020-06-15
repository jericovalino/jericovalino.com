import React from 'react';
import style from './style.module.css'

import { motion } from 'framer-motion';

import OpenIcon from '../../../public/vectors/openIcon';

const { card, overlay } = style;

const Card = (props) => {

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.div className={card} variants={item}>
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
        </motion.div>
    )
}

export default Card;