import React, { createRef, useState } from 'react'
import Footer from '../components/footer/Footer'
import { HubspotForm } from '../components/hubspot-form/HubspotForm'
import Page from '../components/Page'
import footerProps from '../content/home/footer.yaml'
import content from '../content/home/general.yaml'
import appDescriptionData from '../content/home/sections/app-description.yaml'
import entryData from '../content/home/sections/entry.yaml'
import instaData from '../content/home/sections/insta.yaml'
import ourMission from '../content/home/sections/our-mission.yaml'
import IndexLayout from '../layouts'
import { Entry, Insta, OurMission } from '../sections'
import AppDescription from '../sections/app-description/AppDescription'

const IndexPage = () => {
  const [formVisible, setFormVisible] = useState(false)
  const onClickShowForm = e => {
    setFormVisible(true)
  }
  const onClickHideForm = () => {
    setFormVisible(false)
  }
  const $second = createRef()
  const scrollToSecond = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    $second.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
  }
  return (
    <IndexLayout>
      <Page>
        <Entry linkProps={{ onclick: scrollToSecond }} btnProps={{ onclick: onClickShowForm }} {...entryData} />
        <div ref={$second}>
          <AppDescription {...appDescriptionData} btnProps={{ onclick: onClickShowForm }} />
        </div>
        <Insta {...instaData} />
        <OurMission {...ourMission} />
        <HubspotForm onClose={onClickHideForm} title={content.formTitle} body={content.formBody} visible={formVisible} />
        <Footer {...footerProps} btnProps={{ onclick: onClickShowForm }} />
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
