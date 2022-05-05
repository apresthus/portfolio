import React from 'react'
import { Container, Previous, Next } from './styles/case-study-breadcrumb'
export  function CaseStudyBreadcrumb({next,previous, ...restProps}) {

    const leftArrow = <svg width="200" height="24" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.939346 13.0607C0.353546 12.4749 0.353546 11.5251 0.939346 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939346 13.0607ZM200 13.5H2V10.5H200V13.5Z" fill="black"/>
    </svg>
    const rightArrow = <svg width="200" height="24" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M199.061 13.0607C199.646 12.4749 199.646 11.5251 199.061 10.9393L189.515 1.3934C188.929 0.807611 187.979 0.807611 187.393 1.3934C186.808 1.97919 186.808 2.92893 187.393 3.51472L195.879 12L187.393 20.4853C186.808 21.0711 186.808 22.0208 187.393 22.6066C187.979 23.1924 188.929 23.1924 189.515 22.6066L199.061 13.0607ZM0 13.5H198V10.5H0V13.5Z" fill="black"/>
    </svg>
    const fallback = 'Back' ;
  return (
    <Container {...restProps}><Previous>{leftArrow}{previous && fallback}</Previous>{next?<Next>{next}{rightArrow}</Next>:null}</Container>
  )
}
