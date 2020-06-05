import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import * as React from 'react'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <IonHeader>
    <IonToolbar>
      <IonTitle to="/">{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
)

export default Header
