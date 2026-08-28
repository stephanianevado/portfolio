'use client'

import { useTranslations } from 'next-intl'

import { useState } from 'react'


import { cn } from 'utils/cn'

import styles from './LightSaber.module.css'

export default function LightSaber() {
  const [isActive, setIsActive] = useState(false)
  const t = useTranslations('notFound')

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
    <div className={styles.container}>
      <div className={styles.saber}>
        <div className={cn(styles.blade, isActive && styles.bladeActive)} />
        <div className={styles.hilt}>
          <div
            className={styles.button}
            onClick={handleSaberClick}
            role="button"
            tabIndex={0}
            aria-label={t('toggleSaberAria')}
          />
        </div>
      </div>
    </div>
  )
}
