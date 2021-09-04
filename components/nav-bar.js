import styled from "styled-components";

const NavWrapper = styled.div`
  margin-bottom: 2rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #dce6ee;
`
const NavList = styled.ul`
  display: flex;
  margin-right: 4rem;
  list-style: none;
  a {
   display: block;
   padding: 0.5rem;
   font-family: Poppins, sans-serif;
   text-decoration: none;
  }
  a:hover{
    color: #002c59;
  }
`

const Logo = styled.img`
   display: block;
   padding: 0.5rem;
   width: 5rem;
`

export const NavBar = () => {
    return (
        <NavWrapper>
        <Nav>
            <div>
                <a href="#">
                    <Logo src="/logo.svg" alt="logo SVG portfolio"/>
                </a>
            </div>
            <NavList>
                <li>
                    <a href="/about">About me</a>
                </li>
                <li>
                    <a href="/myskills">My skills</a>
                </li>
                <li>
                    <a href="/work">Work</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="#" target="_blank">Resume</a>
                </li>
            </NavList>
        </Nav>
        </NavWrapper>
    )
}