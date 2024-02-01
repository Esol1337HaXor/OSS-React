import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import AHeadline from '../components/a-headline'
import './dateien.css'

const Dateien = (props) => {
  return (
    <div className="dateien-container">
      <Helmet>
        <title>Dateien - OSS</title>
        <meta property="og:title" content="Dateien - OSS" />
      </Helmet>
      <Link to="/" className="dateien-navlink">
        <ABackbutton className="dateien-component"></ABackbutton>
      </Link>
      <div className="dateien-content">
        <Link to="/" className="dateien-navlink1">
          <AHeadline
            text="Dateien"
            rootClassName="a-headline-root-class-name"
            className="dateien-component1"
          ></AHeadline>
        </Link>
        <Link to="/schriften" className="dateien-navlink2">
          <div className="dateien-analyse">
            <span className="dateien-text Heading">Schrift</span>
          </div>
        </Link>
        <Link to="/bilder" className="dateien-navlink3">
          <div className="dateien-dateien">
            <span className="dateien-text1 Heading">Bilder</span>
          </div>
        </Link>
        <Link to="/bewegte-bilder" className="dateien-navlink4">
          <div className="dateien-hosting">
            <span className="dateien-text2 Heading">Bewegte Bilder</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Dateien
