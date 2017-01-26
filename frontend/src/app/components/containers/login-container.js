import React from 'react';

import LoginView from '../views/login-view';
import * as authApi from '../../api/auth-api';

class LoginContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    login() {
        const credentials = this.refs.child.getCredentials();

        authApi.login(credentials).then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <LoginView login={this.login.bind(this)} ref="child"/>
        );
    }
}

export default LoginContainer;