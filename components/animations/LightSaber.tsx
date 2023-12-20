import { useState } from 'react'

import styled, { keyframes } from 'styled-components'

import { Theme } from 'components/Theme'

const bladeColor = 'red'

const { primaryGrey } = Theme.colors

const wiggle = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  5% {
    transform: rotateZ(5deg);
  }
  10%, 15% {
    transform: rotateZ(-5deg);
  }
  15%, 100% {
    transform: rotateZ(0deg);
  }
`

const Container = styled.div`
  position: relative;
  width: 22px;
`

const Saber = styled.div`
  animation: ${wiggle} 2.5s ease-in-out infinite;
  animation-delay: 3s;
`

const Blade = styled.div`
  ${({ isActive }: { isActive: boolean }) =>
    isActive
      ? `
        position: relative;
        transition: all 4s ease-in-out;
        height: 500px;
        background: ${bladeColor};
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        box-shadow: 0 0 20px ${bladeColor};
      `
      : `transition: all 15s ease-in-out;`}
`

const Hilt = styled.div`
  height: 100px;
  width: 20px;
  border: 1px solid ${primaryGrey};
  background: ${primaryGrey};
  border-top: 4px solid lighten(${primaryGrey}, 10%);
  border-bottom: 4px solid lighten(${primaryGrey}, 10%);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`

const Button = styled.div`
  height: 20px;
  width: 8px;
  border: 2px solid ${primaryGrey};
  background: ${bladeColor};
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`

export default function LightSaber() {
  const [isActive, setIsActive] = useState(false)

  const playSound = (filename: string) => {
    const audio = new Audio(filename)
    audio.play()
  }

  const handleSaberClick = () => {
    if (isActive) {
      playSound('/audios/saber-off.mp3')
    } else {
      playSound('/audios/saber-on.mp3')
      playSound('/audios/vader.mp3')
    }
    setIsActive(!isActive)
  }

  return (
    <Container>
      <Saber>
        <Blade isActive={isActive} />
        <Hilt>
          <Button onClick={handleSaberClick} />
        </Hilt>
      </Saber>
    </Container>
  )
}
