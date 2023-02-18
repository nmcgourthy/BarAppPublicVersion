import { View, Text, StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import { colors } from '../colors'
import { ContainerProps } from './types'


const mainContainer: FunctionComponent<ContainerProps> = ( {children , backgroundColor = colors.primary} ) => {
  return (
    <View style = {[styles.viewContainer , {backgroundColor : backgroundColor}]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex : 1,
        padding: 25,
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default mainContainer