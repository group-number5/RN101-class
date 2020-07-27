import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// after `expo install react-native-safe-area-context`.
import { SafeAreaView } from 'react-native-safe-area-context';

export default class App extends React.Component {
  fruits = [
    { name: 'Acai' },
    { name: 'Apples' },
    { name: 'Apricots' },
    { name: 'Avocado' },
    { name: 'Ackee' },
    { name: 'Bananas' },
    { name: 'Bilberries' },
    { name: 'Blueberries' },
    { name: 'Blackberries' },
    { name: 'Boysenberries' },
    { name: 'Bread fruit' },
    { name: 'Cantaloupes (cantalope)' },
    { name: 'Chocolate-Fruit' },
    { name: 'Cherimoya' },
    { name: 'Cherries' },
    { name: 'Cranberries' },
    { name: 'Cucumbers' },
    { name: 'Currants' },
    { name: 'Dates' },
    { name: 'Durian' },
    { name: 'Eggplant' },
    { name: 'Elderberries' },
    { name: 'Figs' },
    { name: 'Gooseberries' },
    { name: 'Grapes' },
    { name: 'Grapefruit' },
    { name: 'Guava' },
    { name: 'Honeydew melons' },
    { name: 'Horned melon (Kiwano)' },
    { name: 'Huckleberries' },
    { name: 'Ita Palm' },
    { name: 'Jujubes' },
    { name: 'Kiwis' },
    { name: 'Durian is an unusual tropical fruit.' },
    { name: 'Kumquat' },
    { name: 'Lemons' },
    { name: 'Limes' },
    { name: 'Lychees' },
    { name: 'Mangos' },
    { name: 'Mangosteen' },
    { name: 'Mulberries' },
    { name: 'Muskmelon' },
    { name: 'Nectarines' },
    { name: 'Ogden melons' },
    { name: 'Olives' },
    { name: 'Oranges' },
    { name: 'Papaya' },
    { name: 'Passion fruit' },
    { name: 'Peaches' },
    { name: 'Pears' },
    { name: 'Peppers' },
    { name: 'Persimmon' },
    { name: 'Pineapple' },
    { name: 'Plums' },
    { name: 'Pluot' },
    { name: 'Pomegranate' },
    { name: 'Prickly Pear' },
    { name: 'Quince' },
    { name: 'Rambuton' },
    { name: 'Raspberries' },
    { name: 'Rose Apple' },
    { name: 'Starfruit' },
    { name: 'Sapadilla' },
    { name: 'Strawberries' },
    { name: 'Tamarind' },
    { name: 'Tangelo' },
    { name: 'Tangerines' },
    { name: 'Tomatoes' },
    { name: 'Ugli fruit' },
    { name: 'Voavanga (Spanish Tamarind)' },
    { name: 'Watermelons' },
    { name: 'Xigua melon' },
    { name: 'Yellow watermelon' },
    { name: 'Zucchini' },
  ];

  renderItem({ name }) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.container}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => this.renderItem(item)}
          data={this.fruits}
        />

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
