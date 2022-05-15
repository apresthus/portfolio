import React from 'react'
import {Container} from './styles/project-header'
export default function ProjectHeader({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}
