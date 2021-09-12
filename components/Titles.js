import styled from 'styled-components'
import { pink, white } from './colors'

const TitlesH5 = styled.h5`
  font-size: 2rem;
  color: ${white};
  b {
    color: ${pink};
  }
`

export const Titles = ({ number, title }) => {
  return (
    <TitlesH5>
      <b>{`${number}. `}</b>
      {`${title} `}&rarr;
    </TitlesH5>
  )
}
