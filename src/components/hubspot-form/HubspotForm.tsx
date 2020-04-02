import React, { useEffect, useState, FC } from 'react'
import { IonIcon } from '@ionic/react'
import { close } from 'ionicons/icons'
import { Typography, Spacer } from '@bring-n-ring/components'
import styles from './hubspot-form.module.css'
import '@bring-n-ring/components/css/spacer.css'
import content from '../../content/form.yml'
import { noop } from '../../fns/noop'

declare global {
  interface Window {
    hbspt: {}
    dataLayer: Array<{ [key: string]: string }>
  }
}

export type HubspotFormProps = {
  visible: boolean
  onClose?: () => void
}

export const HubspotForm: FC<HubspotFormProps> = ({ visible, onClose = noop }) => {
  const [hbspt, setHbspt] = useState<{} | null>(null)
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

    // hack for hubspot throwing weird jQuery errors from
    // https://community.hubspot.com/t5/APIs-Integrations/Form-callback-throws-unrelated-jquery-error/m-p/232121
    // I know you feel like you should, but do not remove
    window.jQuery =
      window.jQuery ||
      (() => ({
        // these are all methods required by HubSpot
        change: noop,
        trigger: noop
      }))
  }, [])
  useEffect(() => {
    if (hbspt) {
      hbspt.forms.create({
        portalId: '7385167',
        target: '#HubspotHook',
        formId: 'af15f5bd-1ed5-44f7-af09-06f9d99923be',
        onFormSubmit: () => {
          if (!window.dataLayer) {
            window.dataLayer = []
          }
          window.dataLayer.push({
            eventName: 'betaSubscription'
          })
        }
      })
    }
  }, [hbspt])
  return (
    <div className={`${styles.wrap} ${visible ? styles.visible : ''}`}>
      <div className={styles.content}>
        <Typography size="h4">{content.formTitle}</Typography>
        <Typography size="p" dangerouslySetInnerHTML={{ __html: content.formBody }} />
        <Spacer multiply={4} />
        <IonIcon onClick={onClose} icon={close} className={styles.closeIcon} />
        <div id="HubspotHook" className={styles.form} />
      </div>
    </div>
  )
}
