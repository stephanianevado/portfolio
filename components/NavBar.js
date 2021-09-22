import styled from 'styled-components'
import { dark } from './colors'
import { NavItems } from './NavItems'
import { HamburgerMenu } from './HamburgerMenu'
import { Breakpoints } from './Breakpoints'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: ${dark};
`

const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.8rem;
  width: 4rem;
`

const Menu = styled.div`
  visibility: hidden;
  ${Breakpoints.laptop} {
    visibility: visible;
  }
`

export const NavBar = () => {
  return (
    <>
      <Nav>
        <a href="/">
          <Logo src="/logoportfolio4.svg" alt="logo SVG portfolio" />
        </a>
        <Menu>
          <NavItems />
        </Menu>
      </Nav>
      <HamburgerMenu />
    </>
  )
}
