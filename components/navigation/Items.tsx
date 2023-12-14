import { Box } from 'components/common/box/Box'
import { Button } from 'components/common/button/Button'
import { Text } from 'components/common/text/Text'
import { Breakpoint, Theme } from 'components/Theme'

import { Id, items } from 'utils/items'

export const Items = () => {
  const { MOBILE_S, LAPTOP } = Breakpoint
  const { secondaryBlack } = Theme.colors

  return (
    <Box
      breakpoints={{
        [MOBILE_S]: { marginTop: '50px', justifyContent: 'center' },
        [LAPTOP]: {
          marginTop: '0px',
          direction: 'row',
          alignItems: 'center',
        },
      }}>
      {Object.values(Id).map((id) => {
        const item = items[id]
        const { title, href } = item
        return (
          <Box
            key={id}
            as="a"
            href={href}
            direction="row"
            breakpoints={{
              [MOBILE_S]: { margin: '12px 16px' },
              [LAPTOP]: { margin: '0px 24px' },
            }}>
            <Text color={secondaryBlack} variant="leia" subStyle="bold">
              {title}
            </Text>
          </Box>
        )
      })}
      <Box
        breakpoints={{
          [MOBILE_S]: { margin: '12px 16px' },
          [LAPTOP]: { margin: '0px' },
        }}>
        <Button as="a" href="/documents/cv.pdf" target="_blank">
          Resume
        </Button>
      </Box>
    </Box>
  )
}
