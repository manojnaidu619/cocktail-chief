import React from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'

const SearchBar = () => {
    return (
        <View>
            <TextInput style={styles.inputField} placeholder="Search for drink / Type first letter"/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarView: {
        display: 'flex',
        flexDirection: 'row'
    },
    inputField: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        padding: 5
    }
})

export default SearchBar