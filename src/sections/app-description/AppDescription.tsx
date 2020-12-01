import { Typography } from '@bring-n-ring/components'
import { IonButton, IonContent, IonIcon, IonSlide, IonSlides, IonRouterLink } from '@ionic/react'
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
const slideOptsApp = {
  initialSlide: 0,
  speed: 400,
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
      screen: string
      screen_alt: string
    }
  ]
  btnProps: HTMLDivElement
}

const AppDescription: React.FC<AppDescriptionProps> = ({ title, body, btnText, slides, faqText, btnProps }) => {
  const sliderPhone = React.createRef<HTMLIonSlidesElement>()
  const sliderDescription = React.createRef<HTMLIonSlidesElement>()
  const sliderApp = React.createRef<HTMLIonSlidesElement>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let animations: any[] = []

  const playAnimations = async () => {
    if (sliderPhone.current) {
      animations.forEach((anaimation) => anaimation.stop())
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

  React.useEffect(() => {
    setInterval(() => {
      sliderPhone.current?.update()
      sliderDescription.current?.update()
      sliderApp.current?.update();
    }, 2000)
  }, [])

  const onNext = () => {
    if (sliderPhone.current) {
      sliderPhone.current.slideNext()
    }
    if (sliderDescription.current) {
      sliderDescription.current.slideNext()
    }
    if (sliderApp.current) {
      sliderApp.current.slideNext();
    }
  }
  const onPrev = () => {
    if (sliderPhone.current) {
      sliderPhone.current.slidePrev()
    }
    if (sliderDescription.current) {
      sliderDescription.current.slidePrev()
    }
    if (sliderApp.current) {
      sliderApp.current.slidePrev();
    }
  }
  const phoneSlideChanged = async () => {
    if (sliderDescription.current && sliderPhone.current && sliderApp.current) {
      sliderDescription.current.slideTo(await sliderPhone.current.getActiveIndex())
      sliderApp.current.slideTo(await sliderPhone.current.getActiveIndex());
    }
    playAnimations()
  }

  const descriptionSlideChanged = async () => {
    if (sliderPhone.current && sliderDescription.current && sliderApp.current) {
      sliderPhone.current.slideTo(await sliderDescription.current.getActiveIndex())
      sliderApp.current.slideTo(await sliderDescription.current.getActiveIndex());
    }
  }

  const appSlideChanged = async () => {
    if (sliderPhone.current && sliderDescription.current && sliderApp.current) {
      sliderDescription.current.slideTo(await sliderApp.current.getActiveIndex())
      sliderPhone.current.slideTo(await sliderApp.current.getActiveIndex());
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
            <Typography size="h5">{btnText}</Typography>
            <div className={styles.halfSpace}>
              <IonRouterLink href="https://apps.apple.com/de/app/bring-ring/id1506568739?l=de&ls=1" target="_blank">
                <img src="/appleappstore.png" height="46px" alt="Apple Store" />
              </IonRouterLink>
            </div>
            <div className={styles.halfSpace}>
              <IonRouterLink href="https://play.google.com/store/apps/details?id=com.bringandring.app" target="_blank">
                <img src="/googleplaystore.png" height="46px" alt="Google Play Store" />
              </IonRouterLink>
            </div>
          </div>
        </div>
        <div className={styles.contentDeco} />
      </div>
      <div className={`${styles.visualDeco} ${styles.decoBox}`} />
      <div className={`${styles.visualDeco} ${styles.circle}`} />
      <div className={styles.screenshots}>
        <div>
          <div className={`${styles.app}`}>
            <IonSlides pager={false} options={slideOptsApp} ref={sliderApp} onIonSlideDidChange={appSlideChanged}>
              {slides.map((slide, index) => {
                return (
                  <IonSlide className={styles.appSlide}>
                    <div className={`${styles.screenContainer} `} >
                      <img className={`${styles.screen}`} src={slide.screen} alt={slide.screen_alt} />
                    </div>
                  </IonSlide>
                )
              })}
            </IonSlides>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.phone}>
          <IonSlides pager={true} options={slideOptsPhone} key="demo-phone" ref={sliderPhone} onIonSlideDidChange={phoneSlideChanged}>
            {slides.map((slide, index) => {
              animations = []
              return (
                <IonSlide className={styles.phoneSlide} key={slide.src}>
                  <div
                    className={styles.phoneSlide}
                    ref={(element) => {
                      if (element) animations[index] = createAnimation(element, slide.src)
                    }}
                  />
                </IonSlide>
              )
            })}
          </IonSlides>
        </div>
        <IonSlides options={slideOpts} key="demo-decription" ref={sliderDescription} onIonSlideDidChange={descriptionSlideChanged}>
          {slides.map((slide) => (
            <IonSlide key={slide.title}>
              <div>
                <Typography className={styles.title} size="h2">
                  {slide.title}
                </Typography>
                <Typography className={styles.body} size="p">
                  {slide.description}
                </Typography>
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
