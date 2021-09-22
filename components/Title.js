import styled from 'styled-components'
import { pink, white } from './colors'

const TitleH5 = styled.h5`
  font-size: 2rem;
  color: ${white};
  b {
    color: ${pink};
  }
`

export const Title = ({ number, title }) => {
  return (
    <TitleH5>
      <b>{`${number}. `}</b>
      {`${title} `}&rarr;
    </TitleH5>
  )
}
