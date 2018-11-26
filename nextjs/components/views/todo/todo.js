import React from 'react';

import TaskList from '../../containers/task-list-container';
import TaskInput from '../../containers/task-input-container';

import styles from './todo.scss';

export default function(props) {
    return (
        <div className={styles.todo}>
            <TaskInput/>
            <TaskList/>
        </div>
    );
}
