import React from 'react';

import TaskList from '../../containers/task-list-container';
import TaskInput from '../../containers/task-input-container';

export default function(props) {
    return (
        <div className="todo">
            <TaskInput/>
            <TaskList/>
        </div>
    );
}
