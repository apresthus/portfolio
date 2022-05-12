export type EmberCMSPost = {
    title:string,
    featuredImage:{alt:string,url:string}
    description:string,
    excerpt:string,
    createdAt:any,
    updatedAt:any,
    slug:string,
    content:[any],
    uid:string
  }
  export type EmberCMSPage = {
    title:string,
    description:string,
    createdAt:any,
    updatedAt:any,
    slug:string,
    content:[any],
    uid:string
  }