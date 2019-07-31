import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import './components/main-layout/header/component.js';
import './components/main-layout/footer/component.js';
import authService from './services/auth.js';


// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

setRootPath(AppGlobals.rootPath);

class TODOApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        .body{
            min-height: 100%;
            position:relative;
        }

        .main {
            padding-bootom: 10px;
        }

        .footer {
          position: absolute;
          width: 100%;
          bottom: 0;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <div class="body">
          <main-layout-header></main-layout-header>
          <div class="main">
            <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
              <login-form on-submit="redirectToTasks"></login-form>
              <task-list></task-list>
            </iron-pages>
          </div>
          <main-layout-footer class="footer"></main-layout-footer>
      </div>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    authService.auth().then(() => {
      this.page = 'tasks';
    }).catch(() => {
      this.page = 'login';
    });
  }

  _pageChanged(page) {
    switch (page) {
      case 'login':
        import('./components/login-form/component.js');
        break;
      case 'tasks':
        import('./components/task-list/component.js');
        break;
    }
  }

  redirectToTasks () {
    this.set('route.path', '/tasks');
  }
}

window.customElements.define('todo-app', TODOApp);
