import styled from 'styled-components'
import { grey, pink, white } from './colors'
import Link from 'next/link'
import { Breakpoints } from './breakpoints'

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
  &:hover {
    color: ${pink};
    border-color: ${pink};
    cursor: pointer;
  }
  ${Breakpoints.laptop} {
    width: 25rem;
    font-size: 2rem;
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
    &:hover {
      color: ${pink};
      border-color: ${pink};
      cursor: pointer;
    }
  }
`
const CardLink = styled.a`
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
    <CardWrapper>
      <Link href={href}>
        <CardLink>
          <h5>
            <b>{`${number}. `}</b>
            {`${title} `}&rarr;
          </h5>
          <p>{text}</p>
        </CardLink>
      </Link>
    </CardWrapper>
  )
}
