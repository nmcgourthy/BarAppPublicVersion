import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { Children, FunctionComponent } from 'react'
import { colors } from '../colors'
import { buttonProps } from './types'
import SmallText from '../Texts/SmallText'


const mainButton: FunctionComponent<buttonProps> = ( { width  ,  height , onPress , children , paddingTop , paddingLeft , backgroundColor = colors.accent}) => {
  return (
    <View style = { [{paddingTop : paddingTop} , {paddingLeft : paddingLeft} ]}>
      <TouchableOpacity style = { [ styles.buttonStyles, {width : width} , { height : height }  , {backgroundColor : backgroundColor} ]} onPress = {onPress}>
        <SmallText color = {colors.white}>{ children }</SmallText>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    
    buttonStyles: {
      backgroundColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,

    }
})

export default mainButton