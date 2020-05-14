import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchBar from './components/SearchBar/SearchBar'

export default function App() {

  const [searchTerm, changeSearchTerm] = useState(null)

  const getSearchTerm = value => {
    changeSearchTerm(value)
  }

  return (
    <View style={styles.container}>
      <SearchBar getSearchTerm={getSearchTerm} />
      <Text>{searchTerm}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 50
  }

});
