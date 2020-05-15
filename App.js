import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native'
import SearchBar from './components/Search/SearchBar'
import HomeRequestHandler from './components/Request/HomeRequestHandler'
import DrinkCard from './components/Cards/DrinkCard'
import axios from 'axios'
import Shuffler from './components/utils/ArrayShuffler'

const App = () => {
  const [searchTerm, changeSearchTerm] = useState(null)
  const [drinks, setDrinks] = useState(null)
  const [loading, setLoading] = useState(true)

  const getSearchTerm = value => changeSearchTerm(value)

  useEffect(() => {
    HomeRequestHandler().then(axios.spread((req1, req2) => {
      const reqOne = req1["data"]["drinks"]
      const reqTwo = req2["data"]["drinks"]
      let mergedReq = reqOne.concat(reqTwo)
      setDrinks(Shuffler(mergedReq))
    }))
  }, [])

  return (
    <View style={styles.container}>
      <SearchBar getSearchTerm={getSearchTerm} />
      <Text>{searchTerm}</Text>
        <FlatList
          data={drinks}
          renderItem={({ item }) => <DrinkCard drink={item} key={item["idDrink"]} />}
          keyExtractor={item => item["idDrink"]}
          contentContainerStyle={styles.cardsContainer}
          numColumns='2'
          key='2'
        />
    </View> 
  ) 
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 50
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderColor: 'red',
    borderWidth: 2
  }
})

export default App
