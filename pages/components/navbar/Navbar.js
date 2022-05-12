import { useRouter } from 'next/router'
import React from 'react'
import { NavbarContainer, NavbarList, LogoContainer} from './styles/navbar'
export default function Navbar({children, ...restProps}) {
  const router = useRouter();
  const logoSVG = <svg width="100" height="auto" viewBox="0 0 171 73" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50.5 56.1274H17.5L11.4211 72H1L28.3553 1.03413H39.7533L67 72H56.5789L50.5 56.1274ZM47.6776 48.5495L34 12.5034L20.3224 48.5495H47.6776Z" fill="black"/>
  <path d="M39.7533 1L33.9638 12.6058L28.3553 1H39.7533Z" fill="url(#paint0_linear_941_2)"/>
  <path d="M50.5 56.1274L50.6401 56.0738L50.6032 55.9774H50.5V56.1274ZM17.5 56.1274V55.9774H17.3968L17.3599 56.0738L17.5 56.1274ZM11.4211 72V72.15H11.5242L11.5611 72.0536L11.4211 72ZM1 72L0.860038 71.9461L0.781421 72.15H1V72ZM28.3553 1.03413V0.884133H28.2523L28.2153 0.980182L28.3553 1.03413ZM39.7533 1.03413L39.8933 0.980368L39.8564 0.884133H39.7533V1.03413ZM67 72V72.15H67.2183L67.14 71.9462L67 72ZM56.5789 72L56.4389 72.0536L56.4758 72.15H56.5789V72ZM47.6776 48.5495V48.6995H47.895L47.8179 48.4963L47.6776 48.5495ZM34 12.5034L34.1402 12.4501L34 12.0805L33.8598 12.4501L34 12.5034ZM20.3224 48.5495L20.1821 48.4963L20.105 48.6995H20.3224V48.5495ZM33.9638 12.6058L33.8288 12.671L33.9617 12.9461L34.098 12.6727L33.9638 12.6058ZM39.7533 1L39.8875 1.06696L39.9957 0.85H39.7533V1ZM28.3553 1V0.85H28.1162L28.2202 1.06527L28.3553 1ZM50.5 55.9774H17.5V56.2774H50.5V55.9774ZM17.3599 56.0738L11.281 71.9464L11.5611 72.0536L17.6401 56.1811L17.3599 56.0738ZM11.4211 71.85H1V72.15H11.4211V71.85ZM1.13996 72.0539L28.4952 1.08808L28.2153 0.980182L0.860038 71.9461L1.13996 72.0539ZM28.3553 1.18413H39.7533V0.884133H28.3553V1.18413ZM39.6133 1.0879L66.86 72.0538L67.14 71.9462L39.8933 0.980368L39.6133 1.0879ZM67 71.85H56.5789V72.15H67V71.85ZM56.719 71.9464L50.6401 56.0738L50.3599 56.1811L56.4389 72.0536L56.719 71.9464ZM47.8179 48.4963L34.1402 12.4501L33.8598 12.5566L47.5374 48.6027L47.8179 48.4963ZM33.8598 12.4501L20.1821 48.4963L20.4626 48.6027L34.1402 12.5566L33.8598 12.4501ZM20.3224 48.6995H47.6776V48.3995H20.3224V48.6995ZM34.098 12.6727L39.8875 1.06696L39.6191 0.933042L33.8296 12.5388L34.098 12.6727ZM39.7533 0.85H28.3553V1.15H39.7533V0.85ZM28.2202 1.06527L33.8288 12.671L34.0989 12.5405L28.4903 0.934733L28.2202 1.06527Z" fill="black"/>
  <path d="M116 21.0732C116 27.0646 113.897 32.0574 109.691 36.0517C105.555 39.977 99.211 41.9397 90.6588 41.9397H76.5687V72H67V0H90.6588C98.9306 0 105.205 1.9627 109.481 5.88809C113.827 9.81349 116 14.8752 116 21.0732ZM90.6588 34.1923C95.9864 34.1923 99.912 33.056 102.436 30.7834C104.959 28.5108 106.221 25.274 106.221 21.0732C106.221 12.1894 101.034 7.74749 90.6588 7.74749H76.5687V34.1923H90.6588Z" fill="black"/>
  <path d="M171 34L166 31.1132V36.8868L171 34ZM127 34.5H166.5V33.5H127V34.5Z" fill="black"/>
  <defs>
  <linearGradient id="paint0_linear_941_2" x1="33.9638" y1="11.4111" x2="33.9638" y2="-1.04808" gradientUnits="userSpaceOnUse">
  <stop stopColor="#242424"/>
  <stop offset="1" stopColor="#898989"/>
  </linearGradient>
  </defs>
  </svg>


  
  
  return (
    <NavbarContainer {...restProps}><LogoContainer onClick={() => router.push('/')}>{logoSVG}</LogoContainer><NavbarList>{children}</NavbarList></NavbarContainer>
  )
}
