import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import BildbearbeitungSlider from '../components/bildbearbeitung-slider'
import './bildbearbeitung.css'

const Bildbearbeitung = (props) => {
  return (
    <div className="bildbearbeitung-container">
      <Helmet>
        <title>Bildbearbeitung - OSS</title>
        <meta property="og:title" content="Bildbearbeitung - OSS" />
      </Helmet>
      <Link to="/bilder" className="bildbearbeitung-navlink">
        <ABackbutton className="bildbearbeitung-component"></ABackbutton>
      </Link>
      <BildbearbeitungSlider rootClassName="bildbearbeitung-slider-root-class-name4"></BildbearbeitungSlider>
    </div>
  )
}

export default Bildbearbeitung
