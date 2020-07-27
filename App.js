import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class CounterButton extends React.Component {
  state = {
    counter: 0,
  };
  
  render() {
    const clickHandler = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };
  
    return (
      <View style={styles.container}>
        <Text>{this.state.counter}</Text>
        <Button title={'click me!'} onPress={clickHandler}/>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CounterButton />
        <StatusBar style="auto" />
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
});
