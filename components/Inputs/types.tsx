import React, { ReactNode } from "react"
import { TextInputProps } from "react-native"

interface ExtraInputProps {
    
    icon : string

    paddingTop ?: number

    name ?: ReactNode

    iconColor ?: string

}

export type InputProps = TextInputProps & ExtraInputProps