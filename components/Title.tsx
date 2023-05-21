import styled from 'styled-components'

import { pink, white } from 'components/colors'

const TitleH5 = styled.h5`
  font-size: 2rem;
  color: ${white};
  b {
    color: ${pink};
  }
`
type Props = {
  number: string
  title: string
}

export const Title = ({ number, title }: Props) => {
  return (
    <TitleH5>
      <b>{`${number}. `}</b>
      {`${title} `}&rarr;
    </TitleH5>
  )
}
