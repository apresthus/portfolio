import React from 'react'
import {Container} from './styles/case-study-header'
export default function CaseStudyHeader({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}
