import { Box } from 'components/common/box/Box'
import { Button } from 'components/common/button/Button'
import { Title } from 'components/Title'

const MyContacts = () => {
  return (
    <Box>
      <Title number="04" title="Contact me" />

      <h4>Get in touch</h4>
      <p>My inbox is always open to discuss new opportunities.</p>
      <p>
        I love to code - it was an amazing discovery for me. I'm always eager to
        learn new things and grow as a developer. Check out my
        <a
          href="https://github.com/stephanianevado"
          target="_blank"
          rel="noreferrer">
          {' '}
          GitHub
        </a>{' '}
        !
      </p>
      <Button
        as="a"
        href="mailto:stephania.arantxa@gmail.com"
        target="_blank"
        rel="noreferrer">
        Say hello
      </Button>
    </Box>
  )
}

export default MyContacts
