import React from 'react'

import Link from 'next/link'

import styled from 'styled-components'

import { Breakpoints } from 'components/Breakpoints'
import { grey, pink, white } from 'components/colors'

const CardWrapper = styled.div`
  width: 15rem;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: ${grey};
  text-decoration: none;
  border: 1px solid ${white};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  b {
    color: ${pink};
  }
  h5 {
    font-size: 1.5rem;
  }
  &:hover {
    color: ${pink};
    border-color: ${pink};
    cursor: pointer;
  }
  ${Breakpoints.laptop} {
    width: 25rem;
    font-size: 2rem;
  }
`
const CardLink = styled.a`
  font-size: 1.25rem;
  line-height: 1.5;
`
export const Card = ({ number, title, text, href }) => {
  return (
    <CardWrapper>
      <h5>
        <b>{`${number}. `}</b>
        {`${title} `}&rarr;
      </h5>
      <Link href={href} legacyBehavior>
        <CardLink>{text}</CardLink>
      </Link>
    </CardWrapper>
  )
}
