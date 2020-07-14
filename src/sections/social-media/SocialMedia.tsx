import { Typography } from '@bring-n-ring/components';
import '@bring-n-ring/components/css/ion-button.css';
import { IonRouterLink } from '@ionic/react';
import * as React from 'react';
import Sozial from '../../components/social/Sozial';
import { Slider, SliderProps } from './components/Slider';
import styles from './SocialMedia.module.css';

export type SocialMediaProps = {
  title: string
  subTitle: string
  body: string
  slider: SliderProps
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ title, subTitle, body, slider }) => {
  return (
    <section className={`${styles.wrap} md`}>
      <div className={`${styles.grid}`}>
        <div className={`${styles.titleContainer}`}>
          <Typography className={`${styles.title}`} color="primary" size="h2">
            {title}
          </Typography>
          <Typography className={`${styles.title}`} color="primary" size="h3">
            {subTitle}
          </Typography>
        </div>
        <div className={`${styles.secondary}`}>
          <Typography className={`${styles.body}`} size="p">
            {body}
          </Typography>
        </div>
        <div className={`${styles.socialLinksContainer}`}>
          <Typography className={`${styles.title}`} size="h3">
            Besuche uns in den sozialen Netzwerken
          </Typography>
          <Sozial color="primary" />
        </div>
        <div className={`${styles.primary} `}>
          <Slider {...slider} />
          <div className={`${styles.visualDeco} ${styles.decoCircle}`}></div>
          <div className={`${styles.visualDeco} ${styles.decoBox}`}></div>
        </div>
      </div>
    </section>
  );
}
