import { IonButton } from '@ionic/react'
import * as React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import Entry from '../sections/entry/Entry'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Entry title="Kontaktlos einkaufen für Risikogruppen." />
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
