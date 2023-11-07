import { css } from 'styled-components'

import type { MarginProps } from 'types/index'

import multiplier from 'utils/multiplier'

export const styledMargins = css<MarginProps>`
  && {
    margin: ${(props: MarginProps) =>
      props.margin ? `${multiplier(props.margin)}px` : ''};
    margin-top: ${(props: MarginProps) =>
      props.marginVertical ? ` ${multiplier(props.marginVertical)}px` : ''};
    margin-right: ${(props: MarginProps) =>
      props.marginHorizontal ? ` ${multiplier(props.marginHorizontal)}px` : ''};
    margin-bottom: ${(props: MarginProps) =>
      props.marginVertical ? ` ${multiplier(props.marginVertical)}px` : ''};
    margin-left: ${(props: MarginProps) =>
      props.marginHorizontal ? `${multiplier(props.marginHorizontal)}px` : ''};
    margin-top: ${(props: MarginProps) =>
      props.marginTop ? ` ${multiplier(props.marginTop)}px` : ''};
    margin-right: ${(props: MarginProps) =>
      props.marginRight ? ` ${multiplier(props.marginRight)}px` : ''};
    margin-bottom: ${(props: MarginProps) =>
      props.marginBottom ? ` ${multiplier(props.marginBottom)}px` : ''};
    margin-left: ${(props: MarginProps) =>
      props.marginLeft ? `${multiplier(props.marginLeft)}px` : ''};
  }
`
