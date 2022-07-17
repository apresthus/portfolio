import React from 'react'
import { Container, Intro, Title, Stack, ProjectPreview } from './styles/project-card'
import {Button} from '../button/Button'
export  function ProjectCard({children, ...props}:any) {
  return (
    <Container direction={props.direction}>
        {children}
    </Container>
  )
}


ProjectCard.Title = function CardTitle({ children, ...restProps }:any) {
    return (
      <Title  {...restProps}>
        {children}
      </Title>
    );
  };

  ProjectCard.Intro = function CardText({ children, ...restProps }:any) {
    return (
      <Intro  {...restProps}>
        {children}
      </Intro>
    );
  };
  ProjectCard.Stack = function CardText({ children, ...restProps }:any) {
    return (
      <Stack  {...restProps}>
        {children}
      </Stack>
    );
  };

  ProjectCard.Button = function CardButton({ children, ...restProps }:any) {
    return (
      <Button  {...restProps}>
        {children}
      </Button>
    );
  };

  ProjectCard.ProjectPreview = function CardPreview({ children, ...restProps }:any) {
    return (
      <ProjectPreview  {...restProps}>
        {children}
      </ProjectPreview>
    );
  }