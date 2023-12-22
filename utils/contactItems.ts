import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
} from 'components/icons/icons'

export enum Id {
  GITHUB = 'GITHUB',
  LINKEDIN = 'LINKEDIN',
  INSTAGRAM = 'INSTAGRAM',
  FACEBOOK = 'FACEBOOK',
  EMAIL = 'EMAIL',
}

export const contactItems = {
  [Id.GITHUB]: {
    text: 'Go to my GitHub',
    alternativeText: 'My GitHub',
    href: 'https://github.com/stephanianevado',
    icon: GitHub,
  },
  [Id.LINKEDIN]: {
    text: 'Go to my LinkedIn',
    alternativeText: 'LinkedIn',
    href: 'https://www.linkedin.com/in/stephanianevado/',
    icon: Linkedin,
  },
  [Id.INSTAGRAM]: {
    text: 'Go to my Instagram',
    alternativeText: 'Check me in real life',
    href: 'https://www.instagram.com/stephanianevado/',
    icon: Instagram,
  },
  [Id.FACEBOOK]: {
    text: 'Go to my Facebook',
    alternativeText: 'Check me in real life',
    href: 'https://www.facebook.com/nevadostephania',
    icon: Facebook,
  },
  [Id.EMAIL]: {
    text: 'Send me a message',
    alternativeText: `Let's chat`,
    href: 'mailto:stephania.arantxa@gmail.com',
    icon: Email,
  },
}
