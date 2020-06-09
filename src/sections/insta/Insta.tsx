import { Typography } from '@bring-n-ring/components'
import '@bring-n-ring/components/css/ion-button.css'
import { IonRouterLink } from '@ionic/react'
import * as React from 'react'
import Sozial from '../../components/social/Sozial'
import { Slider } from './components/Slider'
import styles from './insta.module.css'

export type InstaProps = {
  title: string
  subTitle: string
  body: string
}

export const Insta: React.FC<InstaProps> = ({ title, subTitle, body }) => {
  return (
    <div className={`${styles.wrap} md`}>
      <div className={styles.content}>
        <Typography className={styles.title} color="primary" size="h2">
          {title}
        </Typography>
        <Typography className={styles.title} color="primary" size="h3">
          {subTitle}
        </Typography>
        <Typography className={styles.body} size="p">
          {body}
        </Typography>
        <div className={styles.halfSpace}>
          <IonRouterLink href="https://www.mediaimpact.de/de/angebote/aktion-wirfuereuch" target="_blank">
            <img src="/wirfuereuch.png" class="wirfuereuch" alt="Aktion #wirfüreuch" />
          </IonRouterLink>
        </div>
        <div className={styles.halfSpace}>
          <IonRouterLink href="https://www.deutschland-gegen-corona.org/" target="_blank">
            <img src="/allefueralle.png" class="allefueralle" alt="#allefüralle" />
          </IonRouterLink>
        </div>
      </div>
      <div className={styles.visual}>
        <Slider />
        <div className={styles.visualDeco} />
        <div class="">
          <Sozial color="primary" />
        </div>
        <div>
          <ion-view view-title="title">
            <ion-content scroll="true">
              <iframe
                src="https://onedrive.live.com/embed?cid=252C811ECE22C595&resid=252C811ECE22C595%21107521&authkey=AOlmdY10tDZTEAA"
                width="165"
                height="128"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </ion-content>
          </ion-view>
        </div>
      </div>
    </div>
  )
}
