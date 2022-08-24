import type { NextPage } from 'next' 
import {ProjectBreadcrumb} from '../../components/project-breadcrumb'
import {EmberCMSPage} from '../../types'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import {Heading, ProjectTitle, ProjectSubtitle, DesignImage, HeaderContainer, Summary, LeftStandin,PaletteContainer, Descriptor, ParagraphLeft,CenterParagraph, ParagraphRight, ColorPalette, Color, GradientText, NumberedList, ListItem, H3, UnorderedList} from '../../styles/projects/project-detail'
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head'
interface ProjectProps {
    page:EmberCMSPage,
    pageTemplate:EmberCMSPage,
     notFound:Boolean
   }

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-auto-rows: minmax(min-content, max-content);
column-gap: 2rem;
row-gap: 1rem;
justify-items:start;
margin-bottom: 1.25rem;
`;



interface ProjectProps {
    page:EmberCMSPage,
    pageTemplate:EmberCMSPage,
     notFound:Boolean
   }
   
   export async function getStaticProps({params}:any ) {
 
  console.log(params)
       const response : any = await fetch(`https://ember-cms.vercel.app/api/collection/0e3cee28-04f4-4842-a7ec-2b71d09947a9/ember-cms`)
       
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
const {stack_heading, stack_descriptor, stack_content, ember_test, media_heading, media_descriptor, media_text} = PageContent;

console.log(PageContent)
console.log(PageContent.entries())
const title = PageContent.title;
const subtitle =PageContent.subtitle;
const overviewHeading = PageContent.overview_heading;
const overviewDescriptor = PageContent.overview_descriptor;
const overviewContent = PageContent.overview_content;

console.log(page)
    return(
        <React.Fragment>
          <Head><title>Ember CMS</title>
          <meta name="description" content="My custom CMS that I made from scratch" />
          </Head>
            <Grid>
            <HeaderContainer>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectSubtitle {...colorProps}>{subtitle}</ProjectSubtitle> 
            </HeaderContainer>
            <Summary><strong>type:</strong><p>Personal project</p><strong>stack:</strong><p>Next.js, Firebase, GraphQL (Apollo server), Typescript</p><strong>what i did:</strong><p>Everything</p></Summary>
     
            <div  style={{gridColumnStart:"1", gridColumnEnd:"13", width:"75%", height:"auto", margin:"0 auto"}}>
<Image src={ember_test} alt="Your special Sound" width="2051px" height="1133px"  />
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
          if (node.type === "bulleted-list") {console.log("el is list"); return <UnorderedList key={idx}>{node.children.map((item:any, index:number) => {return <ListItem key={index}>{item.children[0].text}</ListItem>})}</UnorderedList>}
          if (node.type === "numbered-list") {console.log("el is list"); return <NumberedList key={idx}> {node.children.map((item:any, index:number) => {return <ListItem key={index}>{item.children[0].text}</ListItem>})}</NumberedList>}

         return (<ParagraphLeft  as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }} key={idx}> 
         {node.children.map((el:any, index:number) =>{
          if (el.url) return <a key={el.url} href={el.url} target="_blank" rel="noreferrer" >{el.children[0].text}</a>

          return <span key={index}>{el.text}</span>
         })}</ParagraphLeft>)

         })
  

       
  }

<Heading>{stack_heading}</Heading>
<Descriptor {...colorProps}>       {

stack_descriptor.map((sentence:any) => {
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
   
   stack_content.map((node:any, idx:number) => {
   return (<ParagraphLeft  as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }} key={idx}> 
   {node.children.map((el:any, index:number) =>{
    console.log(el)
    if (el.url) return <a key={el.url} href={el.url} target="_blank" rel="noreferrer" >{el.children[0].text}</a>
    if (el.type === "image") {console.log("el is image: ", el.url); return <img key={index} src={el.url} alt="" />}
    if (el.type === "bulleted-list") {console.log("el is list"); return <p key={index}>Im a list</p>}
    return <span key={index}>{el.text}</span>
   })}</ParagraphLeft>)

   })


 
}

<Heading>{media_heading}</Heading>
<Descriptor {...colorProps}>       {

media_descriptor.map((sentence:any) => {
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
   
   media_text.map((node:any, idx:number) => {

    if (node.type === "bulleted-list") {console.log("el is list"); return <p key={idx}>Im a list</p>}
    if (node.type === "heading-three")  {return <H3 key={idx}>{node.children[0].text}</H3>}
    if (node.type === "image")  {console.log("el is image: ", node.url); return        <div key={node.url}  style={{gridColumnStart:"3", gridColumnEnd:"13", width:"45%", height:"auto", paddingTop:"1em", paddingBottom:"1em"}}>
    <Image src={node.url} alt="Your special Sound" width="2051px" height="1133px"  />
    </div>}

   return (<ParagraphLeft  as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }} key={idx}> 
   {node.children.map((el:any, index:number) =>{
    if (el.url) return <a key={el.url} href={el.url} target="_blank" rel="noreferrer" >{el.children[0].text}</a>
    return <span key={index}>{el.text}</span>
   })}</ParagraphLeft>)

   })


 
}
  
            </Grid>
       
        
        <ProjectBreadcrumb next={"YSS Fulfillment Portal"} previous={"Ember CMS"} />
        </React.Fragment>
    )

}
export default EmberCMSPage
