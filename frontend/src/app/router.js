import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/layouts/main-layout';
import TODOView from './components/views/todo-view';
import LoginView from './components/containers/login-container';
import * as authApi from './api/auth-api';

//onEnter
let authCheck = function(nextState, replace, cb) {
    authApi.auth().then(() => {
        cb();
    }).catch(() => {
        replace({}, '/login', {});
        cb();
    });
}

export default (
    <Router history={ browserHistory }>
        <Route component={ MainLayout }>
            <Route path="/" component={ TODOView } onEnter={authCheck}></Route>
            <Route path="/login" component={ LoginView }></Route>
        </Route>
    </Router>
);
