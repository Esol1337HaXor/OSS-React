import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import ASCISlider from '../components/asci-slider'
import './asci.css'

const ASCI = (props) => {
  return (
    <div className="asci-container">
      <Helmet>
        <title>ASCI - OSS</title>
        <meta property="og:title" content="ASCI - OSS" />
      </Helmet>
      <Link to="/bilder" className="asci-navlink">
        <ABackbutton className="asci-component"></ABackbutton>
      </Link>
      <ASCISlider></ASCISlider>
    </div>
  )
}

export default ASCI
