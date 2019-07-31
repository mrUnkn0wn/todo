import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class TasksForm extends PolymerElement {
  static get template() {
    return html`
      <style>
      </style>
      <h2>TASKS FORM</h2>
    `;
  }
}

window.customElements.define('tasks-form', TasksForm);
