import React, { useEffect, useState, FC } from 'react'
import { IonIcon } from '@ionic/react'
import { close } from 'ionicons/icons'
import { Typography, Spacer } from '@bring-n-ring/components'
import styles from './hubspot-form.module.css'
import '@bring-n-ring/components/css/spacer.css'

declare global {
  interface Window {
    hbspt: any
  }
}

export type HubspotFormProps = {
  visible: boolean
  title: string
  body: string
  onClose?: () => {}
}

export const HubspotForm: FC<HubspotFormProps> = ({ title, visible, body, onClose = () => {} }) => {
  const [hbspt, setHbspt] = useState<any>(null)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/shell.js'
    script.async = true
    script.crossorigin = true
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementsByTagName('head')[0]!.appendChild(script)
    const checkHubspotLoaded = setInterval(() => {
      if (window.hbspt !== undefined) {
        setHbspt(window.hbspt)
        clearInterval(checkHubspotLoaded)
      }
    }, 200)
  }, [])
  useEffect(() => {
    if (hbspt) {
      hbspt.forms.create({
        portalId: '7385167',
        target: '#HubspotHook',
        formId: 'af15f5bd-1ed5-44f7-af09-06f9d99923be'
      })
    }
  }, [hbspt])
  return (
    <div className={`${styles.wrap} ${visible ? styles.visible : ''}`}>
      <div className={styles.content}>
        <Typography size="h4">{title}</Typography>
        <Typography size="p" dangerouslySetInnerHTML={{ __html: body }} />
        <Spacer multiply={4} />
        <IonIcon onClick={onClose} icon={close} className={styles.closeIcon} />
        <div id="HubspotHook" className={styles.form} />
      </div>
    </div>
  )
}
