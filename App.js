import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native'
import SearchBar from './components/Search/SearchBar'
import HomeRequestHandler from './components/Request/HomeRequestHandler'
import axios from 'axios'
import Shuffler from './components/utils/ArrayShuffler'
import DrinkInfo from './components/Modal/DrinkModal'
import FlatListResolver from './components/utils/FlatListResolver'
import Filter from './components/Search/Filters'

const App = () => {
  const [searchTerm, changeSearchTerm] = useState(null)
  const [drinks, setDrinks] = useState(null)
  const [loading, setLoading] = useState(true)
  const [modalStatus, setModalStatus] = useState(false)
  const [filterModal, setFilterModal] = useState(false)
  const [drinkId, setDrinkId] = useState(null)
  const [filters, changeFilters] = useState(['Both', 'All'])
  
  const getSearchTerm = value => {
    if (value.toString().length > 0) {
      requestHandler([null, null, value.toString()])
    } else {
      requestHandler(filters)
    }
  }

  const FilterModalHandler = () => setFilterModal(true)

  const FilterNatureHandler = newData => {
    const newArray = [newData, filters[1]]
    requestHandler(newArray)
    changeFilters(newArray)
  }
  const FilterCategoryHandler = newData => {
    const newArray = [filters[0], newData]
    requestHandler(newArray)
    changeFilters(newArray)
  }

  const pressHandler = (item) => {
    setDrinkId(item["idDrink"])
    setModalStatus(true)
  }

  const requestHandler = (term = filters) => {
    HomeRequestHandler(term).then(axios.spread((req1, req2) => {
      const reqOne = req1["data"]["drinks"]
      if (req2) {
        const reqTwo = req2["data"]["drinks"]
        let mergedReq = reqOne.concat(reqTwo)
        setDrinks(Shuffler(mergedReq))
      } else {
        setDrinks(Shuffler(reqOne))
      }
      //setLoading(false)
    }))
  }

  //useEffect(() => {requestHandler(filters)}, [])

  return (
    <View style={styles.container}>
      <SearchBar getSearchTerm={getSearchTerm} filterModal={FilterModalHandler} />
      {
        !loading ?
        (FlatListResolver(searchTerm, drinks, filters, pressHandler)) :
        <Text style={styles.loader}>Loading drinks...</Text>
      }
      <Modal visible={filterModal}
        onRequestClose={() => setFilterModal(false)}
        animationType='slide-down'>
        <Filter natureFilter={FilterNatureHandler} categoryFilter={FilterCategoryHandler} categorySelected={filters[1]} natureSelected={filters[0]} />
      </Modal>

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
  },
  loader: {
    padding: 15,
    marginTop: 250,
    marginBottom: 250, 
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default App
