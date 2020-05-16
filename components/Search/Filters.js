import React from 'react'
import { Text, View } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Filters = (props) => {
  const natureSelector = { 'Alcoholic': 0, 'Non_Alcoholic': 1, 'Both': 2 }
  
  const categorySelector = {
    'Ordinary Drink': 0, 'Cocktail': 1, 'Beer': 2,
    'Milk / Float / Shake': 3, 'Cocoa': 4, 'Shot': 5, 'Coffee / Tea': 6,
    'Homemade Liqueur': 7, 'Soft Drink / Soda': 8, 'Punch / Party Drink': 9,
    'Other_Unknown': 10, 'All': 11
  }

  const natureSelected = natureSelector[props.natureSelected]
  const categorySelected = categorySelector[props.categorySelected]

    const nature = [
        { label: 'Alcoholic', value: 'Alcoholic' },
        { label: 'Non Alcoholic', value: 'Non_Alcoholic' },
        { label: 'Both', value: 'Both'}
    ]

    const category = [
        { label: 'Ordinary Drink', value: 'Ordinary Drink' },
        { label: 'Cocktail', value: 'Cocktail' },
        { label: 'Beer', value: 'Beer' },
        { label: 'Milk / Float / Shake', value: 'Milk / Float / Shake' },
        { label: 'Cocoa', value: 'Cocoa' },
        { label: 'Shot', value: 'Shot' },
        { label: 'Coffee / Tea', value: 'Coffee / Tea' },
        { label: 'Homemade Liqueur', value: 'Homemade Liqueur' },
        { label: 'Soft Drink / Soda', value: 'Soft Drink / Soda' },
        { label: 'Punch / Party Drink', value: 'Punch / Party Drink' },
        { label: 'Other / Unknown', value: 'Other_Unknown' },
        { label: 'All', value: 'All' },
    ]

    return (
        <View>
        <Text>Nature of Drink</Text>
          <RadioForm
            radio_props={nature}
            initial={natureSelected}
            onPress={(value) => props.natureFilter(value)}
            />
            <Text>Category</Text>
          <RadioForm
            radio_props={category}
            initial={categorySelected}
            onPress={(value) => props.categoryFilter(value)}
          />
        </View>
      );
}

export default Filters