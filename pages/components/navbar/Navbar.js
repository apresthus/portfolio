import React from 'react'
import { NavbarContainer, NavbarList} from './styles/navbar'
export default function Navbar({children, ...restProps}) {
  return (
    <NavbarContainer {...restProps}><NavbarList>{children}</NavbarList></NavbarContainer>
  )
}
