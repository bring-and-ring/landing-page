import * as React from 'react'
import { IonFooter, IonButton } from '@ionic/react'
import { Typography } from '@bring-n-ring/components'
import styles from './Footer.module.css'
import { MainImage } from '../MainImage'

const Footer: React.FC = () => (
  <IonFooter className={`ion-no-border ${styles.footer}`}>
    <div className={styles.grid}>
      <div className={styles.image}>
        <MainImage />
      </div>

      <div className={styles.text}>
        <Typography className={styles.headline} color="tertiary" size="h2">
          Mach mit und helfe.
        </Typography>
        <IonButton className={styles.button} color="dark">
          Werde Beta-Tester
        </IonButton>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="/kontakt" className={styles.listLink}>
              Kontakt
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/impressum" className={styles.listLink}>
              Impressum & Datenschutz
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.social}>social</div>
    </div>
  </IonFooter>
)

export default Footer
