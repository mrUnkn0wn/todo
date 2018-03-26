import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

import TaskItem from '../containers/task-item';
import TaskInput from '../containers/task-input';

export default class TaskListView extends Component {
  render () {
    return (
      <ScrollView style={style}>
        <TaskInput/>
        { this.props.tasks.map(task => {
            return (
              <TaskItem key={task.id} task={task}/>
            );
        })}
      </ScrollView>
    );
  }
}

const style = {
  marginTop:20
}
