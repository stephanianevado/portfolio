'use client'
import { createGlobalStyle } from 'styled-components'

export enum Color {
  PRIMARY_BLACK = 'primaryBlack',
  SECONDARY_BLACK = 'secondaryBlack',
  TERTIARY_BLACK = 'tertiaryBlack',
  PRIMARY_BLUE = 'primaryBlue',
  SECONDARY_BLUE = 'secondaryBlue',
  PRIMARY_GREEN = 'primaryGreen',
  PRIMARY_GREY = 'primaryGrey',
  SECONDARY_GREY = 'secondaryGrey',
  TERTIARY_GREY = 'tertiaryGrey',
  PRIMARY_ORANGE = 'primaryOrange',
  SECONDARY_ORANGE = 'secondaryOrange',
  PRIMARY_PINK = 'primaryPink',
  SECONDARY_PINK = 'secondaryPink',
  TERTIARY_PINK = 'tertiaryPink',
  PRIMARY_PURPLE = 'primaryPurple',
  SECONDARY_PURPLE = 'secondaryPurple',
  PRIMARY_RED = 'primaryRed',
  PRIMARY_WHITE = 'primaryWhite',
  SECONDARY_WHITE = 'secondaryWhite',
  HOVER_STANDARD = 'hoverStandard',
  HOVER_ALTERNATIVE = 'hoverAlternative',
}

export enum Breakpoint {
  MOBILE_S = 'MOBILE_S',
  MOBILE_M = 'MOBILE_M',
  MOBILE_L = 'MOBILE_L',
  TABLET = 'TABLET',
  LAPTOP = 'LAPTOP',
  LAPTOP_M = 'LAPTOP_M',
  LAPTOP_L = 'LAPTOP_L',
  DESKTOP = 'DESKTOP',
}

export enum Variant {
  XS = 'xs',
  SMALL = 'small',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  LARGE = 'large',
  XL = 'xl',
  XXL = 'xxl',
  XXXL = 'xxxl',
  HUGE = 'huge',
}

export const Theme = {
  colors: {
    [Color.PRIMARY_BLACK]: '#000000',
    [Color.SECONDARY_BLACK]: '#1A2029',
    [Color.TERTIARY_BLACK]: '#020C1B',
    [Color.PRIMARY_BLUE]: '#342CDB',
    [Color.SECONDARY_BLUE]: '#0C8CE9',
    [Color.PRIMARY_GREEN]: '#00FF00',
    [Color.PRIMARY_GREY]: '#454545',
    [Color.SECONDARY_GREY]: '#8B8B8B',
    [Color.TERTIARY_GREY]: '#F5F5F5',
    [Color.PRIMARY_ORANGE]: '#97240D',
    [Color.SECONDARY_ORANGE]: '#F24822',
    [Color.PRIMARY_PINK]: '#F5F5FF',
    [Color.SECONDARY_PINK]: '#F6EEF4',
    [Color.TERTIARY_PINK]: '#FF00A8',
    [Color.PRIMARY_PURPLE]: '#8638E5',
    [Color.SECONDARY_PURPLE]: '#681ABB',
    [Color.PRIMARY_RED]: '#FF0000',
    [Color.PRIMARY_WHITE]: '#FFFFFF',
    [Color.SECONDARY_WHITE]: '#E6F1FF',
    [Color.HOVER_STANDARD]: '#0000001A',
    [Color.HOVER_ALTERNATIVE]: '#020C1BCC',
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
  fontFamily: 'Clash Display, Spline Sans, Poppins, sans-serif',
  fontSize: {
    [Variant.XS]: '14px',
    [Variant.SMALL]: '16px',
    [Variant.NORMAL]: '18px',
    [Variant.MEDIUM]: '20px',
    [Variant.LARGE]: '24px',
    [Variant.XL]: '28px',
    [Variant.XXL]: '40px',
    [Variant.XXXL]: '42px',
    [Variant.HUGE]: '72px',
  },
  fontWeight: {
    bold: 600,
    normal: 400,
  },
  lineHeight: {
    xs: 20 / 14,
    small: 24 / 16,
    normal: 28 / 20,
    medium: 32 / 24,
    large: 36 / 28,
    xl: 48 / 40,
  },
  letterSpacing: '0.6px',
}

export const GlobalStyle = createGlobalStyle`
  html, 
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: ${Theme.colors.primaryPink};
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
    margin-top: 0
  }

  body,
  p,
  a,
  footer {
    font-size: ${Theme.fontSize.normal};
    font-weight: ${Theme.fontWeight.normal};
    line-height: ${Theme.lineHeight.small};
    color: ${Theme.colors.tertiaryBlack};
  }
`
