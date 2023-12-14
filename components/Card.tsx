import { Box } from 'components/common/box/Box'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Theme } from 'components/Theme'

type Props = {
  number: string
  title: string
  text: string
  href: string
}

export const Card = ({ number, title, text, href }: Props) => {
  const { secondaryBlack, primaryBlue } = Theme.colors
  return (
    <Box>
      <Text color={primaryBlue} variant="leia" subStyle="bold">
        {number}
      </Text>
      <Spacer size={2} />
      <Text color={secondaryBlack} variant="leia" subStyle="bold">
        {title}
      </Text>
      <Box as="a" href={href}>
        {text}
      </Box>
    </Box>
  )
}
