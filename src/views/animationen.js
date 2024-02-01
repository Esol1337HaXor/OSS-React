import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import AnimationSlider from '../components/animation-slider'
import './animationen.css'

const Animationen = (props) => {
  return (
    <div className="animationen-container">
      <Helmet>
        <title>Animationen - OSS</title>
        <meta property="og:title" content="Animationen - OSS" />
      </Helmet>
      <Link to="/bewegte-bilder" className="animationen-navlink">
        <ABackbutton className="animationen-component"></ABackbutton>
      </Link>
      <AnimationSlider></AnimationSlider>
    </div>
  )
}

export default Animationen
