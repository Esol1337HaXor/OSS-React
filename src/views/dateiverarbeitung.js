import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import DateiverarbeitungSlider from '../components/dateiverarbeitung-slider'
import './dateiverarbeitung.css'

const Dateiverarbeitung = (props) => {
  return (
    <div className="dateiverarbeitung-container">
      <Helmet>
        <title>Dateiverarbeitung - OSS</title>
        <meta property="og:title" content="Dateiverarbeitung - OSS" />
      </Helmet>
      <Link to="/hosting" className="dateiverarbeitung-navlink">
        <ABackbutton className="dateiverarbeitung-component"></ABackbutton>
      </Link>
      <DateiverarbeitungSlider rootClassName="dateiverarbeitung-slider-root-class-name4"></DateiverarbeitungSlider>
    </div>
  )
}

export default Dateiverarbeitung
