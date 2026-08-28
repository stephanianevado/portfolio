export enum Id {
  ABOUT = 'ABOUT',
  SKILLS = 'SKILLS',
  WORK = 'WORK',
  CONTACT = 'CONTACT',
}

export const items = {
  [Id.ABOUT]: {
    href: '/about',
  },
  [Id.SKILLS]: {
    href: '/skills',
  },
  [Id.WORK]: {
    href: '/work',
  },
  [Id.CONTACT]: {
    href: '/contact',
  },
}
