import type { FC, PropsWithChildren } from 'react'

import styled from 'styled-components'

import {
  type AlignContent,
  type AlignItems,
  type AlignSelf,
  type BreakpointStyles,
  type JustifyContent,
  type JustifyItems,
  type JustifySelf,
} from 'types/index'

import { createResponsiveStyle } from 'utils/createResponsiveStyle'
import multiplier from 'utils/multiplier'
import { type MarginProps } from 'utils/styledMargins'
import { type PaddingProps } from 'utils/styledPadding'

export type GridProps = PaddingProps &
  MarginProps &
  PropsWithChildren<{
    id?: string | JSX.Element | FC
    as?: string | HTMLElementTagNameMap
    gap?: number
    columns?: string
    rows?: string
    justifyContent?: JustifyContent
    justifyItems?: JustifyItems
    justifySelf?: JustifySelf
    alignContent?: AlignContent
    alignItems?: AlignItems
    alignSelf?: AlignSelf
    children?: React.ReactNode | React.ReactNode[]
    breakpoints?: Record<string, BreakpointStyles>
  }>

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  padding: 16px 0px;
  gap: ${(props: GridProps) => multiplier(props.gap)};
  grid-template-columns: ${(props: GridProps) => props.columns};
  grid-template-rows: ${(props: GridProps) => props.rows};
  justify-content: ${(props: GridProps) => props.justifyContent};
  justify-items: ${(props: GridProps) => props.justifyItems};
  justify-self: ${(props: GridProps) => props.justifySelf};
  align-content: ${(props: GridProps) => props.alignContent};
  align-items: ${(props: GridProps) => props.alignItems};
  align-self: ${(props: GridProps) => props.alignSelf};
  ${(props: GridProps) => createResponsiveStyle(props.breakpoints)};
`
