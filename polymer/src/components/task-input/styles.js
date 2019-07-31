import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="task-input-styles">
  <template>
    <style>
      .task-input {
          width: 100%;
          border-bottom: 2px solid #E7ECEF;
      }

      .task-input__input {
          top: 0;
          left: 0;
          z-index: 1;
          position: relative;
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #E7ECEF;
          font-family: inherit;
          font-size: 20px;
          letter-spacing: 1.5px;
          padding: 10px 20px;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
