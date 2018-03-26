import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

export default class LoginView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  getCredentials () {
    return this.state;
  }

  render () {
    return (
      <View>
        <TextInput
          placeholder="Enter Username"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({username:text})}
        />
        <TextInput
          placeholder="Enter Password"
          secureTextEntry="true"
          onChangeText={(text) => this.setState({password:text})}
        />
        <Button title="Login" onPress={this.props.login}/>
      </View>
    );
  }
}
