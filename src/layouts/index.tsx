import { IonApp } from '@ionic/react'
import { graphql, StaticQuery } from 'gatsby'
import 'modern-normalize'
import * as React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import LayoutMain from '../components/LayoutMain'
import '../styles/global.css'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
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
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <IonApp>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </IonApp>
    )}
  />
)

export default IndexLayout
