import type { NextPage } from 'next' 
import {ProjectBreadcrumb} from '../../components/project-breadcrumb'
import {EmberCMSPage} from '../../types'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import {Heading, ProjectTitle, ProjectSubtitle, DesignImage, HeaderContainer, Summary, LeftStandin,PaletteContainer, Descriptor, ParagraphLeft,CenterParagraph, ParagraphRight, ColorPalette, Color, Subheading,GradientText, ContentBlock} from '../../styles/projects/project-detail'
import { motion } from 'framer-motion'
import { EmberParse } from '../../lib/ember-react'
import { v4 as uuidv4 } from 'uuid';
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
       const response : any = await fetch(`https://ember-cms.vercel.app/api/collection/0e3cee28-04f4-4842-a7ec-2b71d09947a9/your-special-sound`)
       
       const page =await response.json()
       const PageContent = page.content.reduce((mapAccumulator:any, obj:any) => {
        mapAccumulator[obj.fieldName] = obj.data;
       return mapAccumulator;
     }, {});
console.log(page.content);
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
     mapAccumulator[obj.fieldName] = obj.data;
    return mapAccumulator;
  }, {});



console.log(PageContent)

const title = PageContent.title;
const subtitle =PageContent.subtitle;
const overviewHeading = PageContent.overview_heading;
const overviewDescriptor = PageContent.overview_descriptor;
const overviewContent = PageContent.overview_text;
const {frictionHeading, frictionDescriptor,frictionSignupText, frictionSecurityText, automateHeading, automationDescriptor,automateText,securitySubheading} = PageContent;

console.log(page)
    return(
        <React.Fragment>
            <Grid>
            <HeaderContainer>
                <ProjectTitle >{title}</ProjectTitle>
                <ProjectSubtitle {...colorProps}>{subtitle}</ProjectSubtitle> 
            </HeaderContainer>
            <Summary><strong>type:</strong><p>Personal project</p><strong>stack:</strong><p>React, Redux Toolkit, Firebase, Shopify Storefront API</p><strong>what i did:</strong><p>Everything</p><strong>site/demo:</strong><a href={"https://create.yourspecialsound.com"} className="inlineLink">View site</a></Summary>
            <div  style={{gridColumnStart:"1", gridColumnEnd:"13", width:"75%", height:"auto", margin:"0 auto"}}>
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
         return (<ParagraphLeft  as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }} key={idx}> 
         {node.children.map((el:any, index:number) =>{
          if (el.url) return <a key={el.url} href={el.url} target="_blank" rel="noreferrer" >{el.children[0].text}</a>
          if (el.type === "bulleted-list") {console.log("el is list"); return <p key={index}>Im a list</p>}
          return <span key={index}>{el.text}</span>
         })}</ParagraphLeft>)

         })
  

       
  }


<Heading>{frictionHeading}</Heading>
<Descriptor {...colorProps}>
       {

      frictionDescriptor.map((sentence:any) => {
  return <span className='block' key={uuidv4()}>
          {sentence.children.map((word:any) =>{
          if (word.underline) return <GradientText  {...colorProps} key={uuidv4()}>{word.text}</GradientText>
          else return word.text
          }
  )}
  </span>
})}

 </Descriptor>
 <ContentBlock>
  <div style={{width:"70%", backgroundColor:"#f6f4f4", alignSelf:"center"}}>
         <video  autoPlay  src="/720.mov" loop playsInline muted></video>
         </div>
         <div>

   { 
       frictionSignupText.map((node:any, idx:number) => {
        return (<ParagraphRight   as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }} key={idx}> 
        {node.children.map((el:any, index:number) =>{
         if (el.url) return <a key={el.url} href={el.url} target="_blank" rel="noreferrer" >{el.children[0].text}</a>
         return <><span key={index}>{el.text}</span><br></br></>
        })}</ParagraphRight>)

        })
       
         
         }
         </div>
       </ContentBlock>

       <ContentBlock>
 
         <div>
         <Subheading>{securitySubheading}</Subheading>
   { 
       frictionSecurityText.map((node:any, idx:number) => {
        return (<ParagraphRight as={motion.p} initial={{opacity:0}}  transition={{duration:2, type:"spring"}}   whileInView={{ opacity: 1 }}   viewport={{ once: false }} key={idx}> 
        {node.children.map((el:any, index:number) =>{
         if (el.url) return <a key={el.url} href={el.url} target="_blank" rel="noreferrer" >{el.children[0].text}</a>
         return <><span key={index}>{el.text}</span><br></br></>
        })}</ParagraphRight>)

        })
       
         
         }
         </div>
         <div style={{width:"70%"}}>
         <Image  src="/templates.gif" alt="" width={"1892"} height={"938"}></Image>
         </div>
       </ContentBlock>

       <Heading>{automateHeading}</Heading>
<Descriptor {...colorProps}>
       {

automationDescriptor.map((sentence:any) => {
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
       automateText.map((node:any, idx:number) => {
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
export default YourSpecialSoundPage
