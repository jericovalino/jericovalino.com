import React from 'react';
import { alert, hide } from './style.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Alert = () => {
    
    const { showAlert, title, body } = useSelector(state => state.alert);
    const dispatch = useDispatch();

    const closeAlert = () => dispatch({ type: "HIDE-ALERT" });

    return (
        <div className={
            showAlert
                ? alert
                : [alert, hide].join(' ')}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={closeAlert}>close</button>
        </div>
    )
}

export default Alert;