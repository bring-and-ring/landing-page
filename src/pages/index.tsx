import * as React from 'react'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { Entry, Insta } from '../sections'
import entryData from '../content/home/sections/entry.yaml'
import instaData from '../content/home/sections/insta.yaml'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Entry {...entryData} />
      <Insta {...instaData} />
    </Page>
  </IndexLayout>
)

export default IndexPage
