import React, { Component } from 'react';
import { Actions } from "react-native-router-flux";

import LoginView from '../views/login';
import * as authApi from '../api/auth';

export default class Login extends Component {
  login () {
    const credentials = this.refs.child.getCredentials();
    
    authApi.login(credentials).then(() => {
      Actions.tasks();
    });
  }

  render () {
    return (
      <LoginView login={this.login.bind(this)} ref="child"/>
    );
  }
}
