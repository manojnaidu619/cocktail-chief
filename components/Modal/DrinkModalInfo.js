import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

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
        <ScrollView>
            <View style={styles.modalContainer}>
            <View>
                <Image source={{ uri: info['strDrinkThumb'] }} style={styles.image}></Image>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 27, marginBottom: 5, marginTop: 10}}>{info["strDrink"]}</Text>
            <Text style={styles.textStyle}>Is it Alchoholic? : <Text style={{fontWeight: 'bold'}}>{info["strAlcoholic"] === 'Alcoholic' ? 'Yes' : "No"}</Text></Text>
            <Text style={styles.textStyle}>Category : {info["strCategory"]}</Text>
            <Text style={styles.textStyle}>Glass : {info["strGlass"]}</Text>
            <Text style={{fontWeight: 'bold'}}>Ingredients : </Text>
            {
                ingredients.map((ing, index) => <Text key={index} style={{marginLeft: 15}}>{ing},</Text>)
            }       
            <Text style={{fontWeight: 'bold', marginTop: 10}}>Preparation : </Text>    
            <Text style={styles.textStyle}>{info["strInstructions"]}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        fontFamily: "Cochin",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10
    },
    textStyle: {
        marginBottom: 10,
        marginTop: 8,
        fontSize: 15
    },
    image: {
        width: 350,
        height: 350,
        marginLeft: 25,
        marginRight: 25
    }
})

export default DrinkInfo