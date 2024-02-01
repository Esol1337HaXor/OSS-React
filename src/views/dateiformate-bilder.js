import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import DateiformateBilderSlider from '../components/dateiformate-bilder-slider'
import './dateiformate-bilder.css'

const DateiformateBilder = (props) => {
  return (
    <div className="dateiformate-bilder-container">
      <Helmet>
        <title>DateiformateBilder - OSS</title>
        <meta property="og:title" content="DateiformateBilder - OSS" />
      </Helmet>
      <Link to="/bilder" className="dateiformate-bilder-navlink">
        <ABackbutton className="dateiformate-bilder-component"></ABackbutton>
      </Link>
      <DateiformateBilderSlider rootClassName="dateiformate-bilder-slider-root-class-name4"></DateiformateBilderSlider>
    </div>
  )
}

export default DateiformateBilder
