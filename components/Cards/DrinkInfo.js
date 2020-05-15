import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DrinkInfo = ({ drink }) => {
    return (
        <View>
            <Text>{drink["strDrink"]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})


export default DrinkInfo