import * as React from 'react'
import { Typography, Spacer } from '@bring-n-ring/components'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import styles from './entry.module.css'

export type EntryProps = {
  title: string
}

const Entry: React.FC<EntryProps> = ({ title }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "images/entry-mocks.png" }) {
            childImageSharp {
              fixed(width: 800, height: 800) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div className={styles.wrap}>
            <Spacer type="within" multiply={5}>
              <div className={styles.content}>
                <Typography className={styles.title} color="primary" size="h1">
                  {title}
                </Typography>
              </div>
              <div className={styles.visual}>
                <Img fixed={data.file.childImageSharp.fixed} />
              </div>
            </Spacer>
          </div>
        )
      }}
    />
  )
}

export default Entry
