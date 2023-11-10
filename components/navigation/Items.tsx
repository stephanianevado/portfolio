import { Box } from 'components/Box'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import { Theme } from 'components/Theme'

import Breakpoint from 'types/index'

enum Id {
  ABOUT = 'ABOUT',
  SKILLS = 'SKILLS',
  WORK = 'WORK',
  CONTACT = 'CONTACT',
}

const items = {
  [Id.ABOUT]: {
    title: 'About',
    number: '01.',
    href: '/about',
  },
  [Id.SKILLS]: {
    title: 'Skills',
    number: '02.',
    href: '/myskills',
  },
  [Id.WORK]: {
    title: 'Work',
    number: '03.',
    href: '/work',
  },
  [Id.CONTACT]: {
    title: 'Contact',
    number: '04.',
    href: '/contact',
  },
}

export const Items = () => {
  const { MOBILE_S, LAPTOP } = Breakpoint
  const { pink, white } = Theme.colors

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
        const { title, number, href } = item
        return (
          <Box
            key={id}
            as="a"
            href={href}
            direction="row"
            hover={{ color: `${pink}` }}
            breakpoints={{
              [MOBILE_S]: { margin: '12px 24px' },
              [LAPTOP]: { margin: '0px 24px' },
            }}>
            <Text color={pink} variant="luke" subStyle="bold" b>
              {number}
            </Text>
            <Spacer size={2} />
            <Text color={white} variant="luke" subStyle="bold">
              {title}
            </Text>
          </Box>
        )
      })}
      <Box
        as="a"
        href="/cv.pdf"
        target="_blank"
        border={`1px solid ${pink}`}
        borderRadius={1}
        hover={{ background: `${pink}`, opacity: 0.5 }}
        breakpoints={{
          [MOBILE_S]: { margin: '12px 24px', padding: '12px 40px' },
          [LAPTOP]: { margin: '0px', padding: '12px 24px' },
        }}>
        Resume
      </Box>
    </Box>
  )
}
