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
    description:
      'The programming languages I have used for coding and web development.',
    text: 'Typescript, JavaScript (ES6), HTML, CSS/Styled components/Sass.',
  },
  [Id.LIBRARIES]: {
    title: 'Libraries & frameworks:',
    description:
      'Frameworks and libraries I have used for building web applications.',
    text: 'React, Next.js, Cypress, Jest, GraphQL, React testing library, Node.js, Redux, D3, FastAPI.',
  },
  [Id.TOOLS]: {
    title: 'Development Tools:',
    description:
      'These are the diverse tools I have adeptly utilized throughout the development process.',
    text: 'GitHub, Prettier, ESLint, Vercel, Figma, Contentful, npm, pnpm, Terminal (bash/zsh), JSON.',
  },
  [Id.PLATFORMS]: {
    title: 'Platforms:',
    description: 'Development environments and editors.',
    text: 'VSCode, IntelliJ.',
  },
  [Id.DATA_BASES]: {
    title: 'Databases:',
    description: 'Databases for storing and managing data.',
    text: 'PostgreSQL, MongoDB.',
  },
  [Id.MANAGEMENT]: {
    title: 'Management:',
    description:
      'These are my abilities related to project and team management.',
    text: 'Process, planning, team management, personal development, stakeholder communication.',
  },
}
