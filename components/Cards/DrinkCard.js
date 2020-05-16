import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const DrinkCard = ({ drink }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: drink['strDrinkThumb'] }} style={{ width: 175, height: 175 }}></Image>
            <View style={styles.infoDiv}>
                <Text style={styles.drinkName}>{drink["strDrink"]}</Text>
            </View>
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
    },
    infoDiv: {
        flexDirection: 'row',
        padding: 10
    },
    drinkName: {
        flex: 1,
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold'
    }
})


export default DrinkCard