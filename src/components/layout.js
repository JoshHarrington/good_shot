import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"

import '../css/app.css'

import AppleTouchIcon57 from 'src/images/favicons/apple-touch-icon-57x57.png'
import AppleTouchIcon114 from 'src/images/favicons/apple-touch-icon-114x114.png'
import AppleTouchIcon72 from 'src/images/favicons/apple-touch-icon-72x72.png'
import AppleTouchIcon144 from 'src/images/favicons/apple-touch-icon-144x144.png'
import AppleTouchIcon60 from 'src/images/favicons/apple-touch-icon-60x60.png'
import AppleTouchIcon120 from 'src/images/favicons/apple-touch-icon-120x120.png'
import AppleTouchIcon76 from 'src/images/favicons/apple-touch-icon-76x76.png'
import AppleTouchIcon152 from 'src/images/favicons/apple-touch-icon-152x152.png'

import Favicon196 from 'src/images/favicons/favicon-196x196.png'
import Favicon96 from 'src/images/favicons/favicon-96x96.png'
import Favicon32 from 'src/images/favicons/favicon-32x32.png'
import Favicon16 from 'src/images/favicons/favicon-16x16.png'
import Favicon128 from 'src/images/favicons/favicon-128.png'

import MsTile144 from 'src/images/favicons/mstile-144x144.png'
import MsTile70 from 'src/images/favicons/mstile-70x70.png'
import MsTile150 from 'src/images/favicons/mstile-150x150.png'
import MsTile310 from 'src/images/favicons/mstile-310x310.png'


const StyledBody = styled.div`
  padding: 2rem;
  margin: 0 auto;
  max-width: 57rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          link={[
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: Favicon16 },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: Favicon32 },
            { rel: 'icon', type: 'image/png', sizes: '96x96', href: Favicon96 },
            { rel: 'icon', type: 'image/png', sizes: '128x128', href: Favicon128 },
            { rel: 'icon', type: 'image/png', sizes: '196x196', href: Favicon196 },
            { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: AppleTouchIcon57 },
            { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: AppleTouchIcon60 },
            { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: AppleTouchIcon72 },
            { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: AppleTouchIcon76 },
            { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: AppleTouchIcon114 },
            { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: AppleTouchIcon120 },
            { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: AppleTouchIcon144 },
            { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: AppleTouchIcon152 },
          ]}
          meta={[
            { name: 'description', content: 'Good Shot' },
            { name: 'keywords', content: 'Good Shot' },
            { name: 'application-name', content: 'Good Shot' },
            { name: 'theme-color', content: '#F898F3' },
            { name: 'msapplication-TileColor', content: '#F898F3'  },
            { name: 'msapplication-TileImage', content: MsTile144  },
            { name: 'msapplication-square70x70logo', content: MsTile70  },
            { name: 'msapplication-square150x150logo', content: MsTile150  },
            { name: 'msapplication-wide310x150logo', content: MsTile310  },
            { name: 'msapplication-square310x310logo', content: MsTile310  },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <StyledBody>
          {children}
        </StyledBody>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
