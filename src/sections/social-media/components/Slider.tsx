import * as React from 'react'
import Img from 'gatsby-image'
import styles from './Slider.module.css'
import { Typography } from '@bring-n-ring/components'
import { IonIcon, IonSlide, IonSlides } from '@ionic/react'
import { arrowBack, arrowForward } from 'ionicons/icons'
import { createRef } from 'react'

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 1,
  slideClass: styles.slide,
  //slideActiveClass: styles.slideActive,
  centeredSlides: true
}

export type SliderProps = {
  images: Array<{
    src: string
    alt: string
  }>
}

export const Slider: React.FC<SliderProps> = ({ images }) => {
  const $slider: any = createRef<HTMLIonSlidesElement>();
  const onNext = () => {
    $slider.current.slideNext();
  }
  const onPrev = () => {
    $slider.current.slidePrev();
  }

  React.useEffect(() => {
    setInterval(() => {
      $slider.current.update();
    }, 2000)
  }, [])

  return (
    <div className={`${styles.wrap}`}>
      <IonSlides ref={$slider} className={`${styles.slider}`} options={slideOpts}>
        {images.map((images: any) => (
          <IonSlide className={`${styles.slide}`}>
            <div>
              <img src={images.src} alt={images.alt} />
            </div>
          </IonSlide>
        ))}
      </IonSlides>
      <IonIcon onClick={onPrev} className={`${styles.iconLeft} ${styles.icon}`} color="primary" icon={arrowBack}></IonIcon>
      <IonIcon onClick={onNext} className={`${styles.iconRight} ${styles.icon}`} color="primary" icon={arrowForward}></IonIcon>
    </div>
  );
}
