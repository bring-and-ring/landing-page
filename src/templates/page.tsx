import * as React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@bring-n-ring/components'

import Footer from '../components/footer/Footer'
import { Head } from '../components/head/Head'
import { HubspotForm } from '../components/hubspot-form/HubspotForm'
import footerProps from '../content/footer.yml'

import Page from '../components/Page'
import Container from '../components/container/Container'
import IndexLayout from '../layouts'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  const [formVisible, setFormVisible] = React.useState(false)
  const onClickShowForm = () => {
    setFormVisible(true)
  }
  const onClickHideForm = () => {
    setFormVisible(false)
  }

  return (
    <IndexLayout>
      <Page>
        <Head />
        <Container>
          <Typography color="primary" size="h1">
            {data.markdownRemark.frontmatter.title}
          </Typography>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <HubspotForm onClose={onClickHideForm} visible={formVisible} />
        </Container>
        <Footer {...footerProps} btnProps={{ onclick: onClickShowForm }} />
      </Page>
    </IndexLayout>
  )
}

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
