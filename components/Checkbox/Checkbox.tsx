import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, FunctionComponent, useState } from 'react'
import { colors } from '../colors'
import { checkBoxTypes } from './types'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CheckBox: FunctionComponent<checkBoxTypes> = ( { paddingTop}) => {
  const [Icon, setIcon] = useState(false)

  const iconColor = Icon ?  colors.secondary: colors.green;



  return (
    <View style = {[styles.viewContainer, {borderColor : iconColor}]}>
      <TouchableOpacity onPress = {() => setIcon(!Icon)} style = { [styles.align ] }>
xoff
        <MaterialCommunityIcons name = {'check'} size = {35} style={[{color : iconColor} , styles.align]}></MaterialCommunityIcons>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer : {

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth : 2,
    height : 40,
    weigth : 40,


  } , 

  align : {

    justifyContent : 'center',
    alignItems : 'center',
    height : '100%',
    width : '100%',
    flex : 1

  }
})

export default CheckBox