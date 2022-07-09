import styled from "styled-components";

export const ProjectTitle = styled.h1`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 2vw;
    margin:0;
    color:#000505;
    
    @media screen and (max-width: 768px) { 
    flex-direction: column;
    font-size: 5vw;
}
`;
//FFD319 FF008A
//#FF008A //  #5F00BA  // YSS
export const ProjectSubtitle = styled.h2`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    font-size: 7vw;
    line-height: 100%;
    text-align: center;
    background: linear-gradient(92.94deg, ${props => props.primaryColor} 5.12%,  ${props => props.secondaryColor} 85.82%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media screen and (max-width: 768px) { 
    flex-direction: column;
    font-size: 9vw;
}

    `;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    min-height: max-content;
    margin:  2  .5rem 0;
    max-width: 100%;
    justify-content: center;
    grid-column-start: 3;
    grid-column-end: 11;

    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 13; 
}

    `;

    
export const Heading = styled.h2`
    color: black;
    font-size: 1rem;
    font-weight: bold;
    grid-column-start: 3;
    grid-column-end: 7; 
    margin-bottom: -1em;
    padding-top: 1em;

    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 13; 
}

`;




export const ColorPalette = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
    text-align: center;
    width: 100%;
    grid-column-start: 2;
    grid-column-end:12;
    margin: 2em auto;
`;

export const PaletteContainer = styled.div`
display: flex;
gap: 1em;
flex-direction: column;
`;

export const Color = styled.div`
background-color: ${props => props.color};
box-shadow: 0px 13px 20px -1px rgba(0, 0, 0, 0.18);
height: 110px;
width: 110px;
border-radius: 100vh;
`;

export const Summary = styled.span`
display: flex;
margin: 3em auto;
grid-column-start: 2;
grid-column-end: 12;
gap: .5em;

@media screen and (max-width: 768px) { 
    flex-direction: column;
    margin: inherit;
}
`;

export const LeftStandin = styled.div`
    grid-column-start: 3;
    grid-column-end: 7;
    height: 400px;
    background-color: teal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    
    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 12 ; 
}

    `
export const DesignImage = styled.img`
grid-column-start: 3;
grid-column-end: 11;
@media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 12 ; 
}
`;



export const Descriptor = styled.h3`
    background: linear-gradient(92.94deg, ${props => props.primaryColor} 5.12%, ${props => props.secondaryColor} 85.82%);
    -webkit-background-clip: text;
    grid-column-start: 3;
    grid-column-end: 12;
    font-weight: 700;
    line-height: 113%;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 2.4rem;

    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 12; 
}
`;

export const ImageLeft = styled.img``
export const ImageRight = styled.img``;
export const ParagraphLeft = styled.p`
    grid-column-start: 3;
    font-size: large;
    grid-column-end: 10;
    width: 100%;
    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 12; 
}
    `

export const ParagraphRight = styled.p`
    grid-column-start: 7;
    grid-column-end: 12; 
    text-align: left;
    font-size: large;
    width: 100%;    

    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 12; 
}
`;

export const CenterParagraph = styled.p`
    grid-column-start: 1;
    grid-column-end: 12; 
    justify-self: center;
    align-self: center;
    text-align: left;
    font-size: large;
    margin: 0 auto;
    width: 100%;`;