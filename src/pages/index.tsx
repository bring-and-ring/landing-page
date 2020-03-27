import React, { useState } from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { Entry, Insta } from '../sections'
import entryData from '../content/home/sections/entry.yaml'
import instaData from '../content/home/sections/insta.yaml'
import { HubspotForm } from '../components/hubspot-form/HubspotForm'

const IndexPage = () => {
  const [formVisible, setFormVisible] = useState(false)
  const onClickShowForm = e => {
    e.preventDefault()
    setFormVisible(true)
  }
  return (
    <IndexLayout>
      <Page>
        <Entry btnProps={{ onclick: onClickShowForm }} {...entryData} />
        <Insta {...instaData} />
        <HubspotForm visible={formVisible} />
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
