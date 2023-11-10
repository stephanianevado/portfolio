import styled from 'styled-components'

import type { SpacerProps } from 'types/index'

import multiplier from 'utils/multiplier'

export const Spacer = styled.div`
  width: ${(props: SpacerProps) => multiplier(props.size)};
`
