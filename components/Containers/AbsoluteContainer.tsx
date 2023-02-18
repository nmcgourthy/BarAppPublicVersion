import { View, Text, StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import { colors } from '../colors'
import { ContainerProps } from './types'


const absoluteContainer: FunctionComponent<ContainerProps> = ( {children , top , left, right , bottom, flexDirection, height , width , backgroundColor, borderRadius} ) => {

  return (
    <View style = {[styles.viewContainer, {top: top}, {left:left}, {right:right}, {bottom:bottom} , {height : height} , {width : width} , {backgroundColor:backgroundColor} , {borderRadius : borderRadius}]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    viewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position : 'absolute',
    }
})

export default absoluteContainer