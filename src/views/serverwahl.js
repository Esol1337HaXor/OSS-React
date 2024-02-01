import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import ServerwahlSlider from '../components/serverwahl-slider'
import './serverwahl.css'

const Serverwahl = (props) => {
  return (
    <div className="serverwahl-container">
      <Helmet>
        <title>Serverwahl - OSS</title>
        <meta property="og:title" content="Serverwahl - OSS" />
      </Helmet>
      <Link to="/hosting" className="serverwahl-navlink">
        <ABackbutton className="serverwahl-component"></ABackbutton>
      </Link>
      <ServerwahlSlider rootClassName="serverwahl-slider-root-class-name4"></ServerwahlSlider>
    </div>
  )
}

export default Serverwahl
