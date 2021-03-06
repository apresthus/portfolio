/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { NextPage } from 'next'
import React from 'react'
import {motion} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';
import {Button} from '../components/button/Button'
import { ProjectCard } from '../components/project-card';

interface HypeTextProps {
  primaryColor?: string,
  secondaryColor?: string,
  children: any
  key: any,
}

const IntroTextStyle = styled.p<HypeTextProps> `
font-size: 2rem;
font-weight: bold;
text-align: center;
font-family: 'Poppins', sans-serif;
margin-top: 0;
margin-bottom: 0;
&:first-child{
  margin-top:0.6em ;
}

@media only screen and (min-width: 768px) {
  font-size: 4rem;
}

`;

const ProjectList = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
width: 100%;
padding: 1em;
gap: 0.5em;

@media only screen and (min-width: 768px) {
  padding: 5rem;
  gap: 1.5em;
}
`;

const Group = styled.div `
display: flex;
flex-direction: column;
gap: 1em;
`;

const HighligtedText = styled.span<HypeTextProps>`
background: linear-gradient(99.14deg, ${props => props.primaryColor} 2.65%, ${props => props.secondaryColor} 48.04%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
color: transparent;
margin-top: 0;
text-align: center;
margin-bottom: 0;

`;



export async function getStaticProps( ) {

    const response : any = await fetch(`http://localhost:8080/api/collection/0e3cee28-04f4-4842-a7ec-2b71d09947a9/home`)
    
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

  let {emberAboutText, emberAboutHeading,emberAboutStack, emberAboutImage, emberHypeText, yssHypeText, yssAboutText, yssStack, yssAboutImage, yssAboutHeading, yssFulfilImage, yssFulfilHypeText,yssFulfilStack, yssFulfilAboutText } = PageContent;
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
         about.map((node:any, index:number) => {
         return (<p key={index} className={styles.hello__about}>{node.children[0].text}</p>)

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
<ProjectList  id="projects" key={uuidv4()}  style={{textAlign:"center"}}>

   


 
   
<li>
  { 
 
      emberHypeText.map((sentence:any) =>{

      return  <IntroTextStyle key={uuidv4()}>
                  {       
                        sentence.children.map((word:any) =>{

                                if (word.underline) return <HighligtedText  primaryColor={'#FFD319'} secondaryColor={'#FF008A'} key={uuidv4()}>{word.text}</HighligtedText>
                                else return <motion.span  initial={{opacity:.25}}  transition={{duration:1.25, delay:0.3, type:"cubic-bezier"}}   whileInView={{ opacity: 1 }}   viewport={{ once: true }} key={uuidv4()}>{word.text}</motion.span>
                                }
                            )
                    } 
                        
     </IntroTextStyle>
       
      })


    
}
      
<ProjectCard   onClick={() => () => router.push("/projects/ember-cms")} primaryColor={'#FFD319'} secondaryColor={'#FF008A'} src={emberAboutImage} alt={""} classes={"card"} key={uuidv4()}>
    <Group>
    <ProjectCard.Title>{emberAboutHeading}</ProjectCard.Title>
    <ProjectCard.Intro>{emberAboutText}</ProjectCard.Intro>
    <ProjectCard.Stack>{emberAboutStack}</ProjectCard.Stack>
    <ProjectCard.Button onClick={() => router.push("/projects/ember-cms")} className="project-button">{"View Project" }</ProjectCard.Button>
    </Group>
    <ProjectCard.ProjectPreview><img alt="" src={emberAboutImage} /></ProjectCard.ProjectPreview>

</ProjectCard>
</li>
<li>
{ 
      yssHypeText.map((sentence:any) =>{

      return  <IntroTextStyle key={uuidv4()}>
                  {       
                        sentence.children.map((word:any) =>{

                                if (word.underline) return <HighligtedText  primaryColor={'#5F00BA'} secondaryColor={'#FF008A'} key={uuidv4()}>{word.text}</HighligtedText>
                                else return <motion.span  initial={{opacity:.25}}  transition={{duration:1.25, delay:0.3, type:"cubic-bezier"}}   whileInView={{ opacity: 1 }}   viewport={{ once: true }} key={uuidv4()}>{word.text}</motion.span>
                                }
                            )
                    } 
                        
     </IntroTextStyle>
       
      })


    
}
      
<ProjectCard direction={'reverse'}  onClick={() => () => router.push("/projects/your-special-sound")} primaryColor={'#FFD319'} secondaryColor={'#FF008A'} src={yssAboutImage} alt={""} classes={"card"} key={uuidv4()}>
    <Group>
    <ProjectCard.Title>{yssAboutHeading}</ProjectCard.Title>
    <ProjectCard.Intro>{yssAboutText}</ProjectCard.Intro>
    <ProjectCard.Stack>{yssStack}</ProjectCard.Stack>
    <ProjectCard.Button onClick={() => router.push("/projects/ember-cms")} className="project-button">{"View Project" }</ProjectCard.Button>
    </Group>
    <ProjectCard.ProjectPreview><img alt="" src={yssAboutImage} /></ProjectCard.ProjectPreview>

</ProjectCard>

</li>
<li>
{ 
      yssFulfilHypeText.map((sentence:any) =>{

      return  <IntroTextStyle key={uuidv4()}>
                  {       
                        sentence.children.map((word:any) =>{

                                if (word.underline) return <HighligtedText  primaryColor={'#0EA44A'} secondaryColor={'#07B9E8'} key={uuidv4()}>{word.text}</HighligtedText>
                                else return <motion.span  initial={{opacity:.25}}  transition={{duration:1.25, delay:0.3, type:"cubic-bezier"}}   whileInView={{ opacity: 1 }}   viewport={{ once: true }} key={uuidv4()}>{word.text}</motion.span>
                                }
                            )
                    } 
                        
     </IntroTextStyle>
       
      })


    
}
      
<ProjectCard direction={''}  onClick={() => () => router.push("/projects/yss-fulfilment-portal")} primaryColor={'#0EA44A'} secondaryColor={'#07B9E8'} src={yssFulfilImage} alt={""} classes={"card"} key={uuidv4()}>
    <Group>
    <ProjectCard.Title>{yssAboutHeading}</ProjectCard.Title>
    <ProjectCard.Intro>{yssFulfilAboutText}</ProjectCard.Intro>
    <ProjectCard.Stack>{yssFulfilStack }</ProjectCard.Stack>
    <ProjectCard.Button onClick={() => router.push("/projects/ember-cms")} className="project-button">{"View Project" }</ProjectCard.Button>
    </Group>
    <ProjectCard.ProjectPreview><img alt="" src={yssFulfilImage} /></ProjectCard.ProjectPreview>

</ProjectCard>


</li>
  </ProjectList>
  </section>

      </main>

  
  )
}

export default Home
