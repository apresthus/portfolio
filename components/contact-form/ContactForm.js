import React from 'react'
import {FC,PropsWithChildren, useState} from 'react'
import { Container, TextArea, Input, Label, SuccessText } from './styles/contact-form'
import {Button} from '../button/Button'
export default function ContactForm() {
const [success, setSuccess] = useState(false)
const [error, setError] = useState(false)


const handleSubmit = async (e) => {
    e.preventDefault()
   const email = e.target[0].value
   const message = e.target[1].value

   let request = await fetch('/api/contact', {method: 'POST', body: JSON.stringify({email, message})}).then(res => res.json()).catch(err => setError(err))

    if(request.success) {
        setSuccess(true)
    }
    else{
      setError(request.error)
    }
  
}

const SuccessScreen = () => {
    return (
      <Container>
        <SuccessText>
            Thank you for your message. I will get back to you as soon as possible.
        </SuccessText>
      </Container>
    )
}

  return (
    success ? <SuccessScreen /> :
    <Container onSubmit={(e) => handleSubmit(e)} id={"contact"}>
       <Label>Email:<Input type="email" required placeholder='email@domain.com'/></Label> 
        <Label>Message:<TextArea required placeholder='type your message here'/></Label>
        <Button type={"submit"} style={{width:"230px"}}>Send</Button>
    </Container>
  )
}
