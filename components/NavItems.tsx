import styled from 'styled-components'

import { Breakpoints } from 'components/Breakpoints'
import { pink, white } from 'components/colors'

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
  list-style: none;
  position: relative;
  a {
    display: block;
    padding: 0.5rem 1.3rem;
    font-size: 1.25rem;
    color: ${white};
    text-decoration: none;
  }
  b {
    color: ${pink};
  }
  a:hover {
    color: ${pink};
  }
  ${Breakpoints.laptop} {
    a {
      font-size: 0.85rem;
    }
    flex-direction: row;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: transparent;
  border: 1px solid ${pink};
  border-radius: 5px;
  height: 50px;
  margin-top: 2rem;
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
  ${Breakpoints.laptop} {
    margin-top: 0;
    height: 35px;
  }
`
const Li = styled.li`
  display: inherit;
`

export const NavItems = () => {
  return (
    <>
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
            <a href="/CV ENG.pdf" target="_blank">
              Resume
            </a>
          </Button>
        </Li>
      </NavList>
    </>
  )
}
