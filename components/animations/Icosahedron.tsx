'use client'

import { useTranslations } from 'next-intl'

import { Tooltip } from 'components/Tooltip'

import styles from './Icosahedron.module.css'

export default function Icosahedron() {
  const t = useTranslations('icosahedron')
  return (
    <div className={styles.wrapper}>
      <div className={styles.polyhedron}>
        <Tooltip text={t('tooltip')}>
          <div className={styles.container}>
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className={styles.face} />
            ))}
          </div>
        </Tooltip>
      </div>
    </div>
  )
}
