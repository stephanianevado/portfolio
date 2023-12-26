import Head from 'next/head'

import AppWrapper from 'components/AppWrapper'
import { Box } from 'components/common/box/Box'
import { Button, Mode } from 'components/common/button/Button'
import { Spacer } from 'components/common/spacer/Spacer'
import { Text } from 'components/common/text/Text'
import { Link } from 'components/icons/icons'
import { Theme } from 'components/Theme'
import { Title } from 'components/Title'
import { Id, workItems } from 'utils/workItems'

export default function Work() {
  const { secondaryBlack, secondaryBlue, secondaryGrey, primaryWhite } =
    Theme.colors

  return (
    <AppWrapper>
      <Head>
        <meta
          name="description"
          content="In this section you get to know my work"
        />
      </Head>
      <Box>
        <Title header="Work" subHeader="RECENT PROJECTS" />
        {Object.values(Id).map((id) => {
          const item = workItems[id]
          const {
            title,
            text,
            technologies,
            buttonText,
            href,
            icon: Icon,
          } = item
          return (
            <Box key={id}>
              <Text
                as="h3"
                color={secondaryGrey}
                variant="ashoka"
                subStyle="bold">
                {title}
              </Text>
              <Text as="p" color={secondaryBlack} variant="luke">
                {text}
              </Text>
              <Text as="p" color={secondaryBlack} variant="luke">
                <Text
                  as="span"
                  color={secondaryBlue}
                  variant="luke"
                  subStyle="bold">
                  Technologies used:{' '}
                </Text>
                {technologies}
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
                {buttonText}
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
