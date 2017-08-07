import React from 'react';

import store from '../../store';
import * as tasksApi from '../../api/tasks-api';
import TaskItemView from '../views/task-item/task-item';
import { changeEditMode } from '../../actions/task-actions';

class TaskItemContainer extends React.Component {
    deleteTask(taskId) {
        tasksApi.deleteTask(taskId);
    }

    changeStatus(task) {
        task.active = !task.active  ;
        tasksApi.updateTask(task);
    }

    editTask(taskId) {
        store.dispatch(changeEditMode(taskId, true));
        this.refs.child.fcs();
    }

    exitEditMode(task, e) {
        task.editMode = false;
        task.description = this.refs.child.getDescription();
        tasksApi.updateTask(task);
    }

    render() {
        return(
            <TaskItemView
                ref="child"
                task={this.props.task}
                deleteTask={this.deleteTask}
                editTask={this.editTask.bind(this)}
                changeStatus={this.changeStatus}
                exitEditMode={this.exitEditMode.bind(this)}
            />
        );
    }
}

export default TaskItemContainer;
