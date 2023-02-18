import { ReactNode } from "react"
import { ViewStyle, StyleProp, GestureResponderEvent } from "react-native"

interface buttonProps {
    children : ReactNode
    // react node accepts text as an input

    width : number

    height : number

    onPress?: (event:GestureResponderEvent) => void | undefined

    paddingTop ?: number

    navigate ?: CallableFunction

    paddingLeft ?: number

    backgroundColor? : string
}

export type {buttonProps} 