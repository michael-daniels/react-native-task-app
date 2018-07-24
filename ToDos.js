import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const ToDos = (props) => {
  return (
    <View style={styles.container}>
      <Text h1>{props.singleTask}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})

export default ToDos
