import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '../task-input/component.js';
import '../task-item/component.js';
import './styles.js'

import tasksService from '../../services/tasks.js';

class TaskList extends PolymerElement {
  static get template() {
    return html`
      <style include="task-list-styles">
      </style>
      <div class="todo">
        <task-input on-update="updateTasks"></task-input>
        <div class="task-list">
          <template is="dom-repeat" items="[[tasks]]">
            <task-item task="[[item]]" on-update="updateTasks"></task-item>
          </template>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      tasks: Array
    };
  }

  constructor () {
    super();

    this.updateTasks();
  }

  updateTasks () {
    return tasksService.getTasks().then( ({ data }) => {
      this.tasks = data;
    });
  }
}

window.customElements.define('task-list', TaskList);
