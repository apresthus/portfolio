/* eslint-disable @next/next/no-img-element */
import { Card } from '../components/card'
import {Divider} from '../components/divider'
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { NextPage } from 'next'
import React from 'react'
import {motion} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';
import {Button} from '../components/button/Button'
import dummyData from '../components/dummyData.json'
import { ProjectCard } from '../components/project-card'
import { ProjectPreview } from '../components/project-card/styles/project-card'

interface HypeTextProps {
  primaryColor?: string,
  secondaryColor?: string,
  children?: JSX.Element;
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
width: 100%;
padding: 2em;
gap: 1em;

@media only screen and (min-width: 768px) {
  padding: 5rem;
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

const PageContent = content.reduce((mapAccumulator:any, obj:any) => {
    // either one of the following syntax works
     mapAccumulator[obj.fieldName] = obj.data;
    return mapAccumulator;
  }, new Map());

  const characterAnimation = {
    hidden: {
      opacity: 0,
    
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
 


const {jobtitle, myName, about} = PageContent;

  return (
 
      <main className={styles.mainContainer}>

        <div className={styles.hello__container}>
          <p className={styles.hello__jobtitle}>{jobtitle}</p>
          <h3 className={styles.hello__name}>{myName}</h3>
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
      
<ProjectList>
  {dummyData.map((item:any, index:number) => {

 const currentSlug = item.title.toString().replace(/\s+/g, '-').toLowerCase();

    return( 
    <React.Fragment key={uuidv4()}>
     <div id="projects" key={uuidv4()}  style={{textAlign:"center"}}>
    {item.hypeText.map((sentence: any) => {
      return(
        <IntroTextStyle key={uuidv4()}>
        {
        sentence.map((el:any, _idx:number) => {
          if (el.type === "highlight") return <HighligtedText primaryColor={item.primaryColor} secondaryColor={item.secondaryColor} key={uuidv4()}>{el.text}</HighligtedText>
          else if (el.type === "text") return <motion.span  initial={{opacity:.25}}  transition={{duration:1.25, delay:0.3, type:"cubic-bezier"}}   whileInView={{ opacity: 1 }}   viewport={{ once: true }} key={uuidv4()}>{el.text}</motion.span>
        })
    
        }
        </IntroTextStyle>
      )
    })}
     </div>
    <ProjectCard direction={index % 2? 'reverse': ''}  onClick={() => () => router.push("/projects/"+currentSlug)} primaryColor={item.primaryColor} secondaryColor={item.secondaryColor} src={item.imageurl} alt={""} classes={"card"} key={uuidv4()}>
    <Group>
    <ProjectCard.Title classes={"card__title"}>{item.title}</ProjectCard.Title>
    <ProjectCard.Intro >{item.intro}</ProjectCard.Intro>
    <ProjectCard.Stack>Next.Js Firebase GraphQL Typescript Slate.js</ProjectCard.Stack>
    <ProjectCard.Button onClick={() => router.push("/projects/"+currentSlug)} className="project-button">{"View Project" }</ProjectCard.Button>
    </Group>
    <ProjectCard.ProjectPreview><img alt="" src={'/embertest.png'} /></ProjectCard.ProjectPreview>

    </ProjectCard>

  </React.Fragment>
    )
  })}
  </ProjectList>
   

      </main>

  
  )
}

export default Home
