import { ButtonBase } from "./styles/button";
import classNames from 'classnames';
import React from 'react'
interface ButtonProps{
  classes?: any,
  children?: any,
  onClick?: any,
  disabled?: boolean, 
  variant?: string, // not in use right now
  color?: string, // not in use right now
}
export const Button:React.FC <ButtonProps> = ({ classes, children, ...restProps }) =>{

  const theme = {
    colors:{
    primary:"#00BFFF",
    secondary:"#FF6347"},
  }
  return (
    <ButtonBase className={classNames(`'button__base', ${theme}, ${classes}`)} {...restProps}>{children}</ButtonBase>
  )
}
 