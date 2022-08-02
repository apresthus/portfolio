import styled from "styled-components";

interface StyledProps{
    dark?: boolean
}

export const Container = styled.div<StyledProps>`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 4em;
padding-top: 4em;
background: ${props => props.dark? 'radial-gradient(50% 50% at 50% 50%, #480E5B 0%, #350A44 86.98%)' : '#FFFFFF'};
color: ${props => props.dark? 'white' : 'black'};
gap: 1em;

`;

export const Intro = styled.p`
font-family: 'Poppins';
font-weight: 600;
font-size: 1rem;
margin-top:1.2em;
`


export const Title = styled.h2<StyledProps>`
font-weight : 600;
color: ${props => props.dark? 'white' : 'black'};
font-size: 1.9rem;`;

export const Stack = styled.p`
background: linear-gradient(90.65deg, #FF008A 4.21%, #FF3C11 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
font-family: 'Poppins';
font-weight: 700;
font-size: 1rem;
margin-bottom: 4em;
line-height: 1.5rem;
`;