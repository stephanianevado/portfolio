import React, { useState } from 'react'

import styled from 'styled-components'

import { Breakpoints } from 'components/Breakpoints'
import { grey2 } from 'components/colors'
import { HamburgerIcon, XIcon } from 'components/icons'
import { NavItems } from 'components/NavItems'

const Menu = styled.div`
  background-color: ${grey2};
  width: 70%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`
const Hamburger = styled.div`
  cursor: pointer;
  z-index: 100;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
`
const HamburgerWrapper = styled.div`
  ${Breakpoints.laptop} {
    display: none;
  }
`
export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <HamburgerWrapper>
      <Hamburger onClick={() => setOpen(!open)}>
        {open ? <XIcon /> : <HamburgerIcon />}
      </Hamburger>
      <Menu open={open}>
        <NavItems open={open} />
      </Menu>
    </HamburgerWrapper>
  )
}
