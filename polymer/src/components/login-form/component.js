import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './styles.js'
import authService from '../../services/auth.js';

class LoginForm extends PolymerElement {
  static get template() {
    return html`
      <style include="login-form-styles">
      </style>
      <form on-submit="submit" class="form login-form">
        <div class="form__input">
            <input type="login" name="username" value="{{username::input}}" placeholder="Username"/>
            <label>Username</label>
        </div>
        <div class="form__input">
            <input type="password" name="password" value="{{password::input}}" placeholder="Password"/>
            <label>Password</label>
        </div>
        <button class="form__button" type="submit">Login</button>
      </form>
    `;
  }

  static get properties() {
    return {
      username: String,
      password: String
    };
  }

  submit (e) {
    e.preventDefault();
    authService.login({ username: this.username, password: this.password }).then(() => {
      this.dispatchEvent(new CustomEvent('submit'));
    });
  }
}

window.customElements.define('login-form', LoginForm);
