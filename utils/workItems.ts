import { Cat, Star } from 'components/icons/icons'

export enum Id {
  PORTFOLIO = 'PORTFOLIO',
  CAT_BREEDS_APP = 'CAT_BREEDS_APP',
}

export const workItems = {
  [Id.PORTFOLIO]: {
    href: 'https://github.com/stephanianevado/portfolio?tab=readme-ov-file#stephania-nevados-portfolio',
    icon: Star,
  },
  [Id.CAT_BREEDS_APP]: {
    href: 'https://github.com/stephanianevado/carla?tab=readme-ov-file#my-cat-breeds-app',
    icon: Cat,
  },
}
