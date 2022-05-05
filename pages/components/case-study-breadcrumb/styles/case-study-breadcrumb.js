import styled from "styled-components";

export const Container = styled.div`
font-weight: bold;
display:flex ;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
font-size:1.3rem;
color:black;
width:100% ;
min-height: 3em;
background-color: rgba(255, 60, 17, 0.12);

`;

export const Previous = styled.button`
border: none;
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
color: black;
font-size: 1.3rem;
font-weight: bold;
cursor:pointer ;

&:hover{
    color:purple ;
}`;