import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import WorteSlider from '../components/worte-slider'
import './worte.css'

const Worte = (props) => {
  return (
    <div className="worte-container">
      <Helmet>
        <title>Worte - OSS</title>
        <meta property="og:title" content="Worte - OSS" />
      </Helmet>
      <Link to="/bilder" className="worte-navlink">
        <ABackbutton className="worte-component"></ABackbutton>
      </Link>
      <WorteSlider rootClassName="worte-slider-root-class-name4"></WorteSlider>
      <div>
        <div className="worte-container2">
          <Script
            html={`<link rel="stylesheet" href="animate.css">
    <script src="tpuserscript.js"></script>
<script src="typed.js"></script>
<script src="lottie-player.js"></script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Worte
