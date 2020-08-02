import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import openWeatherApi from '../api/OpenWeatherApi';
import Constants from 'expo-constants';
import _get from 'lodash.get';
import { LinearGradient } from 'expo-linear-gradient';
import PorpTypes from 'prop-types'

export default class WeatherDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    openWeatherApi.fetchWeatherInfoByCityName(this.props.route.params.city)
      .then(info => {
        console.log(info);
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  renderSunrise(){
    const sunrise = this.state.sys.sunrise;
    const date = new Date(sunrise * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ":" +minutes.substr(-2) + ":" + seconds.substr(-2);
    return(
      <Text>일출: {formattedTime}</Text>
    )
    }

  renderSunset(){
    const sunset = this.state.sys.sunset;
    const date = new Date(sunset * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ":" +minutes.substr(-2) + ":" + seconds.substr(-2);
    return(
      <Text>일몰: {formattedTime}</Text>
    )
  }


  renderTemperature() {
    const celsius = this.state.main.temp - 273.15;
    const humidity = this.state.main.humidity;
    return (
      <Text>온도: {celsius.toFixed(1)}</Text>,
      <Text>습도: {humidity}%</Text>
    )
  }

  renderClouds() {
    const clouds = _get(this.state, ['clouds', 'all'], null);
    const cloudStatus = [
      '맑음',
      '구름 조금',
      '구름 많음',
      '흐림',
      '매우 흐림'
    ];  

    const text = (clouds === null) ? '정보 없음' : cloudStatus[Math.max(parseInt(clouds / 20), 4)];

    return (
      <Text>구름: {text}</Text>
    );
  }

  renderWind() {
    const speed = _get(this.state, ['wind', 'speed'], null);
    const deg = _get(this.state, ['wind', 'deg'], null);
    
    const arrowStyle = {
      transform: [
         { rotate: `${deg}deg`}
      ],
      width: 24,
      height: 24,
    };

    return (
      <View style={[styles.inRow, styles.alignItemInCenter]}>
        <Text>
          풍속: {speed? `${speed}m/s` : '정보 없음'}
        </Text>
        <View style={[arrowStyle]}>
          <MaterialCommunityIcons name="arrow-up-circle" size={24} color="black" />
        </View>
      </View>
    );
  }

  renderWeatherCondition() {
    // https://openweathermap.org/weather-conditions
    return this.state.weather.map(({
      icon,
      description,
    }, index) => {
      return (
        <View style={styles.weatherCondition} key={index}>
          <Image source={{
            uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
            width: 72,
            height: 48
          }} />
          <Text style={styles.textCondition}>{description}</Text>
        </View>
      );
    });
  }

  renderGoogleMap() {
    const { 
      lat, lon
    } = this.state.coord;

    const googleApiKey = _get(Constants, ['manifest', 'extra', 'googleApiKey'], null);

    if (!googleApiKey) {
      return undefined;
    }

    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&markers=color:red%7C${lat},${lon}&zoom=9&size=400x400&maptype=roadmap&key=${googleApiKey}`;

    return (
      <View style={styles.mapContainer}>
        <Image style={styles.mapImage}
          resizeMode={'stretch'}
          resizeMethod={'scale'}
          source={{ uri: url, }}
        />
      </View>
    );
  }

  render() {
    const {
      route: {
        params: { city },
      },
      navigation,
    } = this.props;

    navigation.setOptions({ title: `${city} 날씨` });

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    
    return (
      <LinearGradient
      colors={['#448AFF', '#9E9E9E', '#FFEB3B', '#FF5722']}
      style={styles.container}
      >
      <View style={styles.container}>
        {this.renderClouds()}
        {this.renderTemperature()}
        {this.renderSunrise()}
        {this.renderSunset()}
        {this.renderWind()}
        <View style={styles.inRow}>
          {this.renderWeatherCondition()}
        </View>

        {this.renderGoogleMap()}
      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inRow: {
    flexDirection: 'row',
  },
  alignItemInCenter: {
    alignItems: 'center',
  },
  mapContainer: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#2222AA'
  },
  mapImage: {
    aspectRatio: 1,
    width:200,
    height:300
  },
  weatherCondition: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textCondition: {
    color: '#FFF',
  },
  rotation: {
    width: 50,
    height: 50,
    transform: [{ rotate: "5deg" }]
  }
});