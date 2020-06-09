import { Typography } from '@bring-n-ring/components'
import * as React from 'react'
import styles from './OurMission.module.css'
import { IonSlides, IonSlide, IonContent, IonImg } from '@ionic/react'

const slideOpts = {
  initialSlide: 1,
  speed: 400
}

type Props = {
  left: {
    title: string
    subTitle: string
    body: string
  }
  right: {
    title: string
    body: string
    partnerIntroduction: string
    sponsorIntroduction: string
    supporterIntroduction: string
    partners: Array<{
      src: string
      alt: string
    }>
    sponsors: Array<{
      src: string
      alt: string
    }>
    supporters: Array<{
      src: string
      alt: string
    }>
  }
}

export const OurMission: React.FC<Props> = ({ left, right }) => {
  //console.log(right.partners)
  return (
    <div className={styles.grid}>
      <div className={styles.gridItemLeft}>
        <div className={styles.left}>
          <Typography color="primary" size="h1">
            {left.title}
          </Typography>
          <Typography color="primary" size="h5">
            {left.subTitle}
          </Typography>
          <Typography size="p">{left.body}</Typography>
        </div>
      </div>
      <div className={styles.gridItemRight}>
        <div className={styles.right}>
          <Typography className={styles.title} color="primary" size="h1">
            {right.title}
          </Typography>
          <Typography size="h5">{right.partnerIntroduction}</Typography>
          <div className={styles.sponsorGrid}>
            {right.partners.map((partner) => (
              <div key={partner.src} data-sponsor={["netrocks", "netlight"].includes(partner.alt) ? partner.alt : ""}>
                <img src={partner.src} alt={partner.alt} />
              </div>
            ))}
          </div>
          <Typography size="h5">{right.sponsorIntroduction}</Typography>
          <div className={styles.sponsorGrid}>
            {right.sponsors.map((sponsor) => (
              <div key={sponsor.src}>
                <img src={sponsor.src} alt={sponsor.alt} />
              </div>
            ))}
          </div>
          <Typography size="h5">{right.supporterIntroduction}</Typography>
          <div className={styles.sponsorGrid}>
            {right.supporters.map((supporter) => (
              <div key={supporter.src}>
                <img src={supporter.src} alt={supporter.alt} />
              </div>
            ))}
          </div>
          <Typography size="p">{right.body}</Typography>
        </div>
      </div>
    </div>
  )
}
