import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import SearchBar from './components/Search/SearchBar'
import HomeRequestHandler from './components/Request/HomeRequestHandler'
import DrinkCard from './components/Cards/DrinkCard'
import axios from 'axios'
import Shuffler from './components/utils/ArrayShuffler'
import DrinkInfo from './components/Modal/DrinkModal'
import FlatListResolver from './components/utils/FlatListResolver'

const App = () => {
  const [searchTerm, changeSearchTerm] = useState(null)
  const [drinks, setDrinks] = useState(null)
  const [loading, setLoading] = useState(true)
  const [modalStatus, setModalStatus] = useState(false)
  const [drinkId, setDrinkId] = useState(null)

  const getSearchTerm = value => changeSearchTerm(value)

  const pressHandler = (item) => {
    setDrinkId(item["idDrink"])
    setModalStatus(true)
  }

  useEffect(() => {
    HomeRequestHandler().then(axios.spread((req1, req2) => {
      const reqOne = req1["data"]["drinks"]
      const reqTwo = req2["data"]["drinks"]
      let mergedReq = reqOne.concat(reqTwo)
      setDrinks(Shuffler(mergedReq))
      setLoading(false)
    }))
  }, [])

  // const renderItem = ({ item }) => { 
  //   return (
  //     <View>
  //       <TouchableOpacity onPress={() => pressHandler(item)}>
  //         <DrinkCard drink={item} key={item["idDrink"]} />
  //       </TouchableOpacity>
  //     </View>
  //     )
  // }

  return (
    <View style={styles.container}>
      <SearchBar getSearchTerm={getSearchTerm} />
      <Text>{searchTerm}</Text>
      {
        !loading ?
        // <FlatList
        //   data={drinks}
        //   renderItem={renderItem}
        //   keyExtractor={item => item["idDrink"]}
        //   contentContainerStyle={styles.cardsContainer}
        //   numColumns='2'
        //   key='2'
        //   /> :
        FlatListResolver(searchTerm, drinks, pressHandler) :
        <Text>Loading data!</Text>
      }
        
      <Modal visible={modalStatus}
        onRequestClose={() => setModalStatus(false)}
        animationType='slide-down'>
          <DrinkInfo drinkId={drinkId} />
      </Modal>
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
    padding: 5
  }
})

export default App
