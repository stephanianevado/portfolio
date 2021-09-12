import styled from 'styled-components'
import { grey, pink, white } from './colors'
import Link from 'next/link'

const CardLink = styled.a`
  width: 100px;
  font-size: 2rem;
  margin: 1rem;
  flex-basis: 45%;
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

  &:hover,
  &:focus,
  &:active {
    color: ${pink};
    border-color: ${pink};
    cursor: pointer;
  }

  h5 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

export const Card = ({ number, title, text, href }) => {
  return (
    <Link href={href}>
      <CardLink>
        <h5>
          <b>{`${number}. `}</b>
          {`${title} `}&rarr;
        </h5>
        <p>{text}</p>
      </CardLink>
    </Link>
  )
}
