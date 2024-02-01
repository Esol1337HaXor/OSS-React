import React from 'react'

import { Helmet } from 'react-helmet'

import HALSlider from '../components/hal-slider'
import './steuerung.css'

const Steuerung = (props) => {
  return (
    <div className="steuerung-container">
      <Helmet>
        <title>Steuerung - OSS</title>
        <meta property="og:title" content="Steuerung - OSS" />
      </Helmet>
      <HALSlider rootClassName="hal-slider-root-class-name4"></HALSlider>
    </div>
  )
}

export default Steuerung
