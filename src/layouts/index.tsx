import { IonApp } from '@ionic/react'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/typography.css'
import { graphql, StaticQuery } from 'gatsby'
import 'modern-normalize'
import * as React from 'react'
import Helmet from 'react-helmet'
import LayoutMain from '../components/LayoutMain'
import '../styles/global.css'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
      image: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <div id="root">
        <IonApp>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
              { property: 'og:image', content: data.site.siteMetadata.image },
              { property: 'og:title', content: data.site.siteMetadata.title },
              { property: 'og:description', content: data.site.siteMetadata.description },
              { property: 'og:url', content: data.site.siteMetadata.siteUrl },
              // disable robots on staging
              process.env.BUILD_ENV === 'staging' ? { name: 'robots', content: 'noindex' } : {}
            ]}
          />
          {/* <Header title={data.site.siteMetadata.title} /> */}
          <LayoutMain>{children}</LayoutMain>
        </IonApp>
      </div>
    )}
  />
)

export default IndexLayout
