import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import AnbieterprfungSlider from '../components/anbieterprfung-slider'
import './anbieterprfung.css'

const Anbieterprfung = (props) => {
  return (
    <div className="anbieterprfung-container">
      <Helmet>
        <title>Anbieterprfung - OSS</title>
        <meta property="og:title" content="Anbieterprfung - OSS" />
      </Helmet>
      <Link to="/hosting" className="anbieterprfung-navlink">
        <ABackbutton className="anbieterprfung-component"></ABackbutton>
      </Link>
      <AnbieterprfungSlider rootClassName="anbieterprfung-slider-root-class-name4"></AnbieterprfungSlider>
    </div>
  )
}

export default Anbieterprfung
