import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FaviconSlider from '../components/favicon-slider'
import ABackbutton from '../components/a-backbutton'
import './favicon.css'

const Favicon = (props) => {
  return (
    <div className="favicon-container">
      <Helmet>
        <title>Favicon - OSS</title>
        <meta property="og:title" content="Favicon - OSS" />
      </Helmet>
      <FaviconSlider></FaviconSlider>
      <Link to="/bilder" className="favicon-navlink">
        <ABackbutton className="favicon-component1"></ABackbutton>
      </Link>
    </div>
  )
}

export default Favicon
