import styled from 'styled-components';

export const Title = styled.h2``;

export const Container = styled.div`

width:100%;
max-width: 45rem ;
min-height:400px ;
margin-top:1em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:white;
font-size:1.5em ;
background-image: 
linear-gradient(110.86deg, ${props => props.primaryColor+'7F'}, ${props => props.secondaryColor+'7F'}), url(${props => props.src});
background-size: cover;
all: 500ms;
will-change: transform;
cursor: pointer;
background-position: center;
box-shadow: 0px 4px 14px 4px rgba(0, 0, 0, 0.1);

&:hover{
  
  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
  rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
  transform: translateY(-3px) scale(1.04);
  transition-timing-function: cubic-bezier;
  transition: 0.7s; 
  z-index:1;
  
}
&:focus{
   
  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
  rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
  transform: translateY(-3px) scale(1.04);
  transition-timing-function: cubic-bezier;
  transition: 0.7s; 
  z-index:1;
  
}
`;

export const Text = styled.p``;