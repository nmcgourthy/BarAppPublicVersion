import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { HideKeyboardTypes } from './types'

export const KeyboardAvoidingWrapper = ({ children }: HideKeyboardTypes) => {

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1 }}
      keyboardVerticalOffset = {-130}
      enabled>
      {children}
    </KeyboardAvoidingView>
  )
}

