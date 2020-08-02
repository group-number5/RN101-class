import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity,Platform,ActivityIndicator,View,TextInput} from 'react-native';
import { SearchBar } from 'react-native-elements';
import cityListApi from '../api/CityListApi';

export default class CityList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      search: '',
      cities: [],
    };
    this.arrayholder=[];
  }
  

  componentDidMount() {
    cityListApi.fetchAvailableCities()
      .then(cities => {
        this.setState({
          isLoading:false,
          cities
        });
      });
  }

  onPressCity(item) {
    console.log('onPressCity =', item);
    this.props.navigation.navigate('Detail', {
      city: item
    });
  }

  renderItem(city) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
        <Text style={styles.text}>{city}</Text>
      </TouchableOpacity>
    );
  }

  search = text =>{
    console.log(text);
  };
  
  clear = () =>{
    this.search.clear();
  };

  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.viewStyle}>
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={text => this.SearchFilterFunction(text)}
        onClear={text => this.SearchFilterFunction('')}
        placeholder="Type Here..."
        value={this.state.search}
      />
      <FlatList 
        Data={this.state.dataSource}
        ItemSeparatorComponent={this.ListViewItemSeparator}

        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={item => item}
        data={this.state.cities}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  }
});