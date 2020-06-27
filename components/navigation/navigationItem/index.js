import React from 'react';
import style from './style.module.css';

import Link from 'next/link';
import { useDispatch } from 'react-redux';

const { navigation__item, navigation__icon } = style;

const NavigationItem = (props) => {

    return (
        <Link href={props.link}>
            <div className={navigation__item} >
                <div className={navigation__icon}>
                    {props.children}
                </div>
                <p>{props.name}</p>
            </div>
        </Link>
    )
}

export default NavigationItem;