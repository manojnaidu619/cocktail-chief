import React from 'react'
import DrinkCard from '../Cards/DrinkCard'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'


const FlatListResolver = (searchTerm, drinks, pressHandler) => {

    const renderItem = ({ item }) => { 
        return (
          <View>
            <TouchableOpacity onPress={() => pressHandler(item)}>
              <DrinkCard drink={item} key={item["idDrink"]} />
            </TouchableOpacity>
          </View>
          )
    }
    
    if (searchTerm !== null) {
        return <Text>Coming data!</Text>
    }
    else {
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
