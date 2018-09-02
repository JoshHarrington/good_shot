import React from 'react'
import styled from 'styled-components'

import logo from 'src/images/Good_shot_logo.svg'
import Layout from '../components/layout'

const LogoStyled = styled.img`
  max-width: 6rem;
  margin-bottom: 0;
`

const IndexPage = () => (
  <Layout>
    <h1><LogoStyled src={logo} alt="Good Shot Logo"></LogoStyled></h1>
    <h2>Capitalism with heart</h2>
    <p>Good Shot supports ideas putting people and planet before profit. We're all about actionable projects that help people, animals or have an environmental focus.</p>
    <hr/>
    <h2>Projects</h2>
    <ul>
      <li>Stockcubes</li>
    </ul>
  </Layout>
)

export default IndexPage
