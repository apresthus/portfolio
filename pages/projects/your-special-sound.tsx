import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {ProjectHeader} from '../components/project-header/'
import {ProjectBreadcrumb} from '../components/project-breadcrumb'
import {EmberCMSPage} from '../../types'
import  styles from '../../styles/projects/yourspecialsound.module.scss'
import Image from 'next/image'
import React from 'react'


interface ProjectProps {
    page:EmberCMSPage,
    pageTemplate:EmberCMSPage,
     notFound:Boolean
   }
   
const YourSpecialSoundPage: NextPage<ProjectProps> = ({page}) => {
//const {content} = page;
    return(
        <React.Fragment>
            <div className={styles.header__container}>
                <h1 className={styles.header__projecttitle}>Your Special Sound</h1>
                <h2 className={styles.header__projectsubtitle}>personalized wall art from sound</h2>
            </div>
        
        <ProjectBreadcrumb next={"YSS Fulfillment Portal"} previous={"Ember CMS"} />
        </React.Fragment>
    )

}
export default YourSpecialSoundPage
