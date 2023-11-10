import { css } from 'styled-components'

import type { PaddingProps } from 'types/index'

import multiplier from 'utils/multiplier'

export const styledPadding = css<PaddingProps>`
  padding: ${(props: PaddingProps) => multiplier(props.padding) || 0}px;
  padding-top: ${(props: PaddingProps) =>
    multiplier(props.paddingVertical) || 0}px;
  padding-right: ${(props: PaddingProps) =>
    multiplier(props.paddingHorizontal) || 0}px;
  padding-bottom: ${(props: PaddingProps) =>
    multiplier(props.paddingVertical) || 0}px;
  padding-left: ${(props: PaddingProps) =>
    multiplier(props.paddingHorizontal) || 0}px;
  padding-top: ${(props: PaddingProps) => multiplier(props.paddingTop) || 0}px;
  padding-right: ${(props: PaddingProps) =>
    multiplier(props.paddingRight) || 0}px;
  padding-bottom: ${(props: PaddingProps) =>
    multiplier(props.paddingBottom) || 0}px;
  padding-left: ${(props: PaddingProps) =>
    multiplier(props.paddingLeft) || 0}px;
`
