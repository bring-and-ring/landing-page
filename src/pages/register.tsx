import * as React from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { Entry, Insta } from '../sections'
import entryData from '../content/home/sections/entry.yaml'
import instaData from '../content/home/sections/insta.yaml'
import { HubspotForm } from '../components/hubspot-form/HubspotForm'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <HubspotForm />
    </Page>
  </IndexLayout>
)

export default IndexPage
