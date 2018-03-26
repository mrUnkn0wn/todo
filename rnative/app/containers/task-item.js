import React, { Component } from 'react';

import TaskItemView from '../views/task-item';
import * as tasksApi from '../api/task';

export default class TaskItem extends Component {
  deleteTask (task) {
    tasksApi.deleteTask(task.id);
  }

  render () {
    return (
      <TaskItemView
        task={this.props.task}
        deleteTask={this.deleteTask.bind(this)}
      />
    );
  }
}
