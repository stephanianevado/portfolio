import { createGlobalStyle } from 'styled-components'

import Breakpoint from 'types/index'

export type ThemeColor = keyof typeof Theme.colors
export type ThemeFontSize = keyof typeof Theme.fontSize

export const Theme = {
  colors: {
    dark: '#020c1b',
    grey: '#758ba9',
    grey2: '#677a94',
    white: '#e6f1ff',
    pink: '#F64C72',
  },
  breakpoints: {
    [Breakpoint.MOBILE_S]: '@media (min-width: 320px)',
    [Breakpoint.MOBILE_M]: '@media (min-width: 375px)',
    [Breakpoint.MOBILE_L]: '@media (min-width: 425px)',
    [Breakpoint.TABLET]: '@media (min-width: 768px)',
    [Breakpoint.LAPTOP]: '@media (min-width: 1024px)',
    [Breakpoint.LAPTOP_M]: '@media (min-width: 1260px)',
    [Breakpoint.LAPTOP_L]: '@media (min-width: 1440px)',
    [Breakpoint.DESKTOP]: '@media (min-width: 2560px)',
  },
  fontSize: {
    xSmall: '0.75rem',
    small: '0.875rem',
    normal: '1.125rem',
    medium: '1.5rem',
    large: '2.5rem',
    xLarge: '4rem',
  },
  fontFamily: {
    font: 'Poppins',
  },
  fontWeight: {
    semiBold: '500',
    bold: '900',
    normal: 'normal',
  },
  lineHeight: {
    small: '1rem',
    normal: '1.5rem',
    large: '2rem',
  },
}

export const GlobalStyle = createGlobalStyle`
  html, 
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: ${Theme.colors.dark};
  }

  body {
    display: flex; 
    flex-direction: column; 
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  input {
    font-family: ${Theme.fontFamily.font};
    margin-top: 0
  }

  body,
  p,
  a,
  footer {
    font-family: ${Theme.fontFamily.font};
    font-size: ${Theme.fontSize.normal};
    font-weight: ${Theme.fontWeight.normal};
    line-height: ${Theme.lineHeight.normal};
    color: ${Theme.colors.white};
  }

  a, 
  li {
    text-decoration: none;
  }
`
