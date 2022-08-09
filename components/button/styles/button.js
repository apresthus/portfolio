import styled from 'styled-components';

export const ButtonBase = styled.button`
   background: linear-gradient(92.27deg, #FF3C11 0%, #FF005C 62.62%);
    box-shadow: var(--shadow-elevation-low);
    border: none;
    color: white;
    padding: 1rem 1.25rem;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: bold;
    cursor: pointer;


    @media only screen and (min-width: 1000px) {

    font-size: 1rem;
    column-gap: 3em;
}
   

    &:hover, &:focus {
        background: linear-gradient(92.27deg, #74A3FF 0%, #1922FF 62.62%);
    }
  

`;