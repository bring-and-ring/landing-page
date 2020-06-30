import * as React from 'react'
import styles from './KnownFrom.module.css'
import { Typography } from '@bring-n-ring/components'

export type KnownFromProps = {
  content: {
    title: string
    logos: Array<{
      src: string
      alt: string
    }>
  }
}

export const KnownFrom: React.FC<KnownFromProps> = ({ content }) => {
  return (
    <div className={styles.container}>
      {/* <Typography className={styles.title} color="primary" size="h1">
        {content.title}
      </Typography> */}
      <Typography size="h5">{content.title}</Typography>
      <div className={styles.grid}>
        {content.logos.map((logo: any) => (
          <div key={logo.src} className={styles.gridItem}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
