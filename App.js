import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './ToDoList';
import ToDos from './ToDos';
import ToDoInput from './ToDoInput';

export default class App extends React.Component {

  state = {tasksArray:[]}

  updateStateFunc = (task) => {
    console.log('testing',task)
    console.log('state', this.state)
    this.setState({tasksArray:[...this.state.tasksArray, task]})
  }

  render() {
    return (
      <View style={styles.container}>
        <ToDoList allTasks={this.state.tasksArray}/>
        <ToDoInput updateStateFunc={this.updateStateFunc}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  redtext: {
    color:'red',
  }
});
