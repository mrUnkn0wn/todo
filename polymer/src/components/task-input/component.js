import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './styles.js'

import tasksService from '../../services/tasks.js';

class TaskInput extends PolymerElement {
  static get template() {
    return html`
      <style include="task-input-styles">
      </style>
      <div class="task-input">
        <input class="task-input__input" type="text" value="{{taskDescription::input}}"  placeholder="What needs to be done?"/>
      </div>
    `;
  }

  static get properties () {
    return {
      taskDescription: String
    }
  }

  constructor () {
    super();
    this.addEventListener('keyup', this.addNewTask.bind(this));
  }

  addNewTask (event) {
    if (event.keyCode === 13 && this.taskDescription) {
      tasksService.addTask(this.taskDescription).then(() => {
        this.dispatchEvent(new CustomEvent('update'));
      });
    }
  }
}

window.customElements.define('task-input', TaskInput);
