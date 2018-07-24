import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button} from 'react-native-elements';

class ToDoInput extends Component {

  state = {
    task:''
  }

  render() {
    return (
      <View>
        <FormLabel>Add Task</FormLabel>
        <FormInput onChangeText={(value) => {
          this.setState({task:value})
        }}/>
        <Button title='BUTTON' style={styles.buttonColor} onPress={()=>{this.props.updateStateFunc(this.state)}}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: 'green',
  }
})

export default ToDoInput;
