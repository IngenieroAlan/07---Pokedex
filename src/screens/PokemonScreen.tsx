import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const PokemonScreen = () => {
    const navigator = useNavigation();
  return (
    <View>
        <Text>Pokemon Screen</Text>
        <Button
        title='Regresar'
        onPress={()=>{
            navigator.navigate("HomeScreen" as never);
        }}/>
        <Icon
          name='checkmark-outline'
          size={25}
        />
    </View>
  )
}
