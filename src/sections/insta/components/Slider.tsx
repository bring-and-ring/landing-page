import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { IonSlides, IonSlide, IonIcon } from '@ionic/react'
import { arrowBack, arrowForward } from 'ionicons/icons'
import styles from './slider.module.css'

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 1,
  slideClass: styles.slide,
  slideActiveClass: styles.slideActive
}

export const Slider: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allInstaNode {
            edges {
              node {
                caption
                # Only available with the public api scraper
                thumbnails {
                  src
                  config_width
                  config_height
                }
                dimensions {
                  height
                  width
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div className={styles.wrap}>
            <IonSlides className={styles.slider} options={slideOpts}>
              {data.allInstaNode.edges.map(({ node }) => (
                <IonSlide key={node.caption} className={styles.slide}>
                  <img src={node.thumbnails[4].src} alt={node.caption} />
                </IonSlide>
              ))}
            </IonSlides>
            <IonIcon className={styles.iconBack} color="primary" icon={arrowBack} />
            <IonIcon className={styles.iconForward} color="primary" icon={arrowForward} />
          </div>
        )
      }}
    />
  )
}
