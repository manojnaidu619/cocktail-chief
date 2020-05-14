import React, {useState} from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'

const SearchBar = (props) => {
    const [searchVal, changeSearchVal] = useState()

    const onPressHandler = () => {
        props.getSearchTerm(searchVal)
    }

    return (
        <View style={styles.searchBarView}>
            <TextInput style={styles.inputField} placeholder="Search for drink / Type first letter" onChangeText={text => changeSearchVal(text)} value={searchVal}/>
            <Button title="Search" onPress={onPressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        padding: 5,
        width: '80%'
    }
})

export default SearchBar