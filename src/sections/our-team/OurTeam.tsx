import { Typography } from '@bring-n-ring/components'
import * as React from 'react'
import styles from './OurTeam.module.css'

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

export const OurTeam: React.FC<Props> = ({ left, right }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridItemLeft}>
        <div className={styles.left}>
          <img src="/team-collage.gif" alt="Apple Store" />
        </div>
      </div>
      <div className={styles.gridItemRight}>
        <div className={styles.right}>
          <Typography className={styles.title} color="primary" size="h1">
            {right.title}
          </Typography>
          <Typography size="p">{right.sponsorIntroduction}</Typography>
          <div className={styles.sponsorGrid}>
            {right.sponsors.map((sponsor) => (
              <div key={sponsor.src}>
                <img src={sponsor.src} alt={sponsor.alt} />
              </div>
            ))}
          </div>
          <Typography size="p">{right.body}</Typography>
        </div>
      </div>
    </div>
  )
}
