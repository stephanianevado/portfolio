import styled from 'styled-components'

import type { TextProps } from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import { getTypographyStyle } from 'utils/getTypographyStyle'
import { styledMargins } from 'utils/styledMargins'
import { styledPadding } from 'utils/styledPadding'

export const Text = styled.div`
  ${styledPadding}
  ${styledMargins}
  display: ${(props: TextProps) => props.display || 'flex'};
  flex-grow: ${(props: TextProps) => props.grow || 0};
  flex-shrink: ${(props: TextProps) => props.shrink || 0};
  flex-basis: ${(props: TextProps) => props.basis || 'auto'};
  flex: ${(props: TextProps) => props.flex};
  flex-direction: ${(props: TextProps) => props.direction || 'column'};
  flex-wrap: ${(props: TextProps) => props.wrap || 'nowrap'};
  justify-content: ${(props: TextProps) =>
    props.justifyContent || 'flex-start'};
  align-content: ${(props: TextProps) =>
    props.alignContent && props.alignContent};
  align-items: ${(props: TextProps) => props.alignItems || 'flex-start'};
  align-self: ${(props: TextProps) => props.alignSelf};
  id: ${(props: TextProps) => props.id};
  as: ${(props: TextProps) => props.as};
  href: ${(props: TextProps) => props.href};
  target: ${(props: TextProps) => props.target || '_blank'};
  rel: ${(props: TextProps) => props.rel || 'normal'};
  color: ${(props: TextProps) => props.color || 'transparent'};
  text-align: ${(props: TextProps) => props.align || 'left'};
  ${({
    variant,
    subStyle,
  }: {
    variant: TextProps['variant']
    subStyle: TextProps['subStyle']
  }) => getTypographyStyle(variant, subStyle)};
  ${({ breakpoints }: { breakpoints: TextProps['breakpoints'] }) =>
    createResponsiveStyle(breakpoints)};
`
