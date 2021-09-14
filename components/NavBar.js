import styled from 'styled-components'
import { dark} from './colors'
import { NavItems } from './NavItems'
import { HamburgerMenu } from './HamburgerMenu'
import { Breakpoints } from './breakpoints'

const NavWrapper = styled.div`
  margin-bottom: 2rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${dark};
  visibility: hidden;
  ${Breakpoints.laptop} {
    visibility: visible;
  }
`

export const NavBar = () => {
  return (
    <NavWrapper>
      <Nav>
        <NavItems />
      </Nav>
      <HamburgerMenu />
    </NavWrapper>
  )
}
