import React, {useState , useEffect} from 'react'
import MainContainer from '../components/Containers/MainContainer'
import AbsoluteContainer from '../components/Containers/AbsoluteContainer'
import Logo from '../components/Logo/Logo'
import StyledTextInput from '../components/Inputs/StyledTextInput'
import BackButton from '../components/Buttons/BackButton'
import { KeyboardAvoidingWrapper } from '../components/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper'
import { colors } from '../components/colors'
import MainButton from '../components/Buttons/MainButton'

const SignUp = ({navigation}) => {

  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')

  const [email, setEmail] = useState('')

  const [passwordIcon, setPasswordIcon] = useState(true)
  const [password, setPassword] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordColor, setConfirmPasswordColor] = useState(true)

  const [accessCode, setAccessCode] = useState('')
  const [accessCodeIcon, setAccessCodeIcon] = useState(true)
 
  useEffect(() => {
    if (password === ''){
      setPasswordIcon(true)} 
      else {
      setPasswordIcon(false)
    }
  }, [password])
  // logic to update password icon on change text
  useEffect(() => {
    if (accessCode === '525'){
      setAccessCodeIcon(true)} 
      else {
      setAccessCodeIcon(false)
     
    }
  }, [accessCode])
  // logic to take in & validate access code
  useEffect(() => {
    if (confirmPassword === password && password != '') {
      setConfirmPasswordColor(true)}
      else {
        setConfirmPasswordColor(false)
      }
  },[confirmPassword])
  // logic to update icon if confirmPassword and password entries are =

  const passwordIconShow = passwordIcon ? 'lock-open-variant' : 'lock'
  const confirmPasswordColorShow = confirmPasswordColor? colors.green : colors.secondary
  const confirmPasswordIconShow = confirmPasswordColor? 'lock' : 'lock-off'
  const accessCodeIconShow = accessCodeIcon ? colors.green : colors.secondary
  // These above all go hand and hand with the logic in the useEffect hooks above to change ui 
  return (
    <KeyboardAvoidingWrapper>
      <MainContainer
        backgroundColor= {colors.primary}>

        <BackButton 

          backgroundColor = {colors.primary} 
          navigation = {navigation} 
          width = {50} 
          height = {50}>

        </BackButton>
        
        <AbsoluteContainer 
        
          backgroundColor= {colors.primary}
          top = {100}>

          <Logo 

            height={100} 
            width = {190}>
            
          </Logo>
          
        </AbsoluteContainer>
      
        <AbsoluteContainer backgroundColor= {colors.primary} bottom = {100}>

          <StyledTextInput icon = 'account' placeholder = 'First name' onChangeText = {(text) => setFirstName(text)}></StyledTextInput>

          <StyledTextInput icon = 'account' placeholder='Last name' onChangeText = {(text) => setLastName(text)}></StyledTextInput>

          <StyledTextInput icon = 'email' placeholder='Email' onChangeText = {(text) => setEmail(text)}> </StyledTextInput>

          <StyledTextInput icon = {passwordIconShow} placeholder = 'Password' onChangeText={(text) => setPassword(text)}> </StyledTextInput>

          <StyledTextInput icon = {confirmPasswordIconShow} iconColor = {confirmPasswordColorShow} placeholder = 'Confirm password' onChangeText={(text) => setConfirmPassword(text)}> </StyledTextInput>

          <StyledTextInput icon = {'account-box'} iconColor = {accessCodeIconShow} placeholder = 'Access Code' onChangeText={(text) => setAccessCode(text)}> </StyledTextInput>
          
          <MainButton width={100} height = {50} backgroundColor = {colors.accent} paddingTop = {20} > Sign Up !</MainButton>

        </AbsoluteContainer>
      
         

      </MainContainer>
    </KeyboardAvoidingWrapper>
  
   
  )
}

export default SignUp