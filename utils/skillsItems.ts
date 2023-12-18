export enum Id {
  LANGUAGES = 'LANGUAGES',
  LIBRARIES = 'LIBRARIES',
  TOOLS = 'TOOLS',
  PLATFORMS = 'PLATFORMS',
  DATA_BASES = 'DATA_BASES',
  MANAGEMENT = 'MANAGEMENT',
}

export const skillsItems = {
  [Id.LANGUAGES]: {
    title: 'Programming languages:',
    description: 'Languages I have used for coding and web development.',
    text: 'JavaScript (ES6), HTML, CSS/Styled components/Sass.',
  },
  [Id.LIBRARIES]: {
    title: 'Libraries & frameworks:',
    description:
      'Frameworks and libraries I have used for building web applications.',
    text: 'Typescript, React, Next.js, Cypress, Jest, GraphQL, React testing library, Node.js, Bootstrap, jQuery, Materialize, Redux, D3, FastAPI.',
  },
  [Id.TOOLS]: {
    title: 'Development Tools:',
    description: 'Tools I have used in the development process.',
    text: 'GitHub, Prettier, Eslint, Vercel, Figma, Contentful, npm, pnpm, Terminal (bash/zsh), JSON, APIs, Docker.',
  },
  [Id.PLATFORMS]: {
    title: 'Platforms:',
    description: 'Development environments and editors.',
    text: 'VSCode, IntelliJ.',
  },
  [Id.DATA_BASES]: {
    title: 'Databases:',
    description: 'Databases I have used for storing and managing data.',
    text: 'PostgreSQL, MongoDB.',
  },
  [Id.MANAGEMENT]: {
    title: 'Management:',
    description: 'Skills related to project and team management.',
    text: 'Shape Up, Process and planning, team management, personal development, stakeholder communication.',
  },
}
