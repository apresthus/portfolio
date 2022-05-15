import React from 'react'
import Link from 'next/link'
import {FooterContainer, FooterText} from './styles/footer'
import {ContactForm} from '../contact-form'
export default function Footer() {
  return (
    <FooterContainer>
    <FooterText>Want to get in touch? Drop me a line below:</FooterText>
    <ContactForm />
    <p style={{color:"white", fontFamily:"Poppins, sans serif", fontWeight:"normal"}} >© Alexander Presthus 2022 | <Link href="/projects/ember-cms">Powered by Ember CMS</Link></p>
    </FooterContainer>
  )
}
