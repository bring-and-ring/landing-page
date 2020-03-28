import { Typography } from '@bring-n-ring/components'
import { IonButton, IonFooter } from '@ionic/react'
import * as React from 'react'
import footerContent from '../../content/footer.yml'
import { MainImage } from '../MainImage'
import Sozial from '../social/Sozial'
import styles from './Footer.module.css'

export type FooterProps = {
  btnProps?: HTMLDivElement
}

const Footer: React.FC<FooterProps> = ({ btnProps = {} }) => (
  <IonFooter className={`ion-no-border ${styles.footer}`}>
    <div className={styles.grid}>
      <div className={styles.image}>
        <MainImage />
      </div>

      <div className={styles.text}>
        <Typography className={styles.headline} color="tertiary" size="h2">
          {footerContent.title}
        </Typography>
        <IonButton className={styles.button} color="dark" {...btnProps}>
          {footerContent.btnText}
        </IonButton>
        <ul className={styles.list}>
          {footerContent.menuItems.map(({ href, text }) => (
            <li className={styles.listItem}>
              <a href={href} className={styles.listLink}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.social}>
        <Sozial />
      </div>
    </div>
  </IonFooter>
)

export default Footer
