import React from 'react';
import styles from './task-item.scss';

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
            <div className={styles['task-item'] +  (this.props.task.active ? ' ' + styles['task-item_active']:'')} >
                <div className={styles['task-item__actions'] + ' ' + styles['task-item__actions_left']}>
                    <a className={styles['task-item__action'] + ' ' + styles['task-item__action_change-status'] + (this.props.task.active ? ' ' + styles['task-item__action_change-status_active'] : '')} onClick={this.props.changeStatus.bind(null, this.props.task)}></a>
                </div>
                <div className={styles['task-item__description'] + (this.props.task.active ? ' ' + styles['task-item__description_active'] : '')}>{this.props.task.description}</div>
                <div className={styles['task-item__actions'] + ' ' + styles['task-item__actions_right']}>
                    <a className={styles['task-item__action'] + ' ' + styles['task-item__action_edit'] + (!this.props.task.active ? ' ' + styles['task-item__action_hidden'] : '')} onClick={this.props.editTask.bind(null, this.props.task.id)}></a>
                    <a className={styles['task-item__action'] + ' ' + styles['task-item__action_delete']} onClick={this.props.deleteTask.bind(null, this.props.task.id)}></a>
                </div>
                <input
                    ref={(input) => { this.editInput = input; }}
                    defaultValue={this.props.task.description}
                    className={styles['task-item__input'] + (!this.props.task.editMode ? ' ' + styles['task-item__input-hidden'] : '')}
                    onBlur={this.props.exitEditMode.bind(null, this.props.task)}
                    onKeyUp={(e) => { if(e.keyCode === 13){ this.props.exitEditMode(this.props.task) }}}
                />
            </div>
        );
    }
}

export default TaskItemView;
