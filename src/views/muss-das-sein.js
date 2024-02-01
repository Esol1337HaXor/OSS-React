import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import MussdasseinSlider from '../components/mussdassein-slider'
import './muss-das-sein.css'

const MussDasSein = (props) => {
  return (
    <div className="muss-das-sein-container">
      <Helmet>
        <title>Muss-das-Sein - OSS</title>
        <meta property="og:title" content="Muss-das-Sein - OSS" />
      </Helmet>
      <Link to="/bewegte-bilder" className="muss-das-sein-navlink">
        <ABackbutton className="muss-das-sein-component"></ABackbutton>
      </Link>
      <MussdasseinSlider rootClassName="mussdassein-slider-root-class-name4"></MussdasseinSlider>
    </div>
  )
}

export default MussDasSein
