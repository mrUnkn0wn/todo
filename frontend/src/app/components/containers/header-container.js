import React from 'react';
import { connect } from 'react-redux';

import HeaderView from '../views/header-view';
import * as authApi from '../../api/auth-api';

class HeaderContainer extends React.Component {


    logout() {
        authApi.logout().then(() => {
            window.location.hash = '#/login';
        });
    }

    render() {
        return (
            <HeaderView authenticated={this.props.authenticated} logout={this.logout.bind(this)}/>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        authenticated: store.authState.authenticated
    };
};

export default connect(mapStateToProps)(HeaderContainer);

