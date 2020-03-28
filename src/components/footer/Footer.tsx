import * as React from 'react'
import { IonFooter, IonButton } from '@ionic/react'
import { Typography } from '@bring-n-ring/components'
import styles from './Footer.module.css'
import { MainImage } from '../MainImage'

export type FooterProps = {
  title: string
  btnProps?: HTMLDivElement
  btnText: string
  menuItems?: Array<{
    href: string
    text: string
  }>
}

const Footer: React.FC<FooterProps> = ({ btnProps = {}, menuItems = [], title, btnText }) => (
  <IonFooter className={`ion-no-border ${styles.footer}`}>
    <div className={styles.grid}>
      <div className={styles.image}>
        <MainImage />
      </div>

      <div className={styles.text}>
        <Typography className={styles.headline} color="tertiary" size="h2">
          {title}
        </Typography>
        <IonButton className={styles.button} color="dark" {...btnProps}>
          {btnText}
        </IonButton>
        <ul className={styles.list}>
          {menuItems.map(({ href, text }) => (
            <li className={styles.listItem}>
              <a href={href} className={styles.listLink}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.social}>social</div>
    </div>
  </IonFooter>
)

export default Footer
