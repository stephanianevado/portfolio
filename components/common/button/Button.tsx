import {
  StyledButton,
  type ButtonProps,
} from 'components/common/button/Button.style'
import { Spacer } from 'components/common/spacer/Spacer'
import { Theme } from 'components/Theme'

const { hoverAlternative, hoverStandard } = Theme.colors

export enum Mode {
  STANDARD = 'STANDARD',
  ALTERNATIVE = 'ALTERNATIVE',
}

type Props = {
  isCompact?: boolean
  mode?: Mode
}

export const Button = ({
  iconPosition = 'right',
  icon: Icon,
  onClick,
  onSubmit,
  children,
  isCompact = false,
  mode = Mode.STANDARD,
  ...props
}: ButtonProps & Props) => {
  const size = isCompact ? 6 : 10
  const width = isCompact ? 42 : 40

  const boxBase = (
    <>
      {iconPosition === 'left' && Icon && (
        <>
          {mode === Mode.ALTERNATIVE ? (
            <Icon size={size} color={props.color} />
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
            <Icon size={size} color={props.color} />
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
        width={width}
        padding={1}
        direction="row"
        borderRadius={10}
        border="transparent"
        justifyContent="flex-start"
        bgHover={hoverAlternative}
        onClick={onClick}
        onSubmit={onSubmit}
        {...props}>
        {boxBase}
      </StyledButton>
    )
  }
  return (
    <StyledButton
      bgHover={hoverStandard}
      onClick={onClick}
      onSubmit={onSubmit}
      {...props}>
      {boxBase}
    </StyledButton>
  )
}
