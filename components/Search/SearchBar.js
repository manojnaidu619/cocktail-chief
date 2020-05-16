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
                <Text style={{marginLeft: 20}} onPress={() => props.filterModal()}>Filters</Text>
            </View>
        </TouchableOpacity>
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
        width: '80%',
        marginBottom: 30
    }
})

export default SearchBar