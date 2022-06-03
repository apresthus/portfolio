import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {ProjectHeader} from '../../components/project-header/'
import {ProjectBreadcrumb} from '../../components/project-breadcrumb'
import {EmberCMSPage} from '../../types'
import  styles from '../../styles/projects/yourspecialsound.module.scss'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'


interface ProjectProps {
    page:EmberCMSPage,
    pageTemplate:EmberCMSPage,
     notFound:Boolean
   }

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-gap: 2em;
justify-items: center;
`;

const FeatureBox = styled.section`
background: radial-gradient(120.65% 251.65% at -2.12% 5.59%, #FF008A 35.42%, #5F00BA 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
border-radius: 40px;
min-height: 20em;
padding: 2em;
color: white;
font-weight: 400;
grid-column-start: 3;
grid-column-end: 11;

*::selection {
  color: #fff;
  background:#000 !important;
  -webkit-text-fill-color: white;
}

`;
   
const YourSpecialSoundPage: NextPage<ProjectProps> = ({page}) => {
//const {content} = page;
    return(
        <React.Fragment>
            <Grid>
            <div className={styles.header__container}>
                <h1 className={styles.header__projecttitle}>Your Special Sound</h1>
                <h2 className={styles.header__projectsubtitle}>personalized wall art from sound</h2>
            </div>
            <FeatureBox>
            <h3 className={styles.featurebox__featurestitle}>Features:</h3>
            <ul>
                <li><h3>Powerful Design Tools:</h3><p>Built on top of HTML5 Canvas for speed with an easy to use UI to empower customers to feel confident in their ability to create.</p></li>
                <li><h3>Template System for ease of use:</h3><p>The customer can start designing from 6 starter templates so they can create something beautiful & unique without being a designer.</p></li>
                <li><h3>Integrates with the Shopify Storefront API:</h3><p>Pulls products, variants & descriptions from Shopify. I also built a custom shopping cart solution.</p></li>
                
            </ul>
            <h3 className={styles.featurebox__stacktitle}>Stack used:</h3>
            <ul>
                <li>React</li>
                <li>Redux Toolkit</li>
                <li>Google Firebase</li>
                <li>Shopify Storefront API</li>
                
            </ul>
            <h3 className={styles.featurebox__whatididtitle}>What I did:</h3>
            <div><strong>Everything!</strong>
            <p>Ideation, design and development</p></div>
            </FeatureBox>
            <h2 className={styles.project__heading}>Project overview & goals</h2>
            <p className={styles.project__p}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
            <p className={styles.project__p}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
            <h2 className={styles.project__heading}>Design & Colors </h2>
            <p className={styles.project__p}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
            <p className={styles.project__p}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
            <h2 className={styles.project__heading}>Typography</h2>
            </Grid>
        
        
        <ProjectBreadcrumb next={"YSS Fulfillment Portal"} previous={"Ember CMS"} />
        </React.Fragment>
    )

}
export default YourSpecialSoundPage
