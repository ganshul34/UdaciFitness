import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { FontAwesome,Entypo } from '@expo/vector-icons'
//import { black } from 'ansi-colors';

export default function UdaciSteppers ({ max,unit,value,step,onIncrement,onDecrement }) {
    
    return(
    <View>
      <View>
        <TouchableOpacity onPress={onDecrement}>
             <FontAwesome name='minus' size={30} color={black} />

        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
             <FontAwesome name='pluss' size={30} color={black} />

        </TouchableOpacity>
       </View>
        <View>
            <Text>{value}</Text>
            <Text>{unit}</Text>
        </View>
    </View>
    )
}