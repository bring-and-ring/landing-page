import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { IonSlides, IonSlide, IonIcon } from '@ionic/react'
import { arrowBack, arrowForward } from 'ionicons/icons'
import { createRef } from 'react'
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
  const $slider = createRef()
  const onNext = () => {
    $slider.current.slideNext()
  }
  const onPrev = () => {
    $slider.current.slidePrev()
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          allInstaNode {
            edges {
              node {
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
            <IonSlides ref={$slider} className={styles.slider} options={slideOpts}>
              {data.allInstaNode.edges.map(({ node }, index) => (
                <IonSlide key={index} className={styles.slide}>
                  <img src={node.thumbnails[4].src} alt="" />
                </IonSlide>
              ))}
            </IonSlides>
            <IonIcon onClick={onNext} className={styles.iconBack} color="primary" icon={arrowBack} />
            <IonIcon onClick={onPrev} className={styles.iconForward} color="primary" icon={arrowForward} />
          </div>
        )
      }}
    />
  )
}
