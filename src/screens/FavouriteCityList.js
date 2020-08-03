import React, {useState, useEffect} from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default FavouriteCityList = (props) => {
    const [cities, setCities] = useState()

    useEffect(()=>{
        if(cities != props.favouriteCities) setCities(props.favouriteCities)
    })

    const onPressCity = (item) => {
        console.log('onPressCity =', item);
        props.addToFavouriteCities(item)
        props.navigation.navigate('Detail', {
        city: item
        });
    }

    const renderItem = (city) => {
        return (
        <TouchableOpacity style={styles.item} onPress={() => onPressCity(city)}>
            <Text style={styles.text}>{city}</Text>
        </TouchableOpacity>
        );
    }

    return (
        <View>
            <Text>최근 검색</Text>
            <FlatList style={styles.container}
                        numColumns={3}
                        renderItem={({ item }) => renderItem(item)}
                        keyExtractor={item => item}
                        data={cities}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height : 50
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
