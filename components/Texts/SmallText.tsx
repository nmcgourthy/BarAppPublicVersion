import { View, Text, StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import { colors } from '../colors'
import { TextProps } from './types'


const SmallText: FunctionComponent<TextProps> = ( {children , color} ) => {
  return (
    <Text style = {[styles.text, {color:color}]}>
        {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        textAlign: 'left'
    }
})

export default SmallText