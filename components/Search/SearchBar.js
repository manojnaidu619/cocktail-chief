import React, {useState} from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'

const SearchBar = (props) => {
    const [searchVal, changeSearchVal] = useState()
    return (
        <TouchableOpacity>
            <View style={styles.searchBarView}>
                <TextInput
                    style={styles.inputField}
                    placeholder="Search for drink / ingredient"
                    onChangeText={text => changeSearchVal(text)}
                    value={searchVal}
                    returnKeyType="go"
                    onSubmitEditing={() => props.getSearchTerm(searchVal)}
                />
                <Text style={styles.filterText} onPress={() => props.filterModal()}>Filters</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    searchBarView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    inputField: {
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        padding: 5,
        width: '80%',
        marginBottom: 30,
        color: 'gray'
    },
    filterText: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default SearchBar