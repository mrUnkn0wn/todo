import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="task-item-styles">
  <template>
    <style>
      .task-item {
          position: relative;
          line-height: 20px;
          padding: 10px 20px;
          padding-left: 50px;
          font-size: 18px;
          border-bottom: 1px solid #E7ECEF;
      }

      .task-item__actions {
          position: absolute;
          top: 0px;
      }
      .task-item__actions_left {
          left: 0px;
      }
      .task-item__actions_right {
          right: 0px;
      }
      .task-item__action {
          width: 40px;
          height: 40px;
          display: inline-block;
          cursor: pointer;
      }
      .task-item__action_hidden {
          display:none !important;
      }
      .task-item__action_change-status {
          background: url('../images/checkbox-checked.png') no-repeat center center;
      }
      .task-item__action_edit {
          background: url('../images/edit.png') no-repeat center center;
      }
      .task-item__action_delete {
          background: url('../images/delete.png') no-repeat center center;
      }
      .task-item__description {
          text-decoration: line-through;
          color: #999;
      }
      .task-item.active .task-item__description {
          text-decoration: none;
          color: #4b4d58;
      }
      .task-item.active .task-item__action_change-status {
          background: url('../images/checkbox-unchecked.png') no-repeat center center;
      }
      .task-item__input {
          position: absolute;
          width: 100%;
          z-index: 100;
          padding-right: 50px;
          top: 0;
          left: 0;
          box-sizing: border-box;
          font-size: 16px;
      }
      .task-item__input-hidden {
          display:none !important;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
