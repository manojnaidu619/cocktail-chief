import React from 'react'
import DrinkInfo from './DrinkInfo'
import { Text, View, Image, StyleSheet } from 'react-native'

const DrinkCard = ({ drink }) => {
    return (
        <View style={styles.card}>
            <Image source={{uri: drink['strDrinkThumb']}} style={{width: 175, height: 175}}></Image>
            <View><DrinkInfo drink={drink}/></View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 2,
        padding: 5
    }
})


export default DrinkCard