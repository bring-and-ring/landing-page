import { IonButton } from '@ionic/react'
import * as React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { Entry } from '../sections'
import entryData from '../content/home/sections/entry.yaml'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Entry {...entryData} />
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <IonButton color="secondary">Primary</IonButton>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
