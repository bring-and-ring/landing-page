import React, { useState, createRef } from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { Entry, Insta, OurMission } from '../sections'
import Footer from '../components/footer/Footer'
import entryData from '../content/home/sections/entry.yaml'
import instaData from '../content/home/sections/insta.yaml'
import ourMission from '../content/home/sections/our-mission.yaml'
import content from '../content/home/general.yml'
import { HubspotForm } from '../components/hubspot-form/HubspotForm'

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
          <Insta {...instaData} />
        </div>
        <OurMission {...ourMission} />
        <HubspotForm onClose={onClickHideForm} title={content.formTitle} body={content.formBody} visible={formVisible} />
        <Footer />
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
