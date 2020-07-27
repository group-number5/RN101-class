import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// after `expo install react-native-safe-area-context`.
import { SafeAreaView } from 'react-native-safe-area-context';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.fullscreen}>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
            width: 128,
            height: 128,
          }} />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 2,
    alignItems: 'center',
  },
});
