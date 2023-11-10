import { css } from 'styled-components'

import type { MarginProps } from 'types/index'

import multiplier from 'utils/multiplier'

export const styledMargins = css<MarginProps>`
  margin: ${(props: MarginProps) => multiplier(props.margin) || 0}px;
  margin-top: ${(props: MarginProps) =>
    multiplier(props.marginVertical) || 0}px;
  margin-right: ${(props: MarginProps) =>
    multiplier(props.marginHorizontal) || 0}px;
  margin-bottom: ${(props: MarginProps) =>
    multiplier(props.marginVertical) || 0}px;
  margin-left: ${(props: MarginProps) =>
    multiplier(props.marginHorizontal) || 0}px;
  margin-top: ${(props: MarginProps) => multiplier(props.marginTop) || 0}px;
  margin-right: ${(props: MarginProps) => multiplier(props.marginRight) || 0}px;
  margin-bottom: ${(props: MarginProps) =>
    multiplier(props.marginBottom) || 0}px;
  margin-left: ${(props: MarginProps) => multiplier(props.marginLeft) || 0}px;
`
