import React from 'react';

class TaskItemView extends React.Component {

    fcs() {
        setTimeout(() => {
            this.editInput.focus();
        }, 0);
    }

    getDescription() {
        return this.editInput.value;
    }

    render() {
        return (
            <div className={"task-item" +  (this.props.task.active ? " task-item_active":"")} >
                <div className="task-item__actions task-item__actions_left">
                    <a className={"task-item__action task-item__action_change-status" + (this.props.task.active ? " task-item__action_change-status_active":"")}onClick={this.props.changeStatus.bind(null, this.props.task)}></a>
                </div>
                <div className={"task-item__description" + (this.props.task.active ? " task-item__description_active":"")}>{this.props.task.description}</div>
                <div className="task-item__actions task-item__actions_right">
                    <a className={"task-item__action task-item__action_edit" + (!this.props.task.active ? " task-item__action_hidden" : "")} onClick={this.props.editTask.bind(null, this.props.task.id)}></a>
                    <a className="task-item__action task-item__action_delete" onClick={this.props.deleteTask.bind(null, this.props.task.id)}></a>
                </div>
                <input
                    ref={(input) => { this.editInput = input; }}
                    defaultValue={this.props.task.description}
                    className={"task-item__input" + (!this.props.task.editMode ? " task-item__input-hidden" : "")}
                    onBlur={this.props.exitEditMode.bind(null, this.props.task)}
                    onKeyUp={(e) => { if(e.keyCode === 13){ this.props.exitEditMode(this.props.task) }}}
                />
            </div>
        );
    }
}

export default TaskItemView;
