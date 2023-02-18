import { View, Text, StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import { colors } from '../colors'
import { TextProps } from './types'


const HeadingText: FunctionComponent<TextProps> = ( {children , color} ) => {
  return (
    <Text style = {[styles.text, {color:color}]}>
        {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        textAlign: 'left'
    }
})

export default HeadingText