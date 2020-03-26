import * as React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

export const MainImage: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/entry-1-mock.png" }) {
            childImageSharp {
              fluid(maxWidth: 700) {
                # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={data => {
        return <Img fluid={data.file.childImageSharp.fluid} />
      }}
    />
  )
}
