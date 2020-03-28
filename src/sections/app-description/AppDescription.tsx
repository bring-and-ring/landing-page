import { Typography } from '@bring-n-ring/components'
import { IonButton, IonContent, IonIcon, IonSlide, IonSlides } from '@ionic/react'
import { arrowBack, arrowForward } from 'ionicons/icons'
import * as lottie from 'lottie-web'
import * as React from 'react'
import Phone from '../../components/phone/Phone'
import styles from './app-description.module.css'

const slideOptsPhone = {
  initialSlide: 0,
  speed: 400,
  slideClass: styles.phoneSlide,
  slideActiveClass: styles.phoneSlider
}
const slideOpts = {
  initialSlide: 0,
  speed: 400
}

export type AppDescriptionProps = {
  title: string
  body: string
  btnText: string
  faqText: string
  slides: [
    {
      src: string
      alt: string
      title: string
      description: string
    }
  ]
  btnProps: HTMLDivElement
}

const AppDescription: React.FC<AppDescriptionProps> = ({ title, body, btnText, slides, faqText, btnProps }) => {
  const sliderPhone = React.createRef<HTMLIonSlidesElement>()
  const sliderDescription = React.createRef<HTMLIonSlidesElement>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let animations: any[] = []

  const playAnimations = async () => {
    if (sliderPhone.current) {
      animations.forEach(anaimation => anaimation.stop())
      animations[await sliderPhone.current.getActiveIndex()].play()
    }
  }

  const createAnimation = (container: HTMLElement, path: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path
    })
  }

  const onNext = () => {
    if (sliderPhone.current) {
      sliderPhone.current.slideNext()
    }
    if (sliderDescription.current) {
      sliderDescription.current.slideNext()
    }
  }
  const onPrev = () => {
    if (sliderPhone.current) {
      sliderPhone.current.slidePrev()
    }
    if (sliderDescription.current) {
      sliderDescription.current.slidePrev()
    }
  }
  const phoneSlideChanged = async () => {
    if (sliderDescription.current && sliderPhone.current) {
      sliderDescription.current.slideTo(await sliderPhone.current.getActiveIndex())
    }
    playAnimations()
  }

  const descriptionSlideChanged = async () => {
    if (sliderPhone.current && sliderDescription.current) {
      sliderPhone.current.slideTo(await sliderDescription.current.getActiveIndex())
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <Typography className={styles.title} color="primary" size="h1">
            {title}
          </Typography>
          <Typography className={styles.body} size="p">
            {body}
          </Typography>
          <div className={styles.alignCenter}>
            <IonButton {...btnProps}>{btnText}</IonButton>
          </div>
        </div>
        <div className={styles.contentDeco} />
      </div>
      <div className={styles.phone}>
        <Phone>
          <IonContent>
            <IonSlides options={slideOptsPhone} key="demo-phone" ref={sliderPhone} onIonSlideDidChange={phoneSlideChanged}>
              {slides.map((slide, index) => {
                animations = []
                return (
                  <IonSlide className={styles.phoneSlide} key={slide.src}>
                    <div
                      className={styles.phoneSlide}
                      ref={element => {
                        if (element) animations[index] = createAnimation(element, slide.src)
                      }}
                    />
                  </IonSlide>
                )
              })}
            </IonSlides>
          </IonContent>
        </Phone>
      </div>
      <div className={styles.description}>
        <IonSlides options={slideOpts} key="demo-decription" ref={sliderDescription} onIonSlideDidChange={descriptionSlideChanged}>
          {slides.map(slide => (
            <IonSlide key={slide.title}>
              <div>
                <Typography className={styles.title} size="h2">
                  {slide.title}
                </Typography>
                <Typography className={styles.body} size="p">
                  {slide.description}
                </Typography>
                <br />
                <a className={styles.faqLink} href="/faq">
                  {faqText}
                </a>
              </div>
            </IonSlide>
          ))}
        </IonSlides>
        <div className={styles.sliderControl}>
          <IonIcon className={styles.iconLeft} onClick={onPrev} color="primary" icon={arrowBack} />
          <IonIcon className={styles.iconRight} onClick={onNext} color="primary" icon={arrowForward} />
        </div>
      </div>
    </div>
  )
}

export default AppDescription
