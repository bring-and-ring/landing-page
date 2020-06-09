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
  // hotfix for slider not starting on page load
  // FIX ME
  React.useEffect(() => {
    setTimeout(() => {
      $slider.current.update()
    }, 300)
  }, [])
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
              <IonSlide className={styles.slide}>
                <img className={styles.slideImage} width="300" src="/story/insta-slide-1.jpg" alt="" />
              </IonSlide>
              <IonSlide className={styles.slide}>
                <img className={styles.slideImage} src="/story/insta-slide-2.jpg" alt="" />
              </IonSlide>
            </IonSlides>
            <IonIcon onClick={onPrev} className={styles.iconLeft} color="primary" icon={arrowBack} />
            <IonIcon onClick={onNext} className={styles.iconRight} color="primary" icon={arrowForward} />
          </div>
        )
      }}
    />
  )
}
