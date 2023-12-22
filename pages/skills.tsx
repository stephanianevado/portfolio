import Head from 'next/head'

import { Accordion } from 'components/Accordion'
import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Title } from 'components/Title'
import { Id, skillsItems } from 'utils/skillsItems'

export default function MySkills() {
  return (
    <AppWrapper>
      <Head>
        <meta
          name="description"
          content="In this section you get to know some of my skills"
        />
      </Head>
      <Box>
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
    </AppWrapper>
  )
}
