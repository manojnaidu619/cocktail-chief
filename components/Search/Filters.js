import React from 'react'
import { Text, View } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Filters = ({natureFilter, categoryFilter}) => {
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
            initial={2}
            onPress={(value) => natureFilter(value)}
            />
            <Text>Category</Text>
          <RadioForm
            radio_props={category}
            initial={11}
            onPress={(value) => categoryFilter(value)}
          />
        </View>
      );
}

export default Filters