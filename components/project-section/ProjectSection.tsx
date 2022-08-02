import React from 'react'
import { Container, Intro, Title, Stack } from './styles/project-section'
import {Button} from '../button/Button'
export  function ProjectSection({children, classes,...props}:any) {
  return (
    <Container {...props}>
        {children}
    </Container>
  )
}


ProjectSection.Title = function CardTitle({ children, ...restProps }:any) {
    return (
      <Title  {...restProps}>
        {children}
      </Title>
    );
  };

  ProjectSection.Intro = function CardText({ children, ...restProps }:any) {
    return (
      <Intro  {...restProps}>
        {children}
      </Intro>
    );
  };
  ProjectSection.Stack = function CardText({ children, ...restProps }:any) {
    return (
      <Stack  {...restProps}>
        {children}
      </Stack>
    );
  };

  ProjectSection.Button = function CardButton({ children, ...restProps }:any) {
    return (
      <Button  {...restProps}>
        {children}
      </Button>
    );
  };
