import { ButtonBase } from "./styles/button";
import classNames from 'classnames';
import React from 'react'
import { useTheme } from "styled-components";

export default function Button({ classes, children, ...restProps }) {
  const theme = {
    colors:{
    primary:"#00BFFF",
    secondary:"#FF6347"},
  }
  return (
    <ButtonBase className={classNames('button__base', `${theme}`, classes)} {...restProps}>{children}</ButtonBase>
  )
}
 