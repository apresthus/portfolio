import type { NextPage } from 'next' 
import {ProjectBreadcrumb} from '../../components/project-breadcrumb'
import {EmberCMSPage} from '../../types'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import {Heading, ProjectTitle, ProjectSubtitle, DesignImage, HeaderContainer, Summary, LeftStandin,PaletteContainer, Descriptor, ParagraphLeft,CenterParagraph, ParagraphRight, ColorPalette, Color, GradientText} from '../../styles/projects/project-detail'
import { motion } from 'framer-motion'
import { EmberParse } from '../../lib/ember-react'
import { v4 as uuidv4 } from 'uuid';
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
row-gap: 1rem;
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
       const response : any = await fetch(`http://localhost:8080/api/collection/0e3cee28-04f4-4842-a7ec-2b71d09947a9/your-special-sound`)
       
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

    const colorProps ={
        primaryColor:"#FF008A", 
        secondaryColor:"#5F00BA"
    }

const {content} = page;

const PageContent = content.reduce((mapAccumulator, obj) => {
    // either one of the following syntax works
     mapAccumulator[obj.fieldName] = obj.data;
    return mapAccumulator;
  }, new Map());

const ContentMap = new Map();
ContentMap.set("paragraph", <ParagraphLeft as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }} /> );
console.log(ContentMap)

console.log(PageContent)
console.log(PageContent.entries())
const title = PageContent.title;
const subtitle =PageContent.subtitle;
const overviewHeading = PageContent.overview_heading;
const overviewDescriptor = PageContent.overview_descriptor;
const overviewContent = PageContent.overview_text;
const {stackHeading, stackDescriptor,stackText} = PageContent;

console.log(page)
    return(
        <React.Fragment>
            <Grid>
            <HeaderContainer>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectSubtitle {...colorProps}>{subtitle}</ProjectSubtitle> 
            </HeaderContainer>
            <Summary><strong>type:</strong><p>Personal project</p><strong>stack:</strong><p>React, Redux Toolkit, Firebase, Shopify Storefront API</p><strong>what i did:</strong><p>Everything</p><strong>site/demo:</strong><a href={"https://create.yourspecialsound.com"} className="inlineLink">View site</a></Summary>
            <div  style={{gridColumnStart:"1", gridColumnEnd:"13", width:"85%", height:"auto", margin:"0 auto"}}>
<Image alt="Your special Sound" width="2051px" height="1133px" src={content[5].data} />
</div>
     <Heading>{overviewHeading}</Heading>
     
     <Descriptor {...colorProps}>
       {

      overviewDescriptor.map((sentence:any) => {
  return <span className='block' key={uuidv4()}>
          {sentence.children.map((word:any) =>{
          if (word.underline) return <GradientText  {...colorProps} key={uuidv4()}>{word.text}</GradientText>
          else return word.text
          }
  )}
  </span>
})}

 </Descriptor>

   {
   
         overviewContent.map((node:any, idx:number) => {
         return (<ParagraphLeft as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }} key={idx}> 
         {node.children.map((el:any, index:number) =>{
          if (el.url) return <a key={el.url} href={el.url} target="_blank" rel="noreferrer" >{el.children[0].text}</a>
          if (el.type === "bulleted-list") {console.log("el is list"); return <p key={index}>Im a list</p>}
          return <span key={index}>{el.text}</span>
         })}</ParagraphLeft>)

         })
  

       
  }


<Heading>{stackHeading}</Heading>
<Descriptor {...colorProps}>
       {

      stackDescriptor.map((sentence:any) => {
  return <span className='block' key={uuidv4()}>
          {sentence.children.map((word:any) =>{
          if (word.underline) return <GradientText  {...colorProps} key={uuidv4()}>{word.text}</GradientText>
          else return word.text
          }
  )}
  </span>
})}

 </Descriptor>
   <LeftStandin >Stack Illustration</LeftStandin>   
   <ParagraphRight>
   { 
         stackText.map((node:any, idx:number) => {
         return (<span className="block" key={idx}>{node.children.map((el:any, index:number) =>{
          if (el.url) return <a key={el.url} href={el.url} >{el.children[0].text}</a>
          return <span className='block' key={index}>{el.text}</span>
         })}</span>)

         })
       
         
         }
   </ParagraphRight>
  
   <Heading>challenges</Heading>
   <Descriptor {...colorProps} >Responsive, yet powerful & easy to use.</Descriptor>  
   <ParagraphLeft as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien.</ParagraphLeft>
   <div style={{margin:"0 auto", width:"75%", gridColumnStart:"2", gridColumnEnd:"12"}}>
   <Image width={1192} height={1135} alt="iphone mockups" src={"/iphone-mockup.png"} />
   </div>

   <ParagraphLeft as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Morbi dolor massa, euismod non nibh et, bibendum consectetur tellus. Donec sit amet dui et massa commodo scelerisque. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien. Curabitur viverra sagittis tristique. Donec nulla arcu, malesuada sit amet rhoncus et, euismod vitae elit.</ParagraphLeft>

   <Heading>colors & design</Heading>
   <Descriptor {...colorProps} >Function over form, without looking ugly.</Descriptor>  
   <ParagraphLeft as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Morbi dolor massa, euismod non nibh et, bibendum consectetur tellus. Donec sit amet dui et massa commodo scelerisque. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est.</ParagraphLeft>
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
