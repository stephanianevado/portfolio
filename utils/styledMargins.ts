import { css } from 'styled-components'

import type { Size } from 'types/index'

import multiplier from 'utils/multiplier'

export type MarginProps = {
  margin?: Size
  marginHorizontal?: Size
  marginVertical?: Size
  marginTop?: Size
  marginRight?: Size
  marginBottom?: Size
  marginLeft?: Size
}

export const styledMargins = css<MarginProps>`
  margin: ${(props: MarginProps) => multiplier(props.margin)};
  margin-top: ${(props: MarginProps) => multiplier(props.marginVertical)};
  margin-right: ${(props: MarginProps) => multiplier(props.marginHorizontal)};
  margin-bottom: ${(props: MarginProps) => multiplier(props.marginVertical)};
  margin-left: ${(props: MarginProps) => multiplier(props.marginHorizontal)};
  margin-top: ${(props: MarginProps) => multiplier(props.marginTop)};
  margin-right: ${(props: MarginProps) => multiplier(props.marginRight)};
  margin-bottom: ${(props: MarginProps) => multiplier(props.marginBottom)};
  margin-left: ${(props: MarginProps) => multiplier(props.marginLeft)};
`
