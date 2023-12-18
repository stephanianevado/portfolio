import { StyledBox, type BoxProps } from 'components/common/box/Box.style'

export const Box = ({ onClick, onSubmit, children, ...props }: BoxProps) => {
  return (
    <StyledBox onClick={onClick} onSubmit={onSubmit} {...props}>
      {children}
    </StyledBox>
  )
}
