import {
  StyledButton,
  type ButtonProps,
} from 'components/common/button/Button.style'
import { Spacer } from 'components/common/spacer/Spacer'

export enum Mode {
  STANDARD = 'STANDARD',
  ALTERNATIVE = 'ALTERNATIVE',
}

type Props = {
  mode?: Mode
}

export const Button = ({
  iconPosition = 'right',
  icon: Icon,
  onClick,
  onSubmit,
  children,
  mode = Mode.STANDARD,
  ...props
}: ButtonProps & Props) => {
  const boxBase = (
    <>
      {iconPosition === 'left' && Icon && (
        <>
          {mode === Mode.ALTERNATIVE ? (
            <Icon size={10} color={props.color} />
          ) : (
            <Icon size={4} />
          )}
          <Spacer size={2} />
        </>
      )}
      {children}
      {iconPosition === 'right' && Icon && (
        <>
          <Spacer size={2} />
          {mode === Mode.ALTERNATIVE ? (
            <Icon size={10} color={props.color} />
          ) : (
            <Icon size={4} />
          )}
        </>
      )}
    </>
  )
  if (mode === Mode.ALTERNATIVE) {
    return (
      <StyledButton
        width={40}
        padding="4px"
        direction="row"
        borderRadius={10}
        border="transparent"
        justifyContent="flex-start"
        onClick={onClick}
        onSubmit={onSubmit}
        {...props}>
        {boxBase}
      </StyledButton>
    )
  }
  return (
    <StyledButton onClick={onClick} onSubmit={onSubmit} {...props}>
      {boxBase}
    </StyledButton>
  )
}
