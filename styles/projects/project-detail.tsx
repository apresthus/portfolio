import styled from "styled-components";
interface GradientTextProps{
    primaryColor?: string,
    secondaryColor?: string,
    children?: any
    key?: any,
}

interface ContentProps {
    direction?: string,
    justify?: string,
    gap?: string,
}
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
export const ProjectSubtitle = styled.h2<GradientTextProps>`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    font-size: 7vw;
    line-height: 100%;
    letter-spacing: -.04em;
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

export const H3 = styled.h3`
    color: black;
    font-size: 1.4rem;
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
    color: black;
    grid-column-start: 3;
    grid-column-end: 13;
    margin-bottom: .20em;
    font-size: 3.5rem;
    font-weight: 700;
    width: 100%;
    line-height: 113%;
    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 12; 
    font-size: 2rem;

    
}
`;

export const GradientText = styled.span<GradientTextProps>`
    background: linear-gradient(145.14deg, ${props => props.primaryColor} 10.65%, ${props => props.secondaryColor} 90.04%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;  
    font-family: 'Inter', sans-serif;
    font-style: normal;
`;

export const ImageLeft = styled.img``
export const ImageRight = styled.img``;
export const ParagraphLeft = styled.p`
  
    grid-column-start: 3;
    font-size: large;
    grid-column-end: 12;
    padding: 0;
    width: 100%;
    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
}
    `

    export const NumberedList = styled.ol`
        grid-column-start: 3;
    font-size: large;
    grid-column-end: 12;
    padding: 0;
    width: 100%;
    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    }
    `;

    export const ListItem = styled.li`
    `;

    export const UnorderedList = styled.ul`
            grid-column-start: 3;
    font-size: large;
    grid-column-end: 12;
    padding: 0;
    width: 100%;
    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    }
    `;

export const ParagraphRight = styled.span`
    grid-column: 7/12;
    text-align: left;
    font-size: large;
    max-height: min-content;
    padding: 0;
    

    @media screen and (max-width: 768px) { 
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 12; 
    
}
&:first-child {
    margin-top: 0em !important;
}
`;

export const Subheading = styled.h3`
font-weight: 500;
font-size: 1.6rem;
`;

export const ContentBlock = styled.div<ContentProps>`
   display: flex;
   flex-direction: ${props => props.direction? props.direction : "column"};
   grid-column-start: 2;
   grid-column-end: 12;
   padding: 0;
   margin-bottom: 2em;
   gap:  ${props => props.gap === "none"? props.gap : "2em"};
   justify-content:  ${props => props.justify? props.justify : "space-between"};
   align-items: center;
  
  
@media screen and (min-width: 1360px){
    flex-direction: ${props => props.direction? props.direction : "row"};
    justify-content:  ${props => props.justify? props.justify : ""};

    grid-column-start: 3;
   grid-column-end: 12;
    align-items: flex-start ;
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