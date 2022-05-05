import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Navbar} from './components/navbar'
import {Footer} from './components/footer'
import { NavbarItem, NavbarLink } from './components/navbar/styles/navbar'

function MyApp({ Component, pageProps }: AppProps) {

  const toggleTheme = () => {

  }

  return( 
    <>
  <Navbar><NavbarLink href={"/#case-studies"}>case studies</NavbarLink>
  <NavbarLink href={"/#about"}>about</NavbarLink>
  <NavbarLink href={"#contact"}>contact</NavbarLink>
  <button style={{marginLeft:"1em"}} onClick={() => toggleTheme()}>cycle</button>
  </Navbar>
  <Component {...pageProps} />
  <Footer />
  </>
  )
 
}

export default MyApp
