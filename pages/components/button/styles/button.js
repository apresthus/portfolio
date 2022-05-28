import styled from 'styled-components';

export const ButtonBase = styled.button`
   background: linear-gradient(92.27deg, #FF3C11 0%, #FF005C 62.62%);
    box-shadow: var(--shadow-elevation-low);
    border: none;
    color: white;
    padding: 1em 1.25em;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover, &:focus {
        background: linear-gradient(92.27deg, #74A3FF 0%, #1922FF 62.62%);
    }
  

`;