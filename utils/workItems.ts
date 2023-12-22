import { Cat, Star } from 'components/icons/icons'

export enum Id {
  PORTFOLIO = 'PORTFOLIO',
  CAT_BREEDS_APP = 'CAT_BREEDS_APP',
}

export const workItems = {
  [Id.PORTFOLIO]: {
    title: 'This portfolio',
    text: `I could have created this portfolio with some online template or no-code solution - but I'm a programmer, so of course I didn't want to do that 🤓 Instead, I've used this portfolio as a way to showcase my skills and way of coding. If you look at GitHub, you'll find a well-organized, linted and strictly formatted project with my own custom theme structure.`,
    technologies: 'Next.js, React, TypeScript, Styled components.',
    buttonText: 'My Portfolio',
    href: 'https://github.com/stephanianevado/portfolio?tab=readme-ov-file#stephania-nevados-portfolio',
    icon: Star,
  },
  [Id.CAT_BREEDS_APP]: {
    title: 'Cat Breeds app',
    text: `It's no secret that I love cats 😻 When I applied to the role as a Frontend developer at Carla, I created this cat breeds app. I wanted to show a part of who I am, but also - of course - my programming skills. The project also has a few tests just to showcase how I usually structure them.`,
    technologies: 'Next.js, React, TypeScript, Styled components, Jest.',
    buttonText: 'My Cat App',
    href: 'https://github.com/stephanianevado/carla?tab=readme-ov-file#my-cat-breeds-app',
    icon: Cat,
  },
}
