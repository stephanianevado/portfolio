import isPropValid from '@emotion/is-prop-valid'

// This implements the default behavior from styled-components v5
export const shouldForwardProp = (propName: string, element: string) => {
  if (typeof element === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName)
  }
  // For other elements, forward all props
  return true
}
