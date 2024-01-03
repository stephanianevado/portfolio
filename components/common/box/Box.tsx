import { StyledBox, type BoxProps } from 'components/common/box/Box.style'

export const Box = ({
  onMouseEnter,
  onMouseLeave,
  onClick,
  onSubmit,
  children,
  ...props
}: BoxProps) => {
  return (
    <StyledBox
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onSubmit={onSubmit}
      {...props}>
      {children}
    </StyledBox>
  )
}
