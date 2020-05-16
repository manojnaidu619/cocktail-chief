import React from 'react'
import DrinkCard from '../Cards/DrinkCard'
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import axios from 'axios'

const FlatListResolver = (searchTerm, drinks, filters, pressHandler) => {
    let filteredDrinks = []
    let promises = []
    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => pressHandler(item)}>
                    <DrinkCard drink={item} key={item["idDrink"]} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <FlatList
            data={drinks}
            renderItem={renderItem}
            keyExtractor={item => item["idDrink"]}
            contentContainerStyle={styles.cardsContainer}
            numColumns='2'
            key='2'
        />
    )   
}

const styles = StyleSheet.create({
    cardsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5
    }
})

export default FlatListResolver
