import { Box } from 'components/common/box/Box'

type Props = {
  number: string
  title: string
}

export const Title = ({ number, title }: Props) => {
  return (
    <Box>
      <b>{`${number}. `}</b>
      {`${title} `}&rarr;
    </Box>
  )
}
