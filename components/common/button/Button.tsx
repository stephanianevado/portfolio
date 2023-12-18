import { Box } from 'components/common/box/Box'

import {
  StyledButton,
  type ButtonProps,
} from 'components/common/button/Button.style'
import { Spacer } from 'components/common/spacer/Spacer'

export const Button = ({
  iconPosition = 'right',
  icon: Icon,
  children,
  ...props
}: ButtonProps) => {
  const boxBase = (
    <Box direction="row" alignItems="center" justifyContent="center">
      {iconPosition === 'left' && Icon && (
        <>
          <Icon size={4} />
          <Spacer size={2} />
        </>
      )}
      {children}
      {iconPosition === 'right' && Icon && (
        <>
          <Spacer size={2} />
          <Icon size={4} />
        </>
      )}
    </Box>
  )

  return <StyledButton {...props}>{boxBase}</StyledButton>
}
