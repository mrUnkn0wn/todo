import React from 'react';

import TaskInputView from '../views/task-input/task-input';
import * as tasksApi from '../../api/tasks-api';

class TaskInputContainer extends React.Component {

    onKeyUp(event) {
       if(event.keyCode === 13 && event.target.value !== ''){
           this.add(event.target.value);
           event.target.value = '';
       }

    }

    add(description) {
        tasksApi.addTask({ description })
    }

    render() {
        return (
            <TaskInputView onKeyUp={this.onKeyUp.bind(this)}/>
        );
    }
};

export default TaskInputContainer;
