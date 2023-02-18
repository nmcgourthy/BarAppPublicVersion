import { View, Text, StyleSheet } from 'react-native'
import React, {ReactNode, useState} from 'react'
import MainContainer from '../components/Containers/MainContainer'
import MediumText from '../components/Texts/MediumText'
import MainButton from '../components/Buttons/MainButton'
import Logo from '../components/Logo/Logo'
import { colors } from '../components/colors'
import AbsoluteContainer from '../components/Containers/AbsoluteContainer'

const Home = ({navigation}) => {

  return (
    <MainContainer backgroundColor= {colors.primary}>
        <MediumText  color = {colors.black}>The Bartending Service of New England</MediumText>

        <Logo height = {100} width = {100}/>

        <AbsoluteContainer
          backgroundColor= {colors.primary}
          bottom={100}
          flexDirection='row'
        >

          <MainButton // Log in
          backgroundColor= {colors.secondary}
          width={100} 
          height = {50} 
          onPress = {() => navigation.navigate('LogIn')}>

            Log in

          </MainButton>

          <MainButton // Sign Up
          backgroundColor= {colors.secondary}
          width = {100} 
          height = {50} 
          paddingLeft = {20}
          onPress = {() => navigation.navigate('SignUp')}>

            Sign up

          </MainButton>

        </AbsoluteContainer>
    </MainContainer>
  )
}



export default Home