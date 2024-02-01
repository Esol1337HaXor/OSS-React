import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import DateiformateSlider from '../components/dateiformate-slider'
import './dateiformate.css'

const Dateiformate = (props) => {
  return (
    <div className="dateiformate-container">
      <Helmet>
        <title>Dateiformate - OSS</title>
        <meta property="og:title" content="Dateiformate - OSS" />
      </Helmet>
      <Link to="/schriften" className="dateiformate-navlink">
        <ABackbutton className="dateiformate-component"></ABackbutton>
      </Link>
      <DateiformateSlider></DateiformateSlider>
    </div>
  )
}

export default Dateiformate
