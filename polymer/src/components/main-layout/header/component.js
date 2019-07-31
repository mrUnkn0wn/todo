import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class Header extends PolymerElement {
  static get template() {
    return html`
      <style>
        .header {
            height: 80px;
            background-color: #6987C9;
        }

        .header__main {
            padding: 10px 0;
            position: relative;
        }

        .header__title {
            color: #E8ECF4;
            text-align: center;
            font-size: 60px;
            text-transform: uppercase;
            letter-spacing: 15px;
            font-weight: 100;
        }

        .header__logout {
            position: absolute;
            top: 0;
            right: 0;
            width: 60px;
            height: 100%;
            cursor: pointer;
            background: url('../img/exit.png') no-repeat center center;
        }
      </style>
      <div class="header">
          <div class="header__main">
              <div class="header__title">todos</div>
              <div class="header__logout"></div>
          </div>
      </div>
    `;
  }
}

window.customElements.define('main-layout-header', Header);
