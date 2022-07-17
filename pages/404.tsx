
import styled from "styled-components"

export const FourOhFour = styled.h1`
text-align:center;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 5rem;
/* identical to box height */
height:20vw;

background: radial-gradient(79.18% 141.87% at 16.34% 25.26%, #FF005C 0%, #FFD319 68.73%, #FF3C11 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
  `;

export default function Custom404() {
    return <FourOhFour>404 - Page Not Found</FourOhFour>
  }