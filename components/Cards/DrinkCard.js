import React from 'react'
import DrinkInfo from './DrinkInfo'
import { Text, View, Image, StyleSheet } from 'react-native'

const DrinkCard = ({ drink }) => {
    return (
        <View>
            <Image source={{uri: drink['strDrinkThumb']}} style={{width: 150, height: 150}}></Image>
            <View><DrinkInfo drink={drink}/></View>
        </View>
    )
}


export default DrinkCard