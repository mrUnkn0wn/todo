import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './styles.js'

import tasksService from '../../services/tasks.js';

class TaskItem extends PolymerElement {
  static get template() {
    return html`
      <style include="task-item-styles">
      </style>
      <div class$="task-item {{_getClass(task.active)}}">
          <div class="task-item__actions task-item__actions_left">
              <a class="task-item__action task-item__action_change-status" on-click="changeState"></a>
          </div>
          <div class="task-item__description">{{task.description}}</div>
          <div class="task-item__actions task-item__actions_right">
              <a class="task-item__action task-item__action_delete" on-click="deleteTask"></a>
          </div>
      </div>
    `;
  }

  static get properties () {
    return {
      task: Object
    }
  }

    // Observe the name sub-property on the user object
  static get observers() {
    return [
        'activeChange(task.active)'
    ]
  }

  changeState () {
    this.task.active = !this.task.active;
    tasksService.updateTask(this.task).then(() => {
      this.dispatchEvent(new CustomEvent('update'));
    });
  }

  deleteTask () {
    tasksService.deleteTask(this.task.id).then(() => {
      this.dispatchEvent(new CustomEvent('update'));
    });
  }

  _getClass (isActive) {
    return isActive ? "active" : "";
  }
}

window.customElements.define('task-item', TaskItem);
