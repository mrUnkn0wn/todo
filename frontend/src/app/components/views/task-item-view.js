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
            <div className={"task-item-container" +  (this.props.task.active ? " active":"")} >
                <div className="actions actions-left">
                    <a className="action item-change-status" onClick={this.props.changeStatus.bind(null, this.props.task)}></a>
                </div>
                <div className="item-description">{this.props.task.description}</div>
                <div className="actions actions-right">
                    <a className={"action item-edit" + (!this.props.task.active ? " hidden" : "")} onClick={this.props.editTask.bind(null, this.props.task.id)}></a>
                    <a className="action item-delete" onClick={this.props.deleteTask.bind(null, this.props.task.id)}></a>
                </div>
                <input
                    ref={(input) => { this.editInput = input; }}
                    defaultValue={this.props.task.description}
                    className={"task-item-input" + (!this.props.task.editMode ? " hidden" : "")}
                    onBlur={this.props.exitEditMode.bind(null, this.props.task)}
                    onKeyUp={(e) => { if(e.keyCode === 13){ this.props.exitEditMode(this.props.task) }}}
                />
            </div>
        );
    }
}

export default TaskItemView;