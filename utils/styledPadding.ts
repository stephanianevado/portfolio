import { css } from 'styled-components'

import type { PaddingProps } from 'types/index'

import multiplier from 'utils/multiplier'

export const styledPadding = css<PaddingProps>`
  && {
    padding: ${(props: PaddingProps) =>
      props.padding ? `${multiplier(props.padding)}px` : ''};
    padding-top: ${(props: PaddingProps) =>
      props.paddingVertical ? `${multiplier(props.paddingVertical)}px` : ''};
    padding-right: ${(props: PaddingProps) =>
      props.paddingHorizontal
        ? `${multiplier(props.paddingHorizontal)}px`
        : ''};
    padding-bottom: ${(props: PaddingProps) =>
      props.paddingVertical ? `${multiplier(props.paddingVertical)}px` : ''};
    padding-left: ${(props: PaddingProps) =>
      props.paddingHorizontal
        ? `${multiplier(props.paddingHorizontal)}px`
        : ''};
    padding-top: ${(props: PaddingProps) =>
      props.paddingTop ? `${multiplier(props.paddingTop)}px` : ''};
    padding-right: ${(props: PaddingProps) =>
      props.paddingRight ? `${multiplier(props.paddingRight)}px` : ''};
    padding-bottom: ${(props: PaddingProps) =>
      props.paddingBottom ? `${multiplier(props.paddingBottom)}px` : ''};
    padding-left: ${(props: PaddingProps) =>
      props.paddingLeft ? `${multiplier(props.paddingLeft)}px` : ''};
  }
`
