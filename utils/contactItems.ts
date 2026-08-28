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
    href: 'https://github.com/stephanianevado',
    icon: GitHub,
  },
  [Id.LINKEDIN]: {
    href: 'https://www.linkedin.com/in/stephanianevado/',
    icon: Linkedin,
  },
  [Id.INSTAGRAM]: {
    href: 'https://www.instagram.com/stephanianevado/',
    icon: Instagram,
  },
  [Id.FACEBOOK]: {
    href: 'https://www.facebook.com/nevadostephania',
    icon: Facebook,
  },
  [Id.EMAIL]: {
    href: 'mailto:stephania.arantxa@gmail.com',
    icon: Email,
  },
}
