import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class TaskItemView extends Component {
  render () {
    return (
      <View style={style}>
        <Text>{this.props.task.description}</Text>
        <Button
          title="x"
          onPress={() => {this.props.deleteTask(this.props.task)}}
        />
      </View>
    );
  }
}

const style = {
  flexDirection:'row',
  width: window.width,
  alignItems:'center',
  justifyContent:'space-between',
  margin:4,
  padding:4,
  backgroundColor:'#fff'
}
