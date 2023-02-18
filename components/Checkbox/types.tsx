import { GestureResponderEvent } from "react-native"

interface checkBoxTypes {
    width : number

    height : number

    paddingTop: number

    onPress : (event:GestureResponderEvent) => void | undefined
}

export type {checkBoxTypes} 