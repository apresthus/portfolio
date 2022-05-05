import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height:100vh ;
padding:0;
margin:0;
`;

export const AboutContainer = styled.div`
display: flex;
flex-direction: row;
gap:2em;
justify-content: center;
align-items: center;
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
`;

export const HelloText = styled.h2`
font-size:2.5rem;
color:black;
text-align:center;
font-family: 'Poppins', sans-serif;
font-weight:bold;
padding:0;
margin:0;`;
