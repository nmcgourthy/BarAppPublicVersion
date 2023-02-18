import { ReactNode } from "react"

export interface ContainerProps {
    children : ReactNode
    // react node accepts jsx as an input

    top?: number

    bottom?: number

    left?: number

    right?: number

    height?: number | string

    width?: number | string

    flexDirection? : string

    backgroundColor? : string 

    borderRadius ?: number


    
}