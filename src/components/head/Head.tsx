import * as React from 'react'
import styles from './Head.module.css'
import Logo from '../../content/images/logos/logo.svg'

export const Head: React.FC = () => {
  return (
    <div className={styles.head}>
      <div className={styles.headCircle} />
      <a href="/">
        <Logo className={styles.headLogo} />
      </a>
    </div>
  )
}
