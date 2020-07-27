import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class WeatherDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Weather Information',
  };

  render() {
    const {
      route: {
        params: { city },
      },
    } = this.props;

    console.log('route = ', city);

    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
