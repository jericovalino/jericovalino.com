import React from 'react';
import style from './style.module.css'

const Card = (props) => {
    return (
        <div className={style.Card}>
            <div className={style.overlay}>
                <header>
                    <h3>{props.title}</h3>
                </header>
                <section>
                    {props.children}
                    <p>open</p>
                </section>
            </div>
            <img src={props.imgUrl}></img>
        </div>
    )
}

export default Card;