import React from 'react';
import styles from './task-input.scss';

export default function(props) {
    return (
        <div className={styles['task-input']}>
            <input className={styles['task-input__input']} type="text" onKeyUp={props.onKeyUp} placeholder="What needs to be done?"/>
        </div>
    );
}
