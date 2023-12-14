import { StyledBox, type BoxProps } from 'components/common/box/Box.style'

export const Box = ({ children, ...props }: BoxProps) => {
  return <StyledBox {...props}>{children}</StyledBox>
}
