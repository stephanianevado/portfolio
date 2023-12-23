import {
  StyledButton,
  type ButtonProps,
} from 'components/common/button/Button.style'
import { Spacer } from 'components/common/spacer/Spacer'
import { Theme } from 'components/Theme'

const { tertiaryBlack, secondaryGrey } = Theme.colors

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
  const size = isCompact ? 5 : 10
  const width = isCompact ? 38 : 40
  const padding = isCompact ? '2px' : '4px'

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
        padding={padding}
        direction="row"
        borderRadius={10}
        border="transparent"
        justifyContent="flex-start"
        bgHover={tertiaryBlack}
        onClick={onClick}
        onSubmit={onSubmit}
        {...props}>
        {boxBase}
      </StyledButton>
    )
  }
  return (
    <StyledButton
      bgHover={secondaryGrey}
      onClick={onClick}
      onSubmit={onSubmit}
      {...props}>
      {boxBase}
    </StyledButton>
  )
}
