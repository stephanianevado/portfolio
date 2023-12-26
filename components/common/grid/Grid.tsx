import { StyledGrid, type GridProps } from 'components/common/grid/Grid.style'

export const Grid = ({ children, ...props }: GridProps) => {
  return <StyledGrid {...props}>{children}</StyledGrid>
}
