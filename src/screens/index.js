import React, {useState, useEffect}from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import CityList from './CityList';
import WeatherDetailScreen from './WeatherDetailScreen';
import FavouriteCityList from './FavouriteCityList';


export const HomeScreen = ({ navigation }) => {
  const [favouriteCities, setFavouriteCities] = useState([]);

  useEffect(()=>{
    console.log(favouriteCities);
  })


  const addToFavouriteCities = (city) =>{
    if(favouriteCities.indexOf(city)==-1){
      setFavouriteCities(
        [city].concat(favouriteCities.slice(0,2))
      )
    }
    else{
      setFavouriteCities(
        [city].concat(favouriteCities.slice(0,favouriteCities.indexOf(city)),favouriteCities.slice(favouriteCities.indexOf(city)+1))
      )
    }
  }

  return(
    <View style={styles.container}>
      <FavouriteCityList navigation={navigation} favouriteCities = {favouriteCities} addToFavouriteCities = {addToFavouriteCities} />
      <CityList navigation={navigation} addToFavouriteCities = {addToFavouriteCities} />
      <StatusBar style="auto" />
    </View>
  )
};

export const DetailScreen = ({ navigation, route }) => (
  <View style={styles.container}>
    <WeatherDetailScreen navigation={navigation} route={route} />
    <StatusBar style="auto" />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});