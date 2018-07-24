import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDos from './ToDos';


const ToDoList = (props) => {
  console.log('list props', props.allTasks)

  let singleTask = props.allTasks.map((item, idx) => {
    return <ToDos key={idx} singleTask={item.task}/>
  })

  return (
    <View style={styles.container}>
      {singleTask}
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})

export default ToDoList;
