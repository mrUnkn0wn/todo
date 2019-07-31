import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="task-list-styles">
  <template>
    <style>
      .todo {
          margin: 0 auto;
          max-width:500px;
          width:100%;
          border-top:5px solid #E7ECEF;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
          background-color: #fff;
          box-sizing: border-box;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
