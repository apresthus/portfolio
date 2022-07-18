import styled from "styled-components";

interface ProjectCardProps {
    direction:string
}

export const Container = styled.li<ProjectCardProps>`
width:100%;
height:auto;
margin-top: 2em;
margin-bottom: 2em;
display:flex;
flex-direction:column-reverse;
list-style: none;
justify-content:space-between;
gap: 1em;
font-size: 1.2rem;

@media only screen and (min-width: 1300px) {

    flex-direction:${props => props.direction === 'reverse' ? 'row-reverse' : 'row'};
    column-gap: 3em;
}
`;

export const Title = styled.h2`
font-size: 2.5rem;
`;

export const Intro = styled.p``;

export const Stack = styled.p`
font-weight: 500;
`;

export const ProjectPreview = styled.div`
/*background: linear-gradient(110.86deg, rgba(255, 60, 17, 0.5) 0%, rgba(255, 211, 25, 0.5) 100%);*/
min-width: 50%;;
height: min-content;
`;