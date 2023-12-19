import Head from 'next/head'

import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { ProjectBox } from 'components/ProjectBox'
import { Title } from 'components/Title'

export default function Work() {
  return (
    <AppWrapper>
      <Head>
        <meta
          name="description"
          content="In this section you get to know my work"
        />
      </Head>
      <Box paddingVertical={20}>
        <Title header="Work" subHeader="RECENT PROJECT" />

        <ProjectBox
          image="/breeds.png"
          title="My Cat Breeds App"
          description="App built with Next.js, TypeScript, Styled Components and Jest."
          github="https://github.com/stephanianevado/carla"
          pages="https://carla.vercel.app/"
        />
        <ProjectBox
          image="/My cat app 2.png"
          title="My Cat App"
          description="App built with React, Styled Components, Python, FastAPI and Postgresql."
          github="https://github.com/stephanianevado/my-cat-app"
        />
      </Box>
    </AppWrapper>
  )
}
