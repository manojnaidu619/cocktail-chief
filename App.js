import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import SearchBar from './components/SearchBar/SearchBar'

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 50
  },
});
