import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {ProjectHeader} from '../../components/project-header/'
import {ProjectBreadcrumb} from '../../components/project-breadcrumb'
import {EmberCMSPage} from '../../types'
import Image from 'next/image'

interface ProjectProps {
  page:EmberCMSPage,
  pageTemplate:EmberCMSPage,
   notFound:Boolean
 }
 
 export async function getStaticProps({params}:any ) {
   const { slug } = params;
console.log(params)
     const response : any = await fetch(`http://localhost:8080/api/page/0e3cee28-04f4-4842-a7ec-2b71d09947a9/${slug}`)
     
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

 export async function getStaticPaths() {
   return {
     paths: [],
     fallback: true
   }
 }
const ProjectPage: NextPage<ProjectProps> = ({page}) => {

  interface ProjectProps {
    id: string,
    children: any
  }

  const Element = (props: any) => {
    
    const  element  = props.element;
    
    const {children} = props

    const {attributes} = element;

 
      switch (element.type) {
        case 'paragraph':
          return <p {...attributes}>{children}</p>
        case 'quote':
          return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
          return <ul {...attributes}>{children}</ul>
        case 'code':
          return <code {...attributes}>{children}</code>
        case 'heading-one':
          return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
          return <h2 {...attributes}>{children}</h2>
        case 'heading-three':
          return <h3 {...attributes}>{children}</h3>
        case 'heading-four':
          return <h4 {...attributes}>{children}</h4>
        case 'heading-five':
          return <h5 {...attributes}>{children}</h5>
        case 'heading-six':
          return <h6 {...attributes}>{children}</h6>
        case 'list-item':
          return <li {...attributes}>{children}</li>
        case 'numbered-list':
          return <ol {...attributes}>{children}</ol>
        case 'link':
          return (
                <a href={element.url} {...attributes}>
                  {children}
                </a>
              )
        case 'image':
          return <div style={{maxWidth:"700px"}}> <Image  width="100%" height="100%" layout="responsive" objectFit="cover" alt={page?.title} src={element.url} /></div>
        default:
          return <p {...attributes}>{children}</p>
      }
    }
    
    const Leaf = (lf:any, children:any) => {
  const {leaf, attributes} = lf
  

      if (leaf.bold) {
       
        return <strong {...attributes}>{leaf.text}</strong>
      }
    
      if (leaf.code) {
        return <code {...attributes}>{leaf.text}</code>
      }
    
      if (leaf.italic) {
       return  <em {...attributes}>{leaf.text}</em>
      }
    
      if (leaf.underline) {
      return<u {...attributes}>{leaf.text}</u>
      }
    
      return <span {...attributes}>{leaf.text}</span>
    }


  console.log(page)
  return (
    <>
      <ProjectHeader primaryColor={"#FF3C11A6"} secondaryColor={"#FF005CA6"} src={"/ember.png"}>
        <h1 style={{margin:"0"}}>Ember CMS</h1>
        <p  style={{margin:"0"}}>developer oriented headless CMS</p>
      </ProjectHeader>
      <div  style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      {page?.content?.map((item,index) =>{
switch (item.type) {
  case 'rich-text':
    let children: any[] = [];

item.data.forEach((node:any, idx:number) => {
  console.log(node)
 children.push(<Leaf key={idx} leaf={node.children[idx]} />)
})
return <Element key={index} element={item}>{children}</Element>
    break;

  case 'image':
    return <Image key={index} src={item.url} alt={item.title} />
    break;

  default:
    break;
}



})}

       </div>
       <ProjectBreadcrumb next={"Your Special Sound"} previous={"Your Special Sound"} />
       </>
  )
}

export default ProjectPage
