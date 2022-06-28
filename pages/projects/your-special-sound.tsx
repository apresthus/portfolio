import type { NextPage } from 'next' 
import {ProjectBreadcrumb} from '../../components/project-breadcrumb'
import {EmberCMSPage} from '../../types'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import {Heading, ProjectTitle, ProjectSubtitle, DesignImage, HeaderContainer, Summary, LeftStandin,PaletteContainer, Descriptor, ParagraphLeft,CenterParagraph, ParagraphRight, ColorPalette, Color} from '../../styles/projects/project-detail.js'

interface ProjectProps {
    page:EmberCMSPage,
    pageTemplate:EmberCMSPage,
     notFound:Boolean
   }
interface ColumnProps {
    children?: React.ReactNode,
    className?: string,
    start: number,
    end: number,
}


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
column-gap: 1.25rem;
row-gap: 1.25rem;
grid-auto-rows : minmax(min-content, max-content);  
justify-items:start;
grid-auto-flow: row;
margin-bottom: 1.25rem;
`;

const FeatureBox = styled.section`
background: radial-gradient(120.65% 251.65% at -2.12% 5.59%, #FF008A 35.42%, #5F00BA 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
border-radius: 40px;
min-height: 20em;
padding: 2em;
color: white;
font-weight: 400;
grid-column-start: 2;
grid-column-end: 12;

*::selection {
  color: #fff;
  background:#000 !important;
  -webkit-text-fill-color: white;
}
`;

interface ProjectProps {
    page:EmberCMSPage,
    pageTemplate:EmberCMSPage,
     notFound:Boolean
   }
   
   export async function getStaticProps({params}:any ) {
 
  console.log(params)
       const response : any = await fetch(`http://localhost:8080/api/page/0e3cee28-04f4-4842-a7ec-2b71d09947a9/your-special-sound`)
       
       const page =await response.json()
       
       console.log(page);
       console.log(page.content)
       
       if (!page) {
        
         return {
           notFound: true,
         }
       }
     
       return {
         props: { page }
       }
   
   }
  



   
const YourSpecialSoundPage: NextPage<ProjectProps> = ({page}) => {
const {content} = page;
const title = content[0].data;
const subtitle = content[1].data;
const overviewHeading = content[2];
const overviewDescriptor = content[3];
const overviewContent = content[4].data[0].children[0].text;

console.log(page)
    return(
        <React.Fragment>
            <Grid>
            <HeaderContainer>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectSubtitle>{subtitle}</ProjectSubtitle> 
            </HeaderContainer>
            <Summary><strong>type:</strong><p>Personal project</p><strong>stack:</strong><p>React, Redux Toolkit, Firebase, Shopify Storefront API</p><strong>what i did:</strong><p>Everything</p><strong>site/demo:</strong><a href={"https://create.yourspecialsound.com"}>View site</a></Summary>
     
     <Heading>{overviewHeading.data}</Heading>
    <Descriptor >{overviewDescriptor.data}</Descriptor>
   <ParagraphLeft>{overviewContent}</ParagraphLeft>
<img style={{gridColumnStart:"1", gridColumnEnd:"13", width:"85%", margin:"0 auto"}} src={content[3].data} />

<Heading>tech stack & explanation</Heading>
<Descriptor >React & Redux front end,<br></br> Shopify Storefront API in the backend.</Descriptor>
   <LeftStandin >Stack Illustration</LeftStandin>   
   <ParagraphRight>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Morbi dolor massa, euismod non nibh et, bibendum consectetur tellus. Donec sit amet dui et massa commodo scelerisque. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien. Curabitur viverra sagittis tristique. Donec nulla arcu, malesuada sit amet rhoncus et, euismod vitae elit.</ParagraphRight>
  
   <Heading>challenges</Heading>
   <Descriptor >Responsive, yet powerful & easy to use.</Descriptor>  
   <ParagraphLeft>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien.</ParagraphLeft>
   <img style={{margin:"0 auto", width:"75%", gridColumnStart:"2", gridColumnEnd:"12"}} src={"/iphone-mockup.png"} />
   <ParagraphLeft>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Morbi dolor massa, euismod non nibh et, bibendum consectetur tellus. Donec sit amet dui et massa commodo scelerisque. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien. Curabitur viverra sagittis tristique. Donec nulla arcu, malesuada sit amet rhoncus et, euismod vitae elit.</ParagraphLeft>

   <Heading>colors & design</Heading>
   <Descriptor >Function over form, without looking ugly.</Descriptor>  
   <ParagraphLeft>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Morbi dolor massa, euismod non nibh et, bibendum consectetur tellus. Donec sit amet dui et massa commodo scelerisque. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est.</ParagraphLeft>
    <DesignImage src={"/yss2.png"} />
    <DesignImage src={"/yss.png"} />
    <DesignImage src={"/yss-canvas.png"} />
    <DesignImage src={"/yss-cart.png"} />
    
            </Grid>
       
        
        <ProjectBreadcrumb next={"YSS Fulfillment Portal"} previous={"Ember CMS"} />
        </React.Fragment>
    )

}
export default YourSpecialSoundPage
