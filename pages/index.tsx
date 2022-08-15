/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import React from 'react'
import {motion} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';
import {Button} from '../components/button/Button'
import { ProjectSection } from '../components/project-section'
import Image from 'next/image'
import { IntroTextStyle, ProjectList, HighlightedText } from '../styles/home/home'





export async function getStaticProps( ) {

    const response : any = await fetch(`https://ember-cms.vercel.app/api/collection/0e3cee28-04f4-4842-a7ec-2b71d09947a9/home`)
    
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



interface HomeProps {
page: any
}

const Home : NextPage <HomeProps> = ({page}) => {
  const router = useRouter()


  const {content} = page;
console.log(content)
const PageContent = content.reduce((mapAccumulator:any, obj:any) => {
    // either one of the following syntax works
     mapAccumulator[obj.fieldName] = obj.data;
    return mapAccumulator;
  }, new Map());

  let {emberAboutText, emberAboutHeading,emberAboutStack, emberHypeText, yssHypeText, yssAboutText, yssStack,  yssAboutHeading, yssFulfilTitle, yssFulfilHypeText,yssFulfilStack, yssFulfilAboutText } = PageContent;
  emberAboutText = emberAboutText[0].children[0].text;
  yssAboutText = yssAboutText[0].children[0].text;
  yssFulfilAboutText = yssFulfilAboutText[0].children[0].text;
  


const {jobtitle, myName, about} = PageContent;


  return (
 
      <main className={styles.mainContainer}>
      <section>
        <div className={styles.hello__container}>
          <p className={styles.hello__jobtitle}>{jobtitle}</p>
          <h2 className={styles.hello__name}>{myName}</h2>
         { 
         about.map((node:any, idx:number) => {
         return (<p key={idx} className={styles.hello__about}>{node.children.map((el:any, index:number) =>{
          if (el.url) return <a key={el.url} href={el.url} >{el.children[0].text}</a>
          return <span key={index}>{el.text}</span>
         })}</p>)

         })
       
         
         }
          <div className={styles.hello__buttons}><Button classes={null}>Download Resume</Button><Button classes={null}>Github</Button><Button classes={null}>LinkedIn</Button></div>
         <div className={styles.hello__workContainer}>
         <p className={styles.hello__work}>scroll to see my latest work</p>
          <svg style={{margin:'0 auto'}} width="18" height="53" viewBox="0 0 18 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 53L17.6603 38L0.339744 38L9 53ZM7.5 -6.55671e-08L7.5 39.5L10.5 39.5L10.5 6.55671e-08L7.5 -6.55671e-08Z" fill="black"/>
          </svg>
         </div>


        </div>
        </section>
        <section>
<ProjectList  id="projects">

<li>

      
<ProjectSection>
    <ProjectSection.Title>{emberAboutHeading}</ProjectSection.Title>
    { 
 
 emberHypeText.map((sentence:any) =>{

 return  <IntroTextStyle key={uuidv4()}>
             {       
                   sentence.children.map((word:any) =>{

                           if (word.underline) return <HighlightedText  primaryColor={'#FFD319'} secondaryColor={'#FF008A'} key={uuidv4()}>{word.text}</HighlightedText>
                           else return <motion.span  initial={{opacity:.25}}  transition={{duration:1.25, delay:0.3, type:"cubic-bezier"}}   whileInView={{ opacity: 1 }}   viewport={{ once: true }} key={uuidv4()}>{word.text}</motion.span>
                           }
                       )
               } 
                   
</IntroTextStyle>
  
 })



}
    <ProjectSection.Intro>{emberAboutText}</ProjectSection.Intro>
    <ProjectSection.Stack>{emberAboutStack}</ProjectSection.Stack>
   <div className={styles.imageContainer}> <Image  alt="" width="2516" height="587" src="/testing.png"/></div>
    <ProjectSection.Button onClick={() => router.push("/projects/ember-cms")} className="project-button">{"View Project" }</ProjectSection.Button>
</ProjectSection>
</li>
<li>

      
<ProjectSection dark>
    <ProjectSection.Title dark>{yssAboutHeading}</ProjectSection.Title>
    { 
      yssHypeText.map((sentence:any) =>{

      return  <IntroTextStyle key={uuidv4()}>
                  {       
                        sentence.children.map((word:any) =>{

                                if (word.underline) return <HighlightedText  primaryColor={'#DA8CFF'} secondaryColor={'#FF008A'} key={uuidv4()}>{word.text}</HighlightedText>
                                else return <motion.span  initial={{opacity:.25}}  transition={{duration:1.25, delay:0.3, type:"cubic-bezier"}}   whileInView={{ opacity: 1 }}   viewport={{ once: true }} key={uuidv4()}>{word.text}</motion.span>
                                }
                            )
                    } 
                        
     </IntroTextStyle>
       
      })


    
}    
    <ProjectSection.Intro>{yssAboutText}</ProjectSection.Intro>
    <ProjectSection.Stack>{yssStack}</ProjectSection.Stack>
    <div className={styles.imageContainer}> <Image  alt="" width="1308" height="788" src="/yss.png"/></div>
    <ProjectSection.Button onClick={() => router.push("/projects/your-special-sound")} className="project-button">{"View Project" }</ProjectSection.Button>
  


</ProjectSection>

</li>
<li>

      
<ProjectSection>
    
    <ProjectSection.Title>{yssFulfilTitle}</ProjectSection.Title>
    { 
      yssFulfilHypeText.map((sentence:any) =>{

      return  <IntroTextStyle key={uuidv4()}>
                  {       
                        sentence.children.map((word:any) =>{

                                if (word.underline) return <HighlightedText  primaryColor={'#0EA44A'} secondaryColor={'#07B9E8'} key={uuidv4()}>{word.text}</HighlightedText>
                                else return <motion.span  initial={{opacity:.25}}  transition={{duration:1.25, delay:0.3, type:"cubic-bezier"}}   whileInView={{ opacity: 1 }}   viewport={{ once: true }} key={uuidv4()}>{word.text}</motion.span>
                                }
                            )
                    } 
                        
     </IntroTextStyle>
       
      })


    
}
    <ProjectSection.Intro>{yssFulfilAboutText}</ProjectSection.Intro>
    <ProjectSection.Stack>{yssFulfilStack }</ProjectSection.Stack>
    <div className={styles.imageContainer}> <Image  alt="" width="3248px" height="1590px" src="/yssTest.png"/></div>
    <ProjectSection.Button onClick={() => router.push("/projects/yss-fulfilment-portal")} className="project-button">{"View Project" }</ProjectSection.Button>
   
  

</ProjectSection>


</li>
  </ProjectList>
  </section>

      </main>

  
  )
}

export default Home
