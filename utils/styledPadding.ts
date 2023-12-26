import { css } from 'styled-components'

import type { Size } from 'types/index'

import multiplier from 'utils/multiplier'

export type PaddingProps = {
  padding?: Size
  paddingVertical?: Size
  paddingHorizontal?: Size
  paddingTop?: Size
  paddingRight?: Size
  paddingBottom?: Size
  paddingLeft?: Size
}

export const styledPadding = css<PaddingProps>`
  padding: ${(props: PaddingProps) => multiplier(props.padding)};
  padding-top: ${(props: PaddingProps) => multiplier(props.paddingVertical)};
  padding-right: ${(props: PaddingProps) =>
    multiplier(props.paddingHorizontal)};
  padding-bottom: ${(props: PaddingProps) => multiplier(props.paddingVertical)};
  padding-left: ${(props: PaddingProps) => multiplier(props.paddingHorizontal)};
  padding-top: ${(props: PaddingProps) => multiplier(props.paddingTop)};
  padding-right: ${(props: PaddingProps) => multiplier(props.paddingRight)};
  padding-bottom: ${(props: PaddingProps) => multiplier(props.paddingBottom)};
  padding-left: ${(props: PaddingProps) => multiplier(props.paddingLeft)};
`
