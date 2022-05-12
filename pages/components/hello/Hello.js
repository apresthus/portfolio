import React from 'react'
import { AboutContainer, Container, HelloText, ArrowContainer, Arrow, InfoContainer, WorkText, SocialsContainer } from './styles/hello'
import Button from '../button/Button'
export default function Hello() {
  return (
    <Container>
        <HelloText>Hi, I’m Alexander Presthus<span style={{color:"#FF3C11"}}>.</span></HelloText>
        <HelloText>I’m a full stack developer & digital craftsman<span style={{color:"#7A28CB"}}>.</span></HelloText>
        <AboutContainer><img height={"50%"} src={"/image_scaleddown.jpg"}/><InfoContainer><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><SocialsContainer><Button>Github</Button><Button>LinkedIn</Button></SocialsContainer></InfoContainer></AboutContainer>
        <ArrowContainer><Arrow width="18" height="53" viewBox="0 0 18 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 53L17.6603 38L0.339744 38L9 53ZM7.5 -6.55671e-08L7.5 39.5L10.5 39.5L10.5 6.55671e-08L7.5 -6.55671e-08Z" fill="black"/>
</Arrow>
<WorkText>scroll to see my latest work</WorkText>
</ArrowContainer>
    </Container>
  )
}
