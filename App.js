import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';

// after `expo install react-native-safe-area-context`.
import { SafeAreaView } from 'react-native-safe-area-context';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.item}>
            <Text style={styles.text}>Apple</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Banana</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Cherries</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>Damson plum</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>...</Text>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
