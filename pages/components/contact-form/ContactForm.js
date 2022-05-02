import React from 'react'
import { Container, TextArea, Input, Label } from './styles/contact-form'
import Button from '../button/Button'
export default function ContactForm() {
  return (
    <Container>
       <Label>Email:<Input placeholder='email@domain.com'/></Label> 
        <Label>Message:<TextArea placeholder='type your message here'/></Label>
        <Button style={{width:"230px"}}>Send</Button>
    </Container>
  )
}
