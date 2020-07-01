import React from 'react';
import { navigation__item, active, navigation__icon } from './style.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationItem = (props) => {

    const { pathname } = useRouter();

    return (
        <Link href={props.link}>
            <div className={pathname == props.link
                ? [navigation__item, active].join(' ')
                : navigation__item} >
                <div className={navigation__icon}>
                    {props.children}
                </div>
                <p>{props.name}</p>
            </div>
        </Link>
    )
}

export default NavigationItem;