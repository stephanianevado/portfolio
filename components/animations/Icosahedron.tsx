import { Tooltip } from 'components/Tooltip'

import styles from './Icosahedron.module.css'

export default function Icosahedron() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.polyhedron}>
        <Tooltip text="I created this animation using pure CSS">
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
