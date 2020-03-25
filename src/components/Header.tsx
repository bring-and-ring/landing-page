import { IonTitle, IonToolbar } from '@ionic/react'
import * as React from 'react'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <IonToolbar>
    <IonTitle to="/">{title}</IonTitle>
  </IonToolbar>
)

export default Header
