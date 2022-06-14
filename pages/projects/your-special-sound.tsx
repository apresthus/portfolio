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
interface ColumnProps {
    children?: React.ReactNode,
    className?: string,
    start: number,
    end: number,
}
interface RowProps {
    children?: React.ReactNode,
    className?: string,
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
column-gap: 1.25rem;
row-gap: 1rem;
grid-auto-rows : minmax(min-content, max-content);  
justify-items:start;
grid-auto-flow: row;
`;

const FeatureBox = styled.section`
background: radial-gradient(120.65% 251.65% at -2.12% 5.59%, #FF008A 35.42%, #5F00BA 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
border-radius: 40px;
min-height: 20em;
padding: 2em;
color: white;
font-weight: 400;
grid-column-start: 2;
grid-column-end: 12;

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
    <h2 className={styles.project__heading}>project purpose & goals</h2>
    <p className={styles.project__descriptor}>Powerful & easy for the customer, automated & maintainable for the business.</p>
   <p className={styles.project__p_left}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Morbi dolor massa, euismod non nibh et, bibendum consectetur tellus. Donec sit amet dui et massa commodo scelerisque. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien. Curabitur viverra sagittis tristique. Donec nulla arcu, malesuada sit amet rhoncus et, euismod vitae elit.
Praesent sed auctor diam, vitae placerat est. Duis finibus ut leo eget viverra. Nunc sollicitudin sollicitudin eros in dapibus. Phasellus eu libero at lectus molestie gravida. Etiam erat augue, eleifend ut dapibus vitae, commodo eu leo. Pellentesque semper turpis eu laoreet suscipit. In bibendum felis sem, nec semper arcu laoreet vitae.</p>
   <p className={styles.project__p_right}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan feugiat nunc eu commodo. Morbi dolor massa, euismod non nibh et, bibendum consectetur tellus. Donec sit amet dui et massa commodo scelerisque. Etiam condimentum vehicula vehicula. Praesent sit amet nisl est. Nullam quis vestibulum nibh. Donec vitae nulla fermentum, blandit turpis a, vulputate nulla. Duis egestas luctus accumsan. Praesent feugiat malesuada mauris, eget vehicula massa pellentesque at. Etiam at laoreet lacus. Donec turpis libero, ultrices ut pellentesque eu, feugiat eget dui. Mauris et condimentum sapien. Curabitur viverra sagittis tristique. Donec nulla arcu, malesuada sit amet rhoncus et, euismod vitae elit.</p>
   <h2 className={styles.project__heading}>colors & design</h2>
   <Image alt="" src="/yss.png" width="1195px" height="716px" layout='responsive'/>     
        </Grid>
        
        
        <ProjectBreadcrumb next={"YSS Fulfillment Portal"} previous={"Ember CMS"} />
        </React.Fragment>
    )

}
export default YourSpecialSoundPage
