import React from 'react';

import Form from '../form/form';
import FormButton from '../form/__button/form__button';
import FormInput from '../form/__input/form__input';

export default class LoginView extends React.Component {

    getCredentials() {
        return {
            username: this.refs.username.refs.input.value,
            password: this.refs.password.refs.input.value
        }
    }

    render() {
        return (
            <Form onSubmit={this.props.login} className="login-form">
                <FormInput type="text" name="username" ref="username" label="Username"/>
                <FormInput type="password" name="password" ref="password" label="Password"/>
                <FormButton label="Login"/>
            </Form>
        );
    }
};
