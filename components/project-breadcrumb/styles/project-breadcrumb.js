import styled from "styled-components";

export const Container = styled.div`
font-weight: bold;
display:flex ;
flex-direction: row;
justify-content: space-evenly;
font-size:1.3rem;
color:black;
width:100% ;
min-height: 3em;
background-color: rgba(255, 60, 17, 0.12);

`;

export const Previous = styled.button`
border: none;
display: flex;
gap: 1em;
align-items: center;
background-color: transparent;
color: black;
font-size: 1.3rem;
font-weight: bold;
cursor:pointer ;

&:hover{
    color:purple ;
}
`;

export const Next = styled.button`
border: none;
background-color: transparent;
display: flex;
align-items: center;
gap: 1em;
color: black;
font-size: 1.3rem;
font-weight: bold;
cursor:pointer ;

&:hover{
    color:purple ;
}`;