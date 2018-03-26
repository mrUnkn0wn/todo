import  React, { Component } from 'react';

import TaskInputView from '../views/task-input';
import * as tasksApi from '../api/task';

export default class TaskInput extends Component {
  addTask (description) {
    tasksApi.addTask({ description });
  }

  render () {
    return (
      <TaskInputView addTask={this.addTask.bind(this)}/>
    );
  }
}
