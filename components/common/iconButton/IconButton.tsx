import {
  StyledIcon,
  type IconButtonProps,
} from 'components/common/iconButton/IconButton.style'

export const IconButton = ({
  onClick,
  icon: Icon,
  ...props
}: IconButtonProps) => {
  return (
    <StyledIcon onClick={onClick} {...props}>
      {<Icon />}
    </StyledIcon>
  )
}
