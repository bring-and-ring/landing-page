import * as React from 'react'
import { Typography, Spacer, IonButton } from '@bring-n-ring/components'
import '@bring-n-ring/components/css/ion-button.css'
import '@bring-n-ring/components/css/typography.css'
import { IonRouterLink } from '@ionic/react'
import styles from './entry.module.css'
import { SideImage } from './components'
import { KnownFrom } from './components';
import { KnownFromProps } from './components/KnownFrom'
import { MainImage } from '../../components/MainImage'
import { Head } from '../../components/head/Head'

export type EntryProps = {
  title: string
  slug: string
  body: string
  btnText: string
  linkText: string
  sponsorsTitle: string
  btnProps: HTMLDivElement
  linkProps: HTMLAnchorElement
  sponsors?: Array<{
    src: string
    alt: string
  }>
  knownFrom: KnownFromProps
}

export const Entry: React.FC<EntryProps> = ({
  title,
  slug,
  body,
  btnText,
  linkText,
  sponsorsTitle,
  sponsors = [],
  btnProps,
  linkProps,
  knownFrom
}) => {
  return (
    <>
      <Head />
      <div className={`${styles.wrap} md`}>
        <div className={styles.content}>
          <Typography className={styles.title} color="primary" size="h1">
            {title}
          </Typography>
          <Typography size="h4">{slug}</Typography>
          <Typography className={styles.body} size="p">
            {body}
          </Typography>
          <div className={styles.alignCenter}>
            <Typography size="h5">{btnText}</Typography>
            <div className={styles.halfSpace}>
              <IonRouterLink href="https://apps.apple.com/de/app/bring-ring/id1506568739?l=de&ls=1" target="_blank">
                <img src="/appleappstore.png" height="46px" alt="Apple Store" />
              </IonRouterLink>
            </div>
            <div className={styles.halfSpace}>
              <IonRouterLink href="https://play.google.com/store/apps/details?id=com.bringandring.app" target="_blank">
                <img src="/googleplaystore.png" height="46px" alt="Google Play Store" />
              </IonRouterLink>
            </div>
          </div>
          <div className={styles.visualKnownFrom}>
            <KnownFrom {...knownFrom} />
          </div>
        </div>
        <div className={styles.visualKnownFrom}>
          <KnownFrom {...knownFrom} />
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.visualDeco} />
        <div className={styles.visualBanner} />
        <div className={styles.visualSide}>
          <SideImage />
        </div>
        <div className={styles.visualMain}>
          <MainImage />
        </div>
        <div className={styles.sponsors}>
          {sponsors.length >= 1 && (
            <Typography size="h4" elem="h4">
              {sponsorsTitle}
            </Typography>
          )}

          <ul className={styles.sponsorsList}>
            {sponsors.map(({ src, alt }) => (
              <li key={src} className={styles.sponsorsListItem}>
                <img src={src} alt={alt} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
