import styled from "styled-components";

export const LogoContainer = styled.div`
padding:1em ;
cursor:pointer;
`;

export const NavbarContainer = styled.nav`
display: flex;
background-color:white ;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-right:1em;
width:100%;`;
export const NavbarList = styled.ul`
 a{
  text-decoration:none;
}`;

export const NavbarItem = styled.li``;

export const NavbarLink = styled.a`margin-left:1em;

&:hover{
    position: relative;
  font-weight:500 ;
    &::before{
        content: "";
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, #FF3C11 0%, #FFD319 104.49%);
    }
}

`;
export const NavbarLogo = styled.img``;


