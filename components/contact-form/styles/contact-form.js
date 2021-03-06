import styled from 'styled-components';

export const Container = styled.form`
display: flex;
flex-direction: column;
padding:2em;
gap:1em;
justify-content: center;
align-items: center;
background-color:white;
box-shadow: 0px 4px 24px 6px rgba(0, 0, 0, 0.1);
width: 85%;
max-width: 700px;`;

export const SuccessText = styled.p`
    background: linear-gradient(90.57deg, #FF3C11 0.25%, #FF008A 97.38%);
    -webkit-background-clip: text;
    text-align: center;
    font-weight: 700;
    line-height: 150%;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    margin-bottom: 1em;
    font-size: 1.4rem;
`;

export const Label = styled.label`
color:black;
font-size:0.9rem;
width:100%; ;
`;

export const Icon = styled.span`
font-size: 4rem;
text-align: center;
display: flex;
align-items: center;
justify-content: center;

`;


export const Input = styled.input`
font-size:0.9rem;
width:100%;
padding:0.5em;
box-shadow: inset 0px 0px 3px 2px rgba(103, 103, 103, 0.1);
border:1px solid rgba(103, 103, 103, 0.14);
width:100%; 

&::placeholder{
  font-family: 'Poppins', sans-serif;
  color: lightgray;
  opacity: 1; /* Firefox */
}

&::-ms-input-placeholder { /* Microsoft Edge */
  color: lightgray;
}

`;

export const TextArea = styled.textarea`
width:max-content;
font-size:0.9rem;
padding:1em;
resize:none;
border:1px solid rgba(103, 103, 103, 0.14);
box-shadow: inset 0px 0px 16px 10px rgba(103, 103, 103, 0.04);
width:100%;
height:150px;
font-family: 'Poppins', sans-serif;
&::placeholder{
  font-family: 'Poppins', sans-serif;
  color: lightgray;
  opacity: 1; /* Firefox */
}

&::-ms-input-placeholder { /* Microsoft Edge */
    font-family: 'Poppins', sans-serif;
    color: lightgray;
}
`;