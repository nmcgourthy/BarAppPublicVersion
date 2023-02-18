import { View, TouchableOpacity, Text } from 'react-native'
import React , {FunctionComponent} from 'react'
import { ButtonProps } from 'react-native'

const TextButton : FunctionComponent<ButtonProps>  = ({children} , {onPress}) => {
  return (
    <View>
      <Text>

        {children}
        <TouchableOpacity style = {{flex:1}} onPress = {onPress}>
        </TouchableOpacity>

      </Text>
    </View>
  )
}

export default TextButton