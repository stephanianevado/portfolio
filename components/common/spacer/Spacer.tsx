import type { Size } from 'types/index'

import { px } from 'utils/buildStyle'

export type SpacerProps = {
  size: Size
}

export const Spacer = ({ size }: SpacerProps) => {
  const value = px(size)
  return <div style={{ width: value, height: value, flexShrink: 0 }} />
}
