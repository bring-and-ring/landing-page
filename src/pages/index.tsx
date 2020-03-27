import React, { useState } from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { Entry, Insta, OurMission } from '../sections'
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
  return (
    <IndexLayout>
      <Page>
        <Entry btnProps={{ onclick: onClickShowForm }} {...entryData} />
        <Insta {...instaData} />
        <OurMission {...ourMission} />
        <HubspotForm onClose={onClickHideForm} title={content.formTitle} body={content.formBody} visible={formVisible} />
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
