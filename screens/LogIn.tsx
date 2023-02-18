import { View, Text, } from 'react-native'
import React, {useState , useEffect} from 'react'
import MainContainer from '../components/Containers/MainContainer'
import AbsoluteContainer from '../components/Containers/AbsoluteContainer'
import MainButton from '../components/Buttons/MainButton'
import Logo from '../components/Logo/Logo'
import StyledTextInput from '../components/Inputs/StyledTextInput'
import { colors } from '../components/colors'
const LogIn = ({navigation}) => {

  const [icon, setIcon] = useState(true)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (password === ''){
      setIcon(true)} 
      else {
      setIcon(false)
    }
  }, [password])
  const iconShow = icon ? 'lock-open-variant' : 'lock'
  // logic above is to represent the password icon changing when text is entered.

  return (
  
      <MainContainer>
        <AbsoluteContainer top={40} left = {20}>
          <MainButton 
          height = {50} 
          width = {100} 
          onPress = {() => navigation.navigate('Home')}
          backgroundColor = {colors.primary}> 
          
          back </MainButton>
        </AbsoluteContainer>
        
        <AbsoluteContainer top = {200}>
          <Logo height={100} width = {190}></Logo>
        </AbsoluteContainer>
      
        <AbsoluteContainer>
          <StyledTextInput icon = 'email' placeholder='Email' onChangeText={(text) => setEmail}>
          </StyledTextInput>

          <StyledTextInput placeholder = 'Password' icon = {iconShow} onChangeText={(text) => setPassword(text)}>
          </StyledTextInput>

          <MainButton width={100} height = {50} backgroundColor = {colors.accent} paddingTop = {20} > Sign In !</MainButton>
        </AbsoluteContainer>
      

      </MainContainer>

   
  )
}

export default LogIn