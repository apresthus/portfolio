import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'
import { NavbarItem, NavbarLink } from '../components/navbar/styles/navbar'

function MyApp({ Component, pageProps }: AppProps) {

  const toggleTheme = () => {

  }

  return( 
    <>
  <Navbar><NavbarLink href={"/#projects"}>projects</NavbarLink>
  <NavbarLink href={"/#about"}>about</NavbarLink>
  <NavbarLink href={"/#contact"}>contact</NavbarLink>
  </Navbar>
  <Component {...pageProps} />
  <Footer />
  </>
  )
 
}

export default MyApp
