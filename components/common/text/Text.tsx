import { StyledText, type TextProps } from 'components/common/text/Text.style'

export const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>
}
