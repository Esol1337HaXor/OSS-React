import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import CDNSlider from '../components/cdn-slider'
import './cdn.css'

const CDN = (props) => {
  return (
    <div className="cdn-container">
      <Helmet>
        <title>CDN - OSS</title>
        <meta property="og:title" content="CDN - OSS" />
      </Helmet>
      <Link to="/hosting" className="cdn-navlink">
        <ABackbutton className="cdn-component"></ABackbutton>
      </Link>
      <CDNSlider rootClassName="cdn-slider-root-class-name4"></CDNSlider>
    </div>
  )
}

export default CDN
