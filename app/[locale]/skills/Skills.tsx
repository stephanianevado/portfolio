'use client'

import { useTranslations } from 'next-intl'

import { Accordion } from 'components/Accordion'
import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Title } from 'components/Title'

import type { Id} from 'utils/skillsItems';
import { skillsItems } from 'utils/skillsItems'

export default function Skills() {
  const t = useTranslations('skills')
  const tItems = useTranslations('skills.items')

  return (
    <AppWrapper>
      <Box>
        <Title header={t('header')} subHeader={t('subHeader')} />

        {Object.keys(skillsItems).map((id) => {
          const key = id as Id
          return (
            <Accordion
              key={key}
              title={tItems(`${key}.title`)}
              text={tItems(`${key}.text`)}
              description={tItems(`${key}.description`)}
            />
          )
        })}
      </Box>
    </AppWrapper>
  )
}
