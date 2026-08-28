'use client'

import { useTranslations } from 'next-intl'

import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Button, Mode } from 'components/common/button/Button'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Link } from 'components/icons/icons'
import { Theme } from 'components/Theme'
import { Title } from 'components/Title'

import type { Id} from 'utils/workItems';
import { workItems } from 'utils/workItems'

export default function Work() {
  const {
    colors: { secondaryBlack, secondaryBlue, secondaryGrey, primaryWhite },
    fontSize: { small, large },
    fontWeight: { bold },
  } = Theme
  const t = useTranslations('work')
  const tItems = useTranslations('work.items')

  return (
    <AppWrapper>
      <Box>
        <Title header={t('header')} subHeader={t('subHeader')} />
        {Object.keys(workItems).map((id) => {
          const key = id as Id
          const item = workItems[key]
          const { href, icon: Icon } = item
          return (
            <Box key={key}>
              <Text
                as="h3"
                color={secondaryGrey}
                variant={large}
                subStyle={bold}>
                {tItems(`${key}.title`)}
              </Text>
              <Text as="p" color={secondaryBlack} variant={small}>
                {tItems(`${key}.text`)}
              </Text>
              <Text as="p" color={secondaryBlack} variant={small}>
                <Text
                  as="span"
                  color={secondaryBlue}
                  variant={small}
                  subStyle={bold}>
                  {t('technologiesLabel')}
                </Text>
                {tItems(`${key}.technologies`)}
              </Text>
              <Spacer size={2} />
              <Button
                as="a"
                href={href}
                target="_blank"
                icon={Icon}
                iconPosition="left"
                color={primaryWhite}
                bg={secondaryBlack}
                mode={Mode.ALTERNATIVE}
                isCompact>
                {tItems(`${key}.buttonText`)}
                <Spacer size={2} />
                <Link color={primaryWhite} size={3} />
              </Button>
              <Spacer size={10} />
            </Box>
          )
        })}
      </Box>
    </AppWrapper>
  )
}
