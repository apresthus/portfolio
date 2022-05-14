import React from 'react'
import { AboutContainer, Container, HelloText, ArrowContainer, Arrow, InfoContainer, WorkText, SocialsContainer } from './styles/hello'
import Button from '../button/Button'
import Image from 'next/image'
export default function Hello() {
  return (
    <Container>
        <HelloText>Hi, I’m Alexander Presthus<span style={{color:"#FF3C11"}}>.</span></HelloText>
        <HelloText>I’m a full stack developer & digital craftsman<span style={{color:"#7A28CB"}}>.</span></HelloText>
        <AboutContainer><img  width="100%" height="auto" style={{maxWidth:"15rem"}} src={"/image_scaleddown.jpg"}/><InfoContainer><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><SocialsContainer><Button>Download Resumè</Button><Button>Github</Button><Button>LinkedIn</Button></SocialsContainer></InfoContainer></AboutContainer>
     
    </Container>
  )
}
