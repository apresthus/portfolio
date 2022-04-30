import {FC,PropsWithChildren} from 'react'
import {Container,Title, Text} from './styles/card'
import Button from '../button/Button'
import classNames from 'classnames'



   export function Card({ classes, children, ...restProps }) {
    return (
      <Container className={classNames('card', classes)} {...restProps}>
        {children}
      </Container>
    );
  }
  

  Card.Title = function CardTitle({ classes, children, ...restProps }) {
    return (
      <Title className={classNames('card__body', classes)} {...restProps}>
        {children}
      </Title>
    );
  };

  Card.Text = function CardText({ classes, children, ...restProps }) {
    return (
      <Text className={classNames('card__text', classes)} {...restProps}>
        {children}
      </Text>
    );
  };

  Card.Button = function CardButton({ classes, children, ...restProps }) {
    return (
      <Button className={classNames('card__button', classes)}  {...restProps}>
        {children}
      </Button>
    );
  };


