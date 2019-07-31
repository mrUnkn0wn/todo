import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="login-form-styles">
  <template>
    <style>
      .login-form {
          margin: 0 auto;
          max-width: 350px;
          width: 100%;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
          background-color: #6987C9;
          margin-top: 60px;
          padding: 15px 30px;
      }

      .form {
          position: relative;
      }

      .form__button {
          width: 100%;
          box-sizing: border-box;
          font-size: 20px;
          padding: 10px;
          border-radius: 0px;
          background: #6987C9;
          border: 2px solid #E7ECEF;
          color: #E7ECEF;
          outline: none;
      }

      .form__button:focus {
          border-color: #3d5fa9;
      }

      .form__button:hover {
          color: #6987C9;
          background: #E7ECEF;
      }

      .form__input {
          position: relative;
          margin-bottom: 15px;
      }

      .form__input input {
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

      .form__input input:focus{
        padding-top: 1px;
        padding-bottom: 19px;
        outline:none;
      }

      .form__input input:focus + label {
        background: #6987C9;
        color: #E7ECEF;
        font-size: 70%;
        padding: 1px 6px;
        z-index: 3;
        text-transform: uppercase;
        border: 1px solid #E7ECEF;
        border-top: none;
      }

      .form__input label {
          transition: // not padding
            background 0.2s,
            color 0.2s,
            top 0.2s,
            bottom 0.2s,
            right 0.2s,
            left 0.2s;
          position: absolute;
          color: #999;
          padding: 7px 6px;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 0;
          box-sizing: border-box;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
