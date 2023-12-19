import styled from 'styled-components'

import type { Size } from 'types/index'

import multiplier from 'utils/multiplier'

export type SpacerProps = {
  size: Size
}

export const Spacer = styled.div`
  width: ${(props: SpacerProps) => multiplier(props.size)};
  height: ${(props: SpacerProps) => multiplier(props.size)};
`
