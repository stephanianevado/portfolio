import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Theme } from 'components/Theme'

type Props = {
  header?: string
  subHeader: string
}

export const Title = ({ header, subHeader }: Props) => {
  const {
    colors: { secondaryBlack, primaryGrey, tertiaryPink },
    fontSize: { medium, xxl },
    fontWeight: { normal, bold },
    lineHeight: { xl },
  } = Theme

  return (
    <>
      <Text
        as="h1"
        color={secondaryBlack}
        variant={medium}
        subStyle={normal}
        textDecoration="underline"
        textDecorationColor={tertiaryPink}
        textUnderlineOffset="8px">
        {header}
      </Text>

      <Text
        as="h2"
        color={primaryGrey}
        variant={xxl}
        subStyle={bold}
        lineHeight={xl}
        animation="fadeInRight">
        {subHeader} &rarr;
      </Text>
      <Spacer size={2} />
    </>
  )
}
