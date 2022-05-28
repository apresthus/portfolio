import { Card } from './components/card'
import {Divider} from './components/divider'
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { v4 as uuidv4 } from 'uuid';
import {Button} from './components/button/Button'


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
&:first-child{
  margin-top:0.6em ;
}

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

        <div className={styles.hello__container}>
          <p className={styles.hello__jobtitle}>Front end developer</p>
          <h3 className={styles.hello__name}>Alexander Presthus</h3>
          <p className={styles.hello__about}>Morbi arcu justo, ornare eu ultricies id, tempor non mauris. Suspendisse feugiat dapibus sagittis. Sed ut lorem at ex ornare tempus sed sed dui. Vestibulum lectus elit, tempor dictum mollis sed, ornare vitae neque. Pellentesque condimentum mauris massa, eu porttitor dui tempor et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac elit quis magna vulputate laoreet nec at lorem. Cras est enim, luctus eget quam finibus, eleifend commodo lacus. Suspendisse ac nisl eleifend, consectetur enim nec, dapibus purus. Quisque ut nulla lorem. Sed non pulvinar dui. Sed accumsan massa sit amet nisi egestas, ut placerat dolor auctor. Maecenas volutpat neque nec magna egestas blandit.</p>
          <div className={styles.hello__buttons}><Button classes={null}>Download Resume</Button><Button classes={null}>Github</Button><Button classes={null}>LinkedIn</Button></div>
          <p className={styles.hello__work}>scroll to see my latest work</p>
          <svg width="18" height="53" viewBox="0 0 18 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 53L17.6603 38L0.339744 38L9 53ZM7.5 -6.55671e-08L7.5 39.5L10.5 39.5L10.5 6.55671e-08L7.5 -6.55671e-08Z" fill="black"/>
          </svg>

        </div>
      

  {emberData.map((item:any, index:number) => {

 const currentSlug = item.title.toString().replace(/\s+/g, '-').toLowerCase();

    return( 
    <React.Fragment key={uuidv4()}>
     <div id="projects" key={uuidv4()}  style={{textAlign:"center"}}>
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
