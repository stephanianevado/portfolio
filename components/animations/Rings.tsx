import styled, { keyframes } from 'styled-components'

const ringColors = [
  'rgba(0, 255, 0, 0.897)',
  'rgba(0, 255, 33, 0.897)',
  'rgba(0, 255, 66, 0.897)',
  'rgba(0, 255, 99, 0.897)',
  'rgba(0, 255, 165, 0.897)',
  'rgba(0, 255, 198, 0.897)',
  'rgba(0, 255, 231, 0.897)',
  'rgba(0, 255, 255, 0.897)',
  'rgba(0, 222, 255, 0.897)',
  'rgba(0, 189, 255, 0.897)',
  'rgba(0, 156, 255, 0.897)',
  'rgba(0, 123, 255, 0.897)',
  'rgba(0, 90, 255, 0.897)',
  'rgba(0, 57, 255, 0.897)',
  'rgba(0, 24, 255, 0.897)',
  'rgba(0, 0, 255, 0.897)',
  'rgba(33, 0, 255, 0.897)',
  'rgba(66, 0, 255, 0.897)',
  'rgba(99, 0, 255, 0.897)',
  'rgba(132, 0, 255, 0.897)',
  'rgba(165, 0, 255, 0.897)',
  'rgba(198, 0, 255, 0.897)',
  'rgba(231, 0, 255, 0.897)',
]

const roundAndAround = keyframes`
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
`

const show = keyframes`
  to {
    opacity: 1;
  }
`

const Scene = styled.div`
  position: relative;
  width: 34vw;
  height: 34vw;
  margin: 0;
  perspective: 1000px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  transform: rotateX(45deg) rotateY(45deg);
  transform-style: preserve-3d;
`

const Ball = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  transform-style: preserve-3d;
  animation: ${roundAndAround} 16s 4s infinite linear;
`

const Ring = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 5px;
  border-style: dashed;
  border-radius: 50%;
  opacity: 0;
  animation: ${show} 16s 4s infinite linear;
`

export default function Rings() {
  return (
    <Scene>
      <Wrapper>
        <Ball>
          {ringColors.map((color, index) => (
            <Ring
              key={index}
              style={{
                color,
                transform: `rotateY(${index * 4}deg)`,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </Ball>
      </Wrapper>
    </Scene>
  )
}
