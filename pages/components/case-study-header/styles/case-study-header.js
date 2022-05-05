import styled from 'styled-components';

export const Container = styled.div`
height :60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:white;
font-size:2em ;
background-image: linear-gradient(180deg, ${props => props.primaryColor}, ${props => props.secondaryColor}), url(${props => props.src});
background-size: cover;
background-position: center;`;