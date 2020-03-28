import * as React from 'react'
import { Typography } from '@bring-n-ring/components'
import styles from './OurMission.module.css'

type Props = {
  left: {
    title: string
    subTitle: string
    body: string
  }
  right: {
    title: string
    body: string
    sponsorIntroduction: string
    sponsors: Array<{
      src: string
      alt: string
    }>
  }
}

export const OurMission: React.FC<Props> = ({ left, right }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridItemLeft}>
        <div className={styles.left}>
          <Typography color="primary" size="h1">
            {left.title}
          </Typography>
          <Typography color="primary" size="h5">
            {left.subTitle}
          </Typography>
          <Typography size="p">{left.body}</Typography>
        </div>
      </div>
      <div className={styles.gridItemRight}>
        <div className={styles.right}>
          <Typography className={styles.title} color="primary" size="h1">
            {right.title}
          </Typography>
          <Typography size="p">{right.sponsorIntroduction}:</Typography>
          <div className={styles.sponsorGrid}>
            {right.sponsors.map(sponsor => (
              <div key={sponsor.src}>
                <img src={sponsor.src} alt={sponsor.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
