import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default class TaskInputView extends Component {
  render () {
    return (
      <View style={viewStyle}>
        <TextInput
          placeholder="What needs to be done?"
          onChangeText = {(text) => {this.setState({description: text})}}
        />
        <Button
          title="+"
          onPress={() => {this.props.addTask(this.state.description)}}
        />
      </View>
    );
  }
}

const viewStyle = {
  flexDirection:'row',
  width: window.width,
  margin: 10,
  padding:2,
  alignItems:'center',
  justifyContent:'center',
  borderWidth:1,
  borderColor:'#888',
  borderRadius:10,
  backgroundColor:'#fff'
 }
