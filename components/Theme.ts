import { createGlobalStyle } from 'styled-components'

import Breakpoint from 'types/index'

export type ThemeColor = keyof typeof Theme.colors
export type ThemeFontSize = keyof typeof Theme.fontSize

const fonts = {
  HEADING: 'Poppins, Pangea, sans-serif',
  BODY: 'Poppins, Pangea Text, sans-serif',
}

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
  fonts,
  typography: {
    padme: {
      fontFamily: fonts.HEADING,
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 48 / 40,
      letterSpacing: 0.6,
    },
    anakin: {
      fontFamily: fonts.HEADING,
      fontWeight: 500,
      fontSize: 28,
      lineHeight: 36 / 28,
      letterSpacing: 0.6,
    },
    ashoka: {
      fontFamily: fonts.HEADING,
      fontSize: 24,
      lineHeight: 32 / 24,
      letterSpacing: 0.6,
      variants: {
        normal: {
          fontWeight: 400,
        },
        bold: {
          fontWeight: 500,
        },
      },
    },
    leia: {
      fontFamily: fonts.HEADING,
      fontSize: 20,
      lineHeight: 28 / 20,
      letterSpacing: 0.6,
      variants: {
        normal: {
          fontWeight: 400,
        },
        bold: {
          fontWeight: 500,
        },
      },
    },
    luke: {
      fontFamily: fonts.BODY,
      fontSize: 16,
      lineHeight: 24 / 16,
      letterSpacing: 0.6,
      variants: {
        normal: {
          fontWeight: 400,
        },
        bold: {
          fontWeight: 500,
        },
      },
    },
    obi: {
      fontFamily: fonts.BODY,
      fontSize: 14,
      lineHeight: 20 / 14,
      letterSpacing: 0.6,
      variants: {
        normal: {
          fontWeight: 400,
        },
        bold: {
          fontWeight: 500,
        },
      },
    },
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
    font-family: ${Theme.typography.padme.fontFamily};
    margin-top: 0
  }

  body,
  p,
  a,
  footer {
    font-family: ${Theme.typography.luke.fontFamily};
    font-size: ${Theme.typography.luke.fontSize};
    font-weight: ${Theme.typography.luke.variants.normal};
    line-height: ${Theme.typography.luke.lineHeight};
    color: ${Theme.colors.white};
  }

  a, 
  li {
    text-decoration: none;
  }
`
