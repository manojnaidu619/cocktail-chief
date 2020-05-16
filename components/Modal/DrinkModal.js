import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import DrinkInfo from './DrinkModalInfo'
import axios from 'axios'

const DrinkModal = (props) => {

    const [drinkInfo, setDrinkInfo] = useState(null)

    const drinkId = props.drinkId
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId

    useEffect(() => {
        axios.get(URL).then((response) => {
            const drinkObject = response["data"]["drinks"][0]
            setDrinkInfo(drinkObject)
        })
    }, [])
    
    return (drinkInfo ? <DrinkInfo info={drinkInfo}/> : <Text style={styles.modalContainer}>loading...</Text>)
    
}

const styles = StyleSheet.create({
    modalContainer: {
        textAlign: 'center',
        padding: 15,
        marginTop: 250,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default DrinkModal