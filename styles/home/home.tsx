import styled from "styled-components";

interface HypeTextProps {
    primaryColor?: string,
    secondaryColor?: string,
    children: any
    key: any,
  }
  
export const IntroTextStyle = styled.p<HypeTextProps> `
font-size: 2.6rem;
font-weight: bold;
text-align: center;
font-family: 'Poppins', sans-serif;
line-height: 100%;
margin-top: 0;
&:first-child{
  margin-top:0.6em ;
}

@media only screen and (min-width: 768px) {
  font-size: 4rem;
}

`;

export const ProjectList = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
text-align: center;
width: 100%;
padding-left: 0;
margin: 0;
gap: 1em;

`;


export const HighlightedText = styled.span<HypeTextProps>`
background: linear-gradient(145.14deg, ${props => props.primaryColor} 10.65%, ${props => props.secondaryColor} 90.04%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
color: transparent;
margin-top: 0;
text-align: center;
margin-bottom: 0;

`;