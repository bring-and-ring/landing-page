import { Typography } from '@bring-n-ring/components'
import '@bring-n-ring/components/css/ion-button.css'
import * as React from 'react'
import Sozial from '../../components/social/Sozial'
import { Slider } from './components/Slider'
import styles from './insta.module.css'

export type InstaProps = {
  title: string
  body: string
}

export const Insta: React.FC<InstaProps> = ({ title, body }) => {
  return (
    <div className={`${styles.wrap} md`}>
      <div className={styles.content}>
        <Typography className={styles.title} color="primary" size="h1">
          {title}
        </Typography>
        <Typography className={styles.body} size="p">
          {body}
        </Typography>
        <Sozial />
      </div>
      <div className={styles.visual}>
        <Slider />
        <div className={styles.visualDeco} />
      </div>
    </div>
  )
}
