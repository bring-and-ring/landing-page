import { IonButton } from '@ionic/react'
import * as React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import Entry from '../sections/entry/Entry'

const entryI18n = {
  title: 'Kontaktlos einkaufen für Risikogruppen.',
  slug: 'sicher. bargeldlos. einfach.',
  body:
    'Du willst helfen? Ein paar Euro in der Krise dazu verdienen? Leben retten? Dann melde dich jetzt an und werde bringer oder lass bringen',
  btn: 'Beta-Tester werden',
  link: 'as'
}
const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Entry {...entryI18n} />
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
