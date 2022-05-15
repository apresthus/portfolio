import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100% ;
height:100vh ;
padding-left:1em;
padding-right:1em;
margin:0;

@media (max-width: 758px) {
    height:auto;
    gap:1.5em ;
  }
`;

export const AboutContainer = styled.div`
display: flex;
flex-direction: row;
gap:2em;
margin-top:2em;
justify-content: center;
align-items: center;
@media (max-width: 758px) {
    flex-direction: column;
  }
`;

export const Arrow = styled.svg`
`;


export const ArrowContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
gap:2em;
justify-content: center;
align-items: center;

`;

export const InfoContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
gap:2em;
line-height: 1.7;
justify-content: center;
align-items: center;
`;

export const SocialsContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
gap:2em;
justify-content: center;
align-items: center;
`;

export const WorkText = styled.p`
font-family: 'Caveat';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
position: absolute;
width:max-content ;
left:50px; ;
background: linear-gradient(90.57deg, #F96615 30.18%, #F0548C 94.34%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

@media (max-width: 758px) {
    position: relative;
  }
`;

export const HelloText = styled.h2`
font-size:2.5rem;
color:black;
text-align:center;
font-family: 'Poppins', sans-serif;
font-weight:bold;
padding:0;
margin:0;`;
