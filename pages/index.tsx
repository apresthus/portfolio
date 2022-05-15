import { Card } from './components/card'
import {Hello} from './components/hello'
import {Divider} from './components/divider'
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { v4 as uuidv4 } from 'uuid';


interface HypeTextProps {
  primaryColor?: string,
  secondaryColor?: string,
  children?: JSX.Element;
  key: any,
}

const IntroTextStyle = styled.p<HypeTextProps> `
font-size: 3rem;
font-weight: bold;
font-family: 'Poppins', sans-serif;
margin-top: 0;
margin-bottom: 0;

`;

const HighligtedText = styled.span<HypeTextProps>`
background: linear-gradient(99.14deg, ${props => props.primaryColor} 2.65%, ${props => props.secondaryColor} 48.04%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-top: 0;
margin-bottom: 0;

`;

export async function getStaticProps( ) {

    const response : any = await fetch(`http://localhost:8080/api/page/0e3cee28-04f4-4842-a7ec-2b71d09947a9/home`)
    
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
  const [ref, inView] = useInView()
  const animation = useAnimation()
const emberData = JSON.parse(page.content[0].data);



  return (
 
  

      <main className={styles.mainContainer}>

      <Hello/>

  {emberData.map((item:any, index:number) => {

 const currentSlug = item.title.toString().replace(/\s+/g, '-').toLowerCase();

    return( 
    <React.Fragment key={uuidv4()}>
     <div id="projects" key={uuidv4()}  style={{textAlign:"center", marginTop:"2em"}}>
    {item.hypeText.map((sentence: any, idx:number) => {
      return(
        <IntroTextStyle key={uuidv4()}>
        {
        sentence.map((el:any, _idx:number) => {
          if (el.type === "highlight") return <HighligtedText primaryColor={item.primaryColor} secondaryColor={item.secondaryColor} key={uuidv4()}>{el.text}</HighligtedText>
          else if (el.type === "text") return <motion.span  key={uuidv4()}>{el.text}</motion.span>
        })
    
        }
        </IntroTextStyle>
      )
    })}
     </div>
    <Card onClick={() => () => router.push("/projects/"+currentSlug)} primaryColor={item.primaryColor} secondaryColor={item.secondaryColor} src={item.imageurl} alt={""} classes={"card"} key={uuidv4()}>
    <Card.Title classes={"card__title"}>{item.title}</Card.Title>
    <Card.Button onClick={() => router.push("/projects/"+currentSlug)} classes={"card__title"}>{"View Project" }</Card.Button>
    </Card>
    <Divider color={"#000505"} height={undefined}/>
  </React.Fragment>
    )
  })}
   

      </main>

  
  )
}

export default Home
