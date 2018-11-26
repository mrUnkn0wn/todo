import React from 'react';

import LoginView from '../views/login/login';
import * as authApi from '../../api/auth-api';
import redirect from '../../utils/redirect.js'

class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    login () {
        const credentials = this.refs.child.getCredentials();

        authApi.login(credentials).then(() => {
            debugger;
            redirect('/index');
        });
    }

    render() {
        return (
            <LoginView login={this.login.bind(this)} ref="child"/>
        );
    }
}

export default LoginContainer;
