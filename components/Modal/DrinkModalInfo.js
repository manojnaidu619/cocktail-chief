import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const DrinkInfo = ({ info }) => {
    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
        let newArray = []
        for (let i = 1; i <= 15; i++) {
            let ingredientString = "strIngredient" + i.toString()
            let measureString = "strMeasure" + i.toString()
            if (info[ingredientString] !== null) {
                let ingString = (info[ingredientString.toString()] + " - " + info[measureString.toString()]).toString()
                newArray.push(ingString)
            }
        }
        if (ingredients.length == 0) {setIngredients(newArray)}
    }, [])
    
    
    return (
        <View style={styles.modalContainer}>
            <View>
                <Image source={{ uri: info['strDrinkThumb'] }} style={{ width: 400, height: 400 }}></Image>
            </View>
            <Text>{info["strDrink"]}</Text>
            <Text>Is it Alchoholic? : {info["strAlcoholic"] === 'Alcoholic' ? 'Yes' : "No"}</Text>
            <Text>Category : {info["strCategory"]}</Text>
            <Text>Glass : {info["strGlass"]}</Text>
            <Text>Ingredients : </Text>
            {
                ingredients.map((ing, index) => <Text key={index}>{ing},</Text>)
            }
            <Text>{info["strInstructions"]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10
    }
})

export default DrinkInfo