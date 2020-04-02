import { IonIcon, IonSlide, IonSlides } from '@ionic/react'
import { graphql, StaticQuery } from 'gatsby'
import { arrowBack, arrowForward } from 'ionicons/icons'
import * as React from 'react'
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
      render={(data) => {
        return (
          <div className={styles.wrap}>
            <IonSlides ref={$slider} className={styles.slider} options={slideOpts}>
              {data.allInstaNode.edges.map(({ node }) => (
                <IonSlide key={node.thumbnails[4].src} className={styles.slide}>
                  <img src={node.thumbnails[4].src} alt="" />
                </IonSlide>
              ))}
            </IonSlides>
            <IonIcon onClick={onPrev} className={styles.iconLeft} color="primary" icon={arrowBack} />
            <IonIcon onClick={onNext} className={styles.iconRight} color="primary" icon={arrowForward} />
          </div>
        )
      }}
    />
  )
}
