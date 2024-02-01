import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import VideosSlider from '../components/videos-slider'
import ABackbutton from '../components/a-backbutton'
import './videos.css'

const Videos = (props) => {
  return (
    <div className="videos-container">
      <Helmet>
        <title>Videos - OSS</title>
        <meta property="og:title" content="Videos - OSS" />
      </Helmet>
      <VideosSlider></VideosSlider>
      <Link to="/bewegte-bilder" className="videos-navlink">
        <ABackbutton className="videos-component1"></ABackbutton>
      </Link>
    </div>
  )
}

export default Videos
