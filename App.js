import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

import TaskList from './components/TaskList';

export default class App extends React.Component {
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
  this.nav.push({
    name: 'taskform',
  });
}

renderScene(route, nav){
  switch(route.name){
    case 'taskform':
      return <Text>Add form comes here!</Text>
    default: 
      return (
        <View style={styles.container}>
          <TaskList 
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos} />
        </View>
      );

  }
}

  render() {
    return (
      <Navigator 
        initialRoute={{name: 'tasklist', index: 0}} 
        ref={((nav) => {
          this.nav = navl
        })}
        renderScene={this.renderScene.bind(this)}/>
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
