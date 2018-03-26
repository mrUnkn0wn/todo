import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Stack, Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import TaskList from './app/containers/task-list';
import Login from './app/containers/login';
import * as authApi from './app/api/auth';

import store from './app/store';

//onEnter
let authCheck = function() {
    authApi.auth().then(cb).catch(() => {
        replace({}, '/login', {});
        cb();
    });
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="login" component={Login} title="Login"/>
            <Scene key="tasks" component={TaskList} title="Tasks" hideNavBar="true"/>
          </Stack>
        </Router>
      </Provider>
    );
  }
}
