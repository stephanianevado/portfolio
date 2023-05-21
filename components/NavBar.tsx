import styled from 'styled-components'

import { Breakpoints } from 'components/Breakpoints'
import { dark } from 'components/colors'
import { HamburgerMenu } from 'components/HamburgerMenu'
import { NavItems } from 'components/NavItems'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: ${dark};
`

const Logo = styled.img`
  padding: 0.8rem;
  width: 4rem;
  height: 3.5rem;
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
          <Logo src="/logoportfolio.svg" alt="logo SVG portfolio" />
        </a>
        <Menu>
          <NavItems />
        </Menu>
      </Nav>
      <HamburgerMenu />
    </>
  )
}
