'use client'

import { Fragment } from 'react'

import Icosahedron from 'components/animations/Icosahedron'
import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Button, Mode } from 'components/common/button/Button'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Dash } from 'components/icons/icons'
import { Breakpoint, Theme } from 'components/Theme'

import { contactItems, Id } from 'utils/contactItems'

export default function Home() {
  const {
    colors: { secondaryBlack, secondaryGrey, primaryWhite },
    fontSize: { normal, xxxl, huge },
    fontWeight: { bold },
    lineHeight: { xl },
  } = Theme
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <AppWrapper>
      <Box
        breakpoints={{
          [MOBILE_S]: { direction: 'column' },
          [LAPTOP]: { direction: 'row' },
        }}>
        <Box
          breakpoints={{
            [LAPTOP]: { flex: 1 },
          }}>
          <Box direction="row" alignItems="center">
            <Dash />
            <Spacer size={1} />
            <Text
              as="span"
              color={secondaryGrey}
              variant={normal}
              subStyle={bold}>
              Stephania Nevado
            </Text>
          </Box>
          <Text
            as="h1"
            color={secondaryBlack}
            lineHeight={xl}
            breakpoints={{
              [MOBILE_S]: { variant: xxxl, subStyle: bold },
              [LAPTOP]: { variant: huge, subStyle: bold },
            }}>
            Frontend developer, manager and nutritionist located in Sweden ✨
          </Text>
          <Spacer size={2} />
          <Box
            breakpoints={{
              [MOBILE_S]: { direction: 'column', alignItems: 'center' },
              [LAPTOP]: { direction: 'row' },
            }}>
            {Object.values(Id)
              .filter((id) => {
                return [Id.GITHUB, Id.LINKEDIN, Id.EMAIL].includes(id)
              })
              .map((id) => {
                const item = contactItems[id]
                const { alternativeText, href, icon: Icon } = item
                return (
                  <Fragment key={id}>
                    <Button
                      as="a"
                      href={href}
                      target="_blank"
                      icon={Icon}
                      iconPosition="left"
                      color={primaryWhite}
                      bg={secondaryBlack}
                      mode={Mode.ALTERNATIVE}>
                      {alternativeText}
                    </Button>
                    <Spacer size={4} />
                  </Fragment>
                )
              })}
          </Box>
        </Box>
        <Icosahedron />
      </Box>
    </AppWrapper>
  )
}
