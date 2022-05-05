import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {CaseStudyHeader} from '../components/case-study-header'
import {CaseStudyBreadcrumb} from '../components/case-study-breadcrumb'

const GetStaticProps = async () => {
  const data = await fetch('https://api.thedot.co/case-studies')
  const caseStudies = await data.json()
  return {
    props: {
      caseStudies
    }
  }
}

const CaseStudyPage: NextPage = () => {

  interface CaseStudyProps {
    id: string,
    children: any
  }
  return (
    <>
      <CaseStudyHeader primaryColor={"#FF3C11A6"} secondaryColor={"#FF005CA6"} src={"/ember.png"}>
        <h1 style={{margin:"0"}}>Ember CMS</h1>
        <p  style={{margin:"0"}}>developer oriented headless CMS</p>
      </CaseStudyHeader>
      <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <h2>What I did & project overview:</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet elit ut justo interdum tincidunt et nec nunc. Sed tellus diam, vehicula non sapien et, convallis aliquet tortor. Sed elit purus, porttitor vel commodo vitae, rhoncus vitae felis. Quisque vel enim rhoncus turpis imperdiet commodo nec in eros. Phasellus blandit bibendum luctus. Sed tempor quis augue sed viverra. Nulla molestie vel tortor vitae malesuada.

       Etiam in eros sed ipsum congue tincidunt. Proin laoreet tincidunt mollis. Aliquam eget bibendum turpis, a faucibus neque. Quisque tempus accumsan magna, at viverra nulla fringilla ut. Donec vitae lectus in sapien tempor auctor. Vivamus eget metus mauris. Fusce quis tortor mauris. Phasellus auctor sagittis mauris at sodales. Aliquam erat volutpat. Donec posuere nibh at gravida placerat. Praesent neque justo, volutpat quis urna ut, consectetur cursus ex. Donec porta, nisi finibus tristique iaculis, ipsum quam semper sem, non consequat massa ex vel ligula.
       
       Aliquam ac mauris gravida, aliquam metus quis, feugiat libero. Morbi vehicula risus at mi molestie posuere. Vestibulum interdum imperdiet dui, id eleifend ipsum. Phasellus quis nibh ultrices, feugiat mauris in, faucibus justo. Proin commodo felis ac sagittis euismod. Morbi et tincidunt nisl, quis commodo lacus. Nulla fringilla erat ac ligula iaculis euismod. Sed nec aliquet nulla. Ut enim nisi, viverra nec turpis condimentum, dapibus tincidunt nisl. Vivamus vel hendrerit libero. Nam auctor bibendum massa. Curabitur vel tincidunt dolor, in eleifend neque. Ut sollicitudin auctor pretium. Phasellus euismod massa neque, quis hendrerit nibh accumsan imperdiet.
       
       Sed ut sapien risus. Cras sit amet ipsum arcu. Curabitur enim metus, ullamcorper eu dui eu, convallis euismod lorem. Fusce at dui ut leo malesuada consectetur sit amet id metus. Morbi efficitur diam ligula, sed porta mauris sodales at. Aenean ullamcorper lacinia pulvinar. Mauris ac sem at est porta consectetur. Cras auctor purus lectus, lobortis aliquet augue fermentum vitae.
       
       Nullam sollicitudin ipsum quis elit porta, a commodo tellus posuere. Nulla mi est, interdum nec vestibulum ut, vehicula sed felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ut aliquam massa. Phasellus iaculis molestie nibh. Proin malesuada tortor et efficitur rutrum. Nulla felis nibh, lacinia ac risus sed, mollis vulputate magna. Phasellus a justo eget erat volutpat congue. Pellentesque lobortis luctus rutrum.</p>
       </div>
       <CaseStudyBreadcrumb next={"Your Special Sound"} previous={"Your Special Sound"} />
       </>
  )
}

export default CaseStudyPage
