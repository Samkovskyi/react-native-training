import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TaskList from './components/TaskList';
import TaskFrom from './components/TaskForm';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    todos: [
      {
        task: 'Learn React Native'
      },
      {
        task: 'Learn Redux'
      }]
    };
}

onAddStarted(){
  this.props.navigation.navigate('TaskForm')
}

  render() {
    return (
      <View style={styles.container}>
          <TaskList 
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos} />
        </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    // alignItems: 'center',
    // justifyContent: 'center',    
  },
});


export default NavigationApp = StackNavigator({
  TaskList: { screen: App },
  TaskForm: { screen: TaskForm }
})

