import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import EinbindungSlider from '../components/einbindung-slider'
import './einbindung.css'

const Einbindung = (props) => {
  return (
    <div className="einbindung-container">
      <Helmet>
        <title>Einbindung - OSS</title>
        <meta property="og:title" content="Einbindung - OSS" />
      </Helmet>
      <Link to="/schriften" className="einbindung-navlink">
        <ABackbutton className="einbindung-component"></ABackbutton>
      </Link>
      <EinbindungSlider></EinbindungSlider>
    </div>
  )
}

export default Einbindung
