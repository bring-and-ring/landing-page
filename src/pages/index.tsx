import React, { createRef, useState } from 'react'
import Footer from '../components/footer/Footer'
import Fab from '../components/fab/Fab'
import { HubspotForm } from '../components/hubspot-form/HubspotForm'
import Page from '../components/Page'
import appDescriptionData from '../content/home/sections/app-description.yaml'
import entryData from '../content/home/sections/entry.yaml'
import SocialMediaData from '../content/home/sections/social-media.yaml'
import ourMission from '../content/home/sections/our-mission.yaml'
import knownFrom from '../content/home/sections/known-from.yaml'
import ourTeam from '../content/home/sections/our-team.yaml'
import IndexLayout from '../layouts'
import { Entry, OurMission, SocialMedia } from '../sections'
import AppDescription from '../sections/app-description/AppDescription'

const IndexPage = () => {
  const [formVisible, setFormVisible] = useState(false)
  const onClickShowForm = () => {
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
        <Fab />
        <Entry linkProps={{ onclick: scrollToSecond }} btnProps={{ onclick: onClickShowForm }} knownFrom={knownFrom} {...entryData} />
        <div ref={$second}>
          <AppDescription {...appDescriptionData} btnProps={{ onclick: onClickShowForm }} />
        </div>
        <SocialMedia {...SocialMediaData} />
        <OurMission {...ourMission} />
        <HubspotForm onClose={onClickHideForm} visible={formVisible} />
        <Footer btnProps={{ onclick: onClickShowForm }} />
      </Page>
    </IndexLayout>
  )
}

export default IndexPage

// trigger deployment
