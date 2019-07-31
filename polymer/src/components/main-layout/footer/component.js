import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class Footer extends PolymerElement {
  static get template() {
    return html`
      <style>
        .footer {
            background-color: #6987C9;
        }
        .footer__version {
            color: #E8ECF4;
        }
      </style>
      <div class="footer">
          <div class="footer__version">v.0.0.1</div>
      </div>
    `;
  }
}

window.customElements.define('main-layout-footer', Footer);
