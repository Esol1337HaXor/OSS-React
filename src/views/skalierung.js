import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import SkalierungSlider from '../components/skalierung-slider'
import './skalierung.css'

const Skalierung = (props) => {
  return (
    <div className="skalierung-container">
      <Helmet>
        <title>Skalierung - OSS</title>
        <meta property="og:title" content="Skalierung - OSS" />
      </Helmet>
      <Link to="/bilder" className="skalierung-navlink">
        <ABackbutton className="skalierung-component"></ABackbutton>
      </Link>
      <SkalierungSlider></SkalierungSlider>
    </div>
  )
}

export default Skalierung
