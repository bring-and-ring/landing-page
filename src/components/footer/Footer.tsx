import { Typography } from '@bring-n-ring/components'
import { IonButton, IonFooter, IonRouterLink } from '@ionic/react'
import * as React from 'react'
import footerContent from '../../content/footer.yml'
import { MainImage } from '../MainImage'
import Sozial from '../social/Sozial'
import styles from './Footer.module.css'
import Logo from '../../content/images/logos/logo.svg'

export type FooterProps = {
  btnProps?: HTMLDivElement
}

const Footer: React.FC<FooterProps> = ({ btnProps = {} }) => (
  <>
    <div className={`${styles.decoCircle}`}></div>
    <IonFooter className={`ion-no-border ${styles.footer}`}>
      <div className={styles.circle}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.grid}>
        <div className={styles.image}>
          <MainImage />
        </div>

        <div className={styles.text}>
          <Typography className={styles.headline} color="tertiary" size="h2">
            {footerContent.title}
          </Typography>
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
        <div className={styles.social}>
          <Sozial color="secondary" />
        </div>
        <ul className={styles.list}>
          {footerContent.menuItems.map(({ href, text }) => (
            <li className={styles.listItem} key={href}>
              <a href={href} className={styles.listLink}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </IonFooter>
  </>
)

export default Footer
