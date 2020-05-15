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
  const [filters, changeFilters] = useState(['Both','All'])

  const getSearchTerm = value => {
    changeSearchTerm(value)
    if (value.toString().length > 0) {
      requestHandler([,,searchTerm])
    } else {
      requestHandler(filters)
    }
  }

  const FilterModalHandler = () => setFilterModal(true)
  const FilterNatureHandler = newData => changeFilters([newData, filters[1]])
  const FilterCategoryHandler = newData => changeFilters([filters[0], newData])

  const pressHandler = (item) => {
    setDrinkId(item["idDrink"])
    setModalStatus(true)
  }

  const requestHandler = (term=filters) => {
    HomeRequestHandler(term).then(axios.spread((req1, req2) => {
      const reqOne = req1["data"]["drinks"]
      const reqTwo = req2["data"]["drinks"]
      let mergedReq = reqOne.concat(reqTwo)
      setDrinks(Shuffler(mergedReq))
      setLoading(false)
    }))
  }

  useEffect(() => {
    requestHandler(filters)
  }, [])

  return (
    <View style={styles.container}>
      <SearchBar getSearchTerm={getSearchTerm} filterModal={FilterModalHandler} />
      {
        !loading ?
        (FlatListResolver(searchTerm, drinks, pressHandler)) :
        <Text>Loading data!</Text>
      }
      <Modal visible={filterModal}
        onRequestClose={() => setFilterModal(false)}
        animationType='slide-down'>
        <Filter natureFilter={FilterNatureHandler} categoryFilter={FilterCategoryHandler}/>
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
  }
})

export default App
