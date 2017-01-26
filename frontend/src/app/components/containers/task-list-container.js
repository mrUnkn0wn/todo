import React from 'react';
import { connect } from 'react-redux';

import TaskList from '../views/task-list-view';
import * as tasksApi from '../../api/tasks-api';

class TaskListContainer extends React.Component {
    componentDidMount() {
        tasksApi.getTasks();
    }

    render() {
        return (
            <TaskList tasks={this.props.tasks}/>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        tasks: store.taskState.tasks
    };
};

export default connect(mapStateToProps)(TaskListContainer);
