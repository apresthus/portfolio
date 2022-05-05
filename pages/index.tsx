import { Card } from './components/card'
import {Hello} from './components/hello'
import styles from '../styles/Home.module.scss'
import dummyData from './components/dummyData.json'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { NextPage } from 'next'

interface StyledProps {
  primaryColor: string,
  secondaryColor: string,
  key: any
}

const IntroTextStyle = styled.p<StyledProps> `
font-size: 3rem;
font-weight: bold;
font-family: 'Poppins', sans-serif;
margin-top: 0;
margin-bottom: 0;
`;

const HighligtedText = styled.span<StyledProps>`
background: linear-gradient(99.14deg, ${props => props.primaryColor} 2.65%, ${props => props.secondaryColor} 48.04%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-top: 0;
margin-bottom: 0;
`;

const Home : NextPage = () => {
  const router = useRouter()


  return (
    <div>
  

      <main className={styles.mainContainer}>

      <Hello/>

  {dummyData.map((item, index) => {

 const currentSlug = item.title.toString().replace(/\s+/g, '-').toLowerCase();

    return( 
     <>
     <div id={"case-studies"} style={{textAlign:"center", marginTop:"2em"}}>
    {item.hypeText.map((sentence, idx) => {
      return(
        <IntroTextStyle key={idx}>
        {
        sentence.map((el, _idx) => {
          if (el.type === "highlight") return <HighligtedText primaryColor={item.primaryColor} secondaryColor={item.secondaryColor} key={_idx}>{el.text}</HighligtedText>
          else if (el.type === "text") return el.text
        })
    
        }
        </IntroTextStyle>
      )
    })}
     </div>
    <Card onClick={() => () => router.push("/case-studies/"+currentSlug)} primaryColor={item.primaryColor} secondaryColor={item.secondaryColor} src={item.imageurl} alt={""} classes={"card"} key={index}>
    <Card.Title classes={"card__title"}>{item.title}</Card.Title>
    <Card.Button onClick={() => router.push("/case-studies/"+currentSlug)} classes={"card__title"}>{"View Case Study"}</Card.Button>
    </Card>
    </>
    )
  })}
   

      </main>

    </div>
  )
}

export default Home
