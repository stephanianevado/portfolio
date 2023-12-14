export enum Id {
  ABOUT = 'ABOUT',
  SKILLS = 'SKILLS',
  WORK = 'WORK',
  CONTACT = 'CONTACT',
}

export const items = {
  [Id.ABOUT]: {
    title: 'About',
    number: '01.',
    href: '/',
    text: 'Get to know me',
  },
  [Id.SKILLS]: {
    title: 'Skills',
    number: '02.',
    href: '/myskills',
    text: 'What I know',
  },
  [Id.WORK]: {
    title: 'Work',
    number: '03.',
    href: '/work',
    text: "Some things I've built",
  },
  [Id.CONTACT]: {
    title: 'Contact',
    number: '04.',
    href: '/contact',
    text: "What's next? Get in touch!",
  },
}
