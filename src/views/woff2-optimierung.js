import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import WOFFOptimierungSlider from '../components/woff-optimierung-slider'
import './woff2-optimierung.css'

const WOFF2Optimierung = (props) => {
  return (
    <div className="woff2-optimierung-container">
      <Helmet>
        <title>WOFF2-optimierung - OSS</title>
        <meta property="og:title" content="WOFF2-optimierung - OSS" />
      </Helmet>
      <Link to="/schriften" className="woff2-optimierung-navlink">
        <ABackbutton className="woff2-optimierung-component"></ABackbutton>
      </Link>
      <WOFFOptimierungSlider></WOFFOptimierungSlider>
    </div>
  )
}

export default WOFF2Optimierung
