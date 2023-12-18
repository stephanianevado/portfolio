import {
  StyledIcon,
  type IconButtonProps,
} from 'components/common/iconButton/IconButton.style'

export const IconButton = ({ icon: Icon, ...props }: IconButtonProps) => {
  return <StyledIcon {...props}>{<Icon />}</StyledIcon>
}
