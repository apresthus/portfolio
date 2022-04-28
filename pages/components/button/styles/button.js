import styled from 'styled-components';

export const ButtonBase = styled.button`
    background-color: ${props => props.theme.colors.primary};
    border: none;
    color: ${props => props.theme.colors.white};
    padding: 10px 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

`;