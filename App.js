import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
