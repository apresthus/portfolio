import styled from 'styled-components';

export const Title = styled.h2``;

export const Container = styled.div`
width:100%;
max-width:700px;
min-height:400px ;
margin-top:1em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:white;
font-size:2em ;
background-image: 
linear-gradient(110.86deg, ${props => props.primaryColor+'7F'}, ${props => props.secondaryColor+'7F'}), url(${props => props.src});
background-size: cover;
background-position: center;
box-shadow: 0px 4px 14px 4px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p``;