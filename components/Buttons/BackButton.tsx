import { StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import { colors } from '../colors'
import { buttonProps } from './types'
import AbsoluteContainer from '../Containers/AbsoluteContainer'
import MainButton from './MainButton'

const BackButton: FunctionComponent<buttonProps> = ( { navigation , height , width } ) => {
  return (
    <AbsoluteContainer backgroundColor = {colors.primary} top={40} left = {20}>
          <MainButton backgroundColor = {colors.primary} height = {height} width = {width} onPress = {() => navigation.navigate('Home')}> back </MainButton>
        </AbsoluteContainer>
  )
}

const styles = StyleSheet.create({
    viewStyle: {
      paddingTop: 10
    },

    buttonStyles: {
      backgroundColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,

    }
})

export default BackButton