import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native'
import SearchBar from './components/Search/SearchBar'
import HomeRequestHandler from './components/Request/HomeRequestHandler'
import DrinkCard from './components/Cards/DrinkCard'

const App = () => {
  const [searchTerm, changeSearchTerm] = useState(null)
  const [drinks, setDrinks] = useState(null)
  const [loading, setLoading] = useState(true)
  let allDrinks = null

  const getSearchTerm = value => changeSearchTerm(value)

  useEffect(() => {
    HomeRequestHandler().then((res) => {
      const resDrinks = res["data"]["drinks"]
      setDrinks(resDrinks)
    })
  }, [])

  console.log(Math.random())

  // if (drinks) {
  //   allDrinks = drinks.map(drink => <DrinkCard drink={drink} key={drink["idDrink"]}></DrinkCard>)
  // }

  return (
    <View style={styles.container}>
      <SearchBar getSearchTerm={getSearchTerm} />
      <Text>{searchTerm}</Text>
        <FlatList
        data={drinks}
          renderItem={({ item }) => <DrinkCard drink={item} key={item["idDrink"]} />}
          keyExtractor={item => item["idDrink"]}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 5,
    borderColor: 'red',
    borderWidth: 2
  }
})

export default App
