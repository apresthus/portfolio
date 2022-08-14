import type { NextPage } from 'next' 
import {ProjectBreadcrumb} from '../../components/project-breadcrumb'
import {EmberCMSPage} from '../../types'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import {Heading, ProjectTitle, ProjectSubtitle, DesignImage, HeaderContainer, Summary, LeftStandin,PaletteContainer, Descriptor, ParagraphLeft,CenterParagraph, ParagraphRight, ColorPalette, Color} from '../../styles/projects/project-detail'

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



interface ProjectProps {
    page:EmberCMSPage,
    pageTemplate:EmberCMSPage,
     notFound:Boolean
   }
   
   export async function getStaticProps({params}:any ) {
 
  console.log(params)
       const response : any = await fetch(`http://localhost:8080/api/collection/0e3cee28-04f4-4842-a7ec-2b71d09947a9/ember-cms`)
       
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
  



   
const EmberCMSPage: NextPage<ProjectProps> = ({page}) => {



const {content} = page;
const colorProps ={
    primaryColor:"#FFD319", 
    secondaryColor:"#FF008A"
}
const PageContent = content.reduce((mapAccumulator, obj) => {
    // either one of the following syntax works
     mapAccumulator[obj.fieldName] = obj.data;
    return mapAccumulator;
  }, new Map());


console.log(PageContent)
console.log(PageContent.entries())
const title = PageContent.title;
const subtitle =PageContent.subtitle;
const overviewHeading = PageContent.overview_heading;
const overviewDescriptor = PageContent.overview_descriptor;
const overviewContent = content[4].data[0].children[0].text;

console.log(page)
    return(
        <React.Fragment>
            <Grid>
            <HeaderContainer>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectSubtitle {...colorProps}>{subtitle}</ProjectSubtitle> 
            </HeaderContainer>
            <Summary><strong>type:</strong><p>Personal project</p><strong>stack:</strong><p>Next.js, Firebase, GraphQL (Apollo server), Typescript</p><strong>what i did:</strong><p>Everything</p><strong>site/demo:</strong><a href={"https://create.yourspecialsound.com"} className="inlineLink">View site</a></Summary>
     
     <Heading>{overviewHeading}</Heading>
    <Descriptor {...colorProps}  >{overviewDescriptor}</Descriptor>
   <ParagraphLeft>{overviewContent}</ParagraphLeft>
<img style={{gridColumnStart:"1", gridColumnEnd:"13", width:"65%", margin:"0 auto"}} src={content[5].data} />

<Heading>tech stack & explanation</Heading>
<Descriptor {...colorProps} >React & Redux front end,<br></br> Shopify Storefront API in the backend.</Descriptor>
   <LeftStandin >Stack Illustration</LeftStandin>   
   <ParagraphRight>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Morbi dolor massa, euismod non nibh et, bibendum consectetur tellus. Donec sit amet dui et massa commodo scelerisque. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien. Curabitur viverra sagittis tristique. Donec nulla arcu, malesuada sit amet rhoncus et, euismod vitae elit.</ParagraphRight>
  
   <Heading>challenges</Heading>
   <Descriptor {...colorProps} >Responsive, yet powerful & easy to use.</Descriptor>  
   <ParagraphLeft>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien.</ParagraphLeft>
   <img style={{margin:"0 auto", width:"75%", gridColumnStart:"2", gridColumnEnd:"12"}} src={"/iphone-mockup.png"} />
   <ParagraphLeft>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Morbi dolor massa, euismod non nibh et, bibendum consectetur tellus. Donec sit amet dui et massa commodo scelerisque. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien. Curabitur viverra sagittis tristique. Donec nulla arcu, malesuada sit amet rhoncus et, euismod vitae elit.</ParagraphLeft>

   <Heading>colors & design</Heading>
   <Descriptor {...colorProps} >Function over form, without looking ugly.</Descriptor>  
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
export default EmberCMSPage
