import { Accordion } from 'components/Accordion'
import { Box } from 'components/common/box/Box'
import { Breakpoint } from 'components/Theme'
import { Title } from 'components/Title'
import { Id, skillsItems } from 'utils/skillsItems'

export default function MySkills() {
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <Box
      breakpoints={{
        [MOBILE_S]: { padding: '40px 16px' },
        [LAPTOP]: { padding: '40px 0px' },
      }}>
      <Title header="Skills" subHeader="MY SPECIALTIES" />

      {Object.values(Id).map((id) => {
        const item = skillsItems[id]
        const { title, text, description } = item
        return (
          <Accordion
            key={id}
            title={title}
            text={text}
            description={description}
          />
        )
      })}
    </Box>
  )
}
