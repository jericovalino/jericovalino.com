import React from 'react';
import style from './style.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Alert = () => {
    const { showAlert, title, body } = useSelector(state => state.alert);
    const dispatch = useDispatch();

    const closeAlert = () => dispatch({ type: "HIDE-ALERT" });
    
    return (
        <div className={
            showAlert
                ? style.alert
                : [style.alert, style.hide].join(' ')}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={closeAlert}>close</button>
        </div>
    )
}

export default Alert;