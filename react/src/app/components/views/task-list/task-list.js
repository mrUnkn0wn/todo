import React from 'react';

import TaskItemView from '../../containers/task-item-view-container';

export default function(props){
    return (
        <div className="task-list">
            { props.tasks.map(task => {
                return (
                  <TaskItemView key={task.id} task={task}/>
                );
            })}
        </div>
    );
}
