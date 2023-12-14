import { Box } from 'components/common/box/Box'

import {
  StyledButton,
  type ButtonProps,
} from 'components/common/button/Button.style'

export const Button = ({
  iconPosition = 'right',
  icon: Icon,
  children,
  ...props
}: ButtonProps) => {
  const boxBase = (
    <Box>
      {iconPosition === 'left' && Icon && <Icon />}
      {children}
      {iconPosition === 'right' && Icon && <Icon />}
    </Box>
  )

  return <StyledButton {...props}>{boxBase}</StyledButton>
}
