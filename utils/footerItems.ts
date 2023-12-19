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

export const footerItems = {
  [Id.GITHUB]: {
    text: 'Go to my GitHub',
    href: 'https://github.com/stephanianevado',
    icon: GitHub,
  },
  [Id.LINKEDIN]: {
    text: 'Go to my LinkedIn',
    href: 'https://www.linkedin.com/in/stephanianevado/',
    icon: Linkedin,
  },
  [Id.INSTAGRAM]: {
    text: 'Go to my Instagram',
    href: 'https://www.instagram.com/stephanianevado/',
    icon: Instagram,
  },
  [Id.FACEBOOK]: {
    text: 'Go to my Facebook',
    href: 'https://www.facebook.com/nevadostephania',
    icon: Facebook,
  },
  [Id.EMAIL]: {
    text: 'mailto:stephania.arantxa@gmail.com',
    href: '/contact',
    icon: Email,
  },
}
