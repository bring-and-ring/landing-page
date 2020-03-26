import * as React from 'react'
import { Typography, Spacer, IonButton } from '@bring-n-ring/components'
import '@bring-n-ring/components/css/ion-button.css'
import { IonRouterLink } from '@ionic/react'
import styles from './entry.module.css'
import { MainImage, SideImage } from './components'
import Container from '../../components/Container'

export type EntryProps = {
  title: string
  slug: string
  body: string
  btnText: string
  linkText: string
  sponsorsTitle: string
  sponsors: [
    {
      link: string
      src: string
      alt: string
    }
  ]
}

const Entry: React.FC<EntryProps> = ({ title, slug, body, btnText, linkText, sponsorsTitle, sponsors }) => {
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
        <div className={styles.alignCenter}>
          <IonButton>{btnText}</IonButton>
          <Spacer multiply={2} />
          <IonRouterLink>{linkText}</IonRouterLink>
        </div>
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
      <div className={styles.sponsors}>
        <Typography size="h4" elem="h4">
          {sponsorsTitle}
        </Typography>
        <ul className={styles.sponsorsList}>
          {sponsors.map(({ link, src, alt }) => (
            <li key={src} className={styles.sponsorsListItem}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Entry
