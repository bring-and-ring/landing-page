import * as React from 'react'
import { Typography, Spacer, IonButton } from '@bring-n-ring/components'
import '@bring-n-ring/components/css/ion-button.css'
import styles from './entry.module.css'
import { MainImage, SideImage } from './components'
import Container from '../../components/Container'

export type EntryProps = {
  title: string
  slug: string
  body: string
  btn: string
  link: string
}

const Entry: React.FC<EntryProps> = ({ title, slug, body, btn }) => {
  return (
    <div className={`${styles.wrap} md`}>
      <div className={styles.content}>
        <Typography className={styles.title} color="primary" size="h1">
          {title}
        </Typography>
        <Typography className={styles.subTitle} size="h4">
          {slug}
        </Typography>
        <Typography className={styles.body} size="p">
          {body}
        </Typography>
        <IonButton>{btn}</IonButton>
      </div>
      <div className={styles.visual}>
        <div className={styles.visualDeco} />
        <div className={styles.visualSide}>
          <SideImage />
        </div>
        <div className={styles.visualMain}>
          <MainImage />
        </div>
      </div>
    </div>
  )
}

export default Entry
