import { IonText } from '@ionic/react'
import * as React from 'react'
import styles from './Container.module.css'

const Container: React.FC = ({ children }) => (
  <div className={styles.container}>
    <IonText>{children}</IonText>
  </div>
)

export default Container
