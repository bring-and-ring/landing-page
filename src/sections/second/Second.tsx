import * as React from 'react'
import Phone from '../../components/phone/Phone'
import styles from './second.module.css'

const Second: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.width}>
        <Phone>
          <div className={styles.img}>Text</div>
        </Phone>
      </div>
    </div>
  )
}

export default Second
