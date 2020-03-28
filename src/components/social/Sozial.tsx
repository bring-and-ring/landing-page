import { IonIcon } from '@ionic/react'
import { logoFacebook, logoInstagram, logoLinkedin } from 'ionicons/icons'
import * as React from 'react'
import styles from './sozial.module.css'

const Sozial: React.FC = () => (
  <div className={styles.sozialLinks}>
    <a href="https://www.instagram.com/bringandring/" className={styles.link}>
      <IonIcon className={styles.icon} color="secondary" icon={logoInstagram} size="large" />
    </a>
    <a href="https://www.facebook.com/BringandRing-104577077864229" className={styles.link}>
      <IonIcon className={styles.icon} color="secondary" icon={logoFacebook} size="large" />
    </a>
    <a href="https://www.linkedin.com/company/bring-ring" className={styles.link}>
      <IonIcon className={styles.icon} color="secondary" icon={logoLinkedin} size="large" />
    </a>
  </div>
)

export default Sozial
