import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import type { TextProps } from 'components/common/text/Text.style'
import { Theme } from 'components/Theme'

type Props = {
  header?: string
  subHeader: string
  variant?: TextProps['variant']
}

export const Title = ({ header, subHeader, variant = 'padme' }: Props) => {
  const { secondaryBlack, primaryGrey, tertiaryPink } = Theme.colors

  return (
    <>
      <Text
        as="h1"
        color={secondaryBlack}
        variant="leia"
        textDecoration="underline"
        textDecorationColor={tertiaryPink}
        textUnderlineOffset="8px">
        {header}
      </Text>

      <Text
        as="h2"
        color={primaryGrey}
        variant={variant}
        subStyle="bold"
        animation="fadeInRight">
        {subHeader} &rarr;
      </Text>
      <Spacer size={2} />
    </>
  )
}
