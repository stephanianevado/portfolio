export enum Id {
  ABOUT = 'ABOUT',
  SKILLS = 'SKILLS',
  WORK = 'WORK',
  CONTACT = 'CONTACT',
}

export const items = {
  [Id.ABOUT]: {
    title: 'About',
    href: '/about',
  },
  [Id.SKILLS]: {
    title: 'Skills',
    href: '/skills',
  },
  [Id.WORK]: {
    title: 'Work',
    href: '/work',
  },
  [Id.CONTACT]: {
    title: 'Contact',
    href: '/contact',
  },
}
