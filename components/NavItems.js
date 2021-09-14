import styled from 'styled-components'
import { pink, white } from './colors'

const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.8rem;
  width: 4rem;
`
const NavList = styled.ul`
  display: flex;
  margin-right: 4rem;
  list-style: none;
  position: relative;
  a {
    display: block;
    padding: 0.5rem 1.3rem;
    font-size: 0.85rem;
    color: ${white};
    text-decoration: none;
  }
  b {
    color: ${pink};
  }
  a:hover {
    color: ${pink};
  }
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  border: 1px solid ${pink};
  border-radius: 5px;
  height: 35px;
  margin-left: 1.3rem;
  a {
    display: inline-block;
    color: ${white};
  }
  a:hover {
    color: ${white};
    background-color: ${pink};
  }
  &:hover {
    background-color: ${pink};
    opacity: 0.5;
  }
`
const Li = styled.li`
  display: inherit;
`
export const NavItems = () => {
  return (
    <>
      <div>
        <a href="/">
          <Logo src="/logoportfolio4.svg" alt="logo SVG portfolio" />
        </a>
      </div>
      <NavList>
        <Li>
          <a href="/about">
            <b>01.</b> About
          </a>
        </Li>
        <Li>
          <a href="/myskills">
            <b>02.</b> Skills
          </a>
        </Li>
        <Li>
          <a href="/work">
            <b>03.</b> Work
          </a>
        </Li>
        <Li>
          <a href="/contact">
            <b>04.</b> Contact
          </a>
        </Li>
        <Li>
          <Button>
            <a href="/CV ENGLISH.pdf" target="_blank">
              Resume
            </a>
          </Button>
        </Li>
      </NavList>
    </>
  )
}
