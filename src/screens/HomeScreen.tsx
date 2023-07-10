import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, Button } from 'react-native'

export const HomeScreen = () => {
    const navigator = useNavigation();
  return (
    <View>
        <Text>Home Screen</Text>
        <Button
        title='Pokemon'
        onPress={()=>{
            navigator.navigate("PokemonScreen" as never);
        }}/>
    </View>
  )
}
