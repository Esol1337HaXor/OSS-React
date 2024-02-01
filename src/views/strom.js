import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import StromSlider from '../components/strom-slider'
import ABackbutton from '../components/a-backbutton'
import './strom.css'

const Strom = (props) => {
  return (
    <div className="strom-container">
      <Helmet>
        <title>Strom - OSS</title>
        <meta property="og:title" content="Strom - OSS" />
      </Helmet>
      <StromSlider rootClassName="strom-slider-root-class-name4"></StromSlider>
      <Link to="/hosting" className="strom-navlink">
        <ABackbutton className="strom-component1"></ABackbutton>
      </Link>
    </div>
  )
}

export default Strom
