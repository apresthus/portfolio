import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Navbar} from './components/navbar'
import {Footer} from './components/footer'
import { NavbarItem, NavbarLink } from './components/navbar/styles/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <>
  <Navbar><NavbarLink>{"case studies"}{"about"}{"contact"}</NavbarLink></Navbar>
  <Component {...pageProps} />
  <Footer />
  </>
  )
 
}

export default MyApp
