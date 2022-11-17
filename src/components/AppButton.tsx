import React from 'react'
import { StyledButton as Button } from '../styles/theme'

type ButtonProps = {
    text:string
}
const AppButton = ({text} :ButtonProps) => {
  return (
    <Button title={text} className="" />
  )
}

export default AppButton