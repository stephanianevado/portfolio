import { Box } from 'components/common/box/Box'
import { Title } from 'components/Title'

const MySkills = () => {
  return (
    <Box>
      <Title number="02" title="My skills" />

      <p>
        Since the beginning of my journey I've dedicated myself to learning
        about frontend development, starting with responsive web design
        principles in HTML and CSS, followed by JavaScript algorithms and data
        structures and frontend development libraries.
      </p>
      <p>
        I also have experience as a manager and head of department, as well as
        with leadership, process improvement and teamwork.
      </p>
      <p>
        Visit my
        <a
          href="https://www.linkedin.com/in/stephanianevado/"
          target="_blank"
          rel="noreferrer">
          {' '}
          LinkedIn
        </a>{' '}
        profile for more details or just{' '}
        <a href="/contact" target="_blank">
          contact
        </a>{' '}
        me.
      </p>

      <h4>Programming languages:</h4>
      <p> JavaScript (ES6), HTML, CSS/Styled components/Sass, Python3.</p>
      <h4>Libraries & frameworks:</h4>
      <p>
        {' '}
        React, Jest, React testing library, Next.js, Node.js, Express,
        Bootstrap, jQuery, Materialize, Redux, D3, FastAPI.
      </p>
      <h4>Tools & platforms:</h4>
      <p>
        {' '}
        GitHub, Prettier, Docker, Contentful, Wordpress, Wix, Babel, Terminal
        (bash/zsh), JSON, APIs, AJAX, npm, mongoDB, Postgresql, VSCode,
        IntelliJ, Vercel, Figma.
      </p>
      <h4>Management:</h4>
      <p>
        {' '}
        Process and planning, team management, personal development, stakeholder
        communication.
      </p>
    </Box>
  )
}

export default MySkills
