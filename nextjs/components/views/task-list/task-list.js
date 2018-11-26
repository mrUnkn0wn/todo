import React from 'react';
import TaskItemView from '../../containers/task-item-view-container';
import styles from './task-list.scss';

export default function(props){
    return (
        <div className={styles['task-list']}>
            { props.tasks.map(task => {
                return (
                  <TaskItemView key={task.id} task={task}/>
                );
            })}
        </div>
    );
}
