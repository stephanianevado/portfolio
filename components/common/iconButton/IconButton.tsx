import { Box } from 'components/common/box/Box'
import {
  StyledIcon,
  type IconButtonProps,
} from 'components/common/iconButton/IconButton.style'

export const IconButton = ({ icon: Icon, ...props }: IconButtonProps) => {
  const iconBase = <Box>{Icon && <Icon />}</Box>

  return <StyledIcon {...props}>{iconBase}</StyledIcon>
}
