import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskListView from '../views/task-list';
import TaskInput from './task-input';
import * as tasksApi from '../api/task';

class TaskList extends Component {
  componentDidMount() {
      tasksApi.getTasks();
  }

  render () {
    return (
      <TaskListView tasks={this.props.tasks}/>
    );
  }
}

const mapStateToProps = function(store) {
    return {
        tasks: store.taskState.tasks
    };
};

export default connect(mapStateToProps)(TaskList);
