module.exports = {
  siteMetadata: {
    title: 'bring & ring',
    description: 'Website for bring & ring.',
    keywords: 'bring, ring, corona, neighbour, supermarket',
    siteUrl: 'https://bringandring.de',
    author: {
      name: 'Bring & Ring',
      url: 'https://bringandring.de',
      email: 'info@bringandring.de'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `bringandring`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bring and ring`,
        short_name: `Bring and ring`,
        start_url: `/`,
        background_color: `##FAF8F7`,
        theme_color: `##4DCB8B`,
        display: `standalone`,
        icon: `src/content/images/logos/logo-white.png`
      }
    },
    {
      resolve: 'gatsby-plugin-pathdata',
      options: {
        matchNodeType: 'MarkdownRemark',
        extract: [
          {
            name: 'lang',
            selector: /.+\/.*([a-z]{2})+\.md$/,
            replacer: '$1'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-162115016-1'],
        pluginConfig: {
          head: true
        }
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
