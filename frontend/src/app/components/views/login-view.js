import React from 'react';

class LoginView extends React.Component {

    onSubmit(e) {
        e.preventDefault();
    }

    getCredentials() {
        return {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form login-form">
                <div className="form-component">
                    <input type="text" name="username" ref="username" placeholder="Username"/>
                    <label>Username</label>
                </div>
                <div className="form-component">
                    <input type="password" name="password" ref="password" placeholder="Password"/>
                    <label>Password</label>
                </div>
                <button type="submit" onClick={this.props.login}>Login</button>
            </form>
        );
    }
};

export default LoginView;