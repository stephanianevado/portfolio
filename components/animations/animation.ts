import { css, keyframes } from 'styled-components'

const fadeInRightKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeInRight = css`
  ${fadeInRightKeyframes} 200ms ease-out;
`

export const fadeInDownKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const fadeInDown = css`
  ${fadeInDownKeyframes} 200ms ease-out;
`

export const fadeInLeftKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeInLeft = css`
  ${fadeInLeftKeyframes} 200ms ease-out;
`

export const fadeInUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const fadeInUp = css`
  ${fadeInUpKeyframes} 200ms ease-out;
`

export const fadeOutRightKeyframes = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`
export const fadeOutRight = css`
  ${fadeOutRightKeyframes} 200ms ease-out;
`
export function getAnimation(name: string) {
  switch (name) {
    case 'fadeInRight':
      return fadeInRight
    case 'fadeInDown':
      return fadeInDown
    case 'fadeInLeft':
      return fadeInLeft
    case 'fadeInUp':
      return fadeInUp
    case 'fadeOutRight':
      return fadeOutRight
    default:
      throw new Error(`Unknown animation name: ${name}`)
  }
}
