import { IonIcon } from '@ionic/react'
import { logoFacebook, logoInstagram, logoLinkedin } from 'ionicons/icons'
import * as React from 'react'
import styles from './sozial.module.css'

export type SozialProps = {
  color: string
}

const Sozial: React.FC<SozialProps> = ({ color }) => (
  <div className={styles.sozialLinks}>
    <a href="https://www.instagram.com/bringandring/" className={styles.link}>
      <IonIcon className={styles.icon} color={color} icon={logoInstagram} size="large" />
    </a>
    <a href="https://www.facebook.com/BringandRing-104577077864229" className={styles.link}>
      <IonIcon className={styles.icon} color={color} icon={logoFacebook} size="large" />
    </a>
    <a href="https://www.linkedin.com/company/bring-ring" className={styles.link}>
      <IonIcon className={styles.icon} color={color} icon={logoLinkedin} size="large" />
    </a>
  </div>
)

export default Sozial
