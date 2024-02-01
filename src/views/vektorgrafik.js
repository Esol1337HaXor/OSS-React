import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import VektorgrafikSlider from '../components/vektorgrafik-slider'
import './vektorgrafik.css'

const Vektorgrafik = (props) => {
  return (
    <div className="vektorgrafik-container">
      <Helmet>
        <title>Vektorgrafik - OSS</title>
        <meta property="og:title" content="Vektorgrafik - OSS" />
      </Helmet>
      <Link to="/bilder" className="vektorgrafik-navlink">
        <ABackbutton className="vektorgrafik-component"></ABackbutton>
      </Link>
      <VektorgrafikSlider></VektorgrafikSlider>
    </div>
  )
}

export default Vektorgrafik
