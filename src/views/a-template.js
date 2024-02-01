import React from 'react'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import './a-template.css'

const ATemplate = (props) => {
  return (
    <div className="a-template-container">
      <Helmet>
        <title>A-Template - OSS</title>
        <meta property="og:title" content="A-Template - OSS" />
      </Helmet>
      <ABackbutton className="a-template-component"></ABackbutton>
    </div>
  )
}

export default ATemplate
