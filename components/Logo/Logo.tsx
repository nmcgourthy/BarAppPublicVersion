import { View, Text, Image } from 'react-native'
import React , {FunctionComponent} from 'react'
import { LogoTypes } from './types'
const Logo : FunctionComponent<LogoTypes>= ({ width , height , }) => {
  return (
    <View style = {[{width:width, height: height , justifyContent: 'center', alignItems: 'center'}]}>
      <Image source = {require('../../assets/images/bar.png')} style = {[{resizeMode:'contain' , flex: 1}]}></Image>
    </View>
  )
}

export default Logo