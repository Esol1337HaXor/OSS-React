import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import AExtendetcontent from '../components/a-extendetcontent'
import ABackbutton from '../components/a-backbutton'
import './funktionstest.css'

const Funktionstest = (props) => {
  return (
    <div className="funktionstest-container">
      <Helmet>
        <title>funktionstest - OSS</title>
        <meta property="og:title" content="funktionstest - OSS" />
      </Helmet>
      <AExtendetcontent rootClassName="a-extendetcontent-root-class-name"></AExtendetcontent>
      <div className="funktionstest-container1">
        <div className="funktionstest-container2">
          <Script
            html={`<script>
    var typed = new Typed('#typed', {
        strings: [" Wie möchtest du das Web Huete verbessern?"],
        typeSpeed: 14,
        startDelay: 0,
    
        showCursor: false,
        
        
        loop: false,
    });
</script>`}
          ></Script>
        </div>
      </div>
      <span id="typed" className="funktionstest-text HAL">
        Text
      </span>
      <Link to="/" className="funktionstest-navlink">
        <ABackbutton
          rootClassName="a-backbutton-root-class-name"
          className="funktionstest-component1"
        ></ABackbutton>
      </Link>
    </div>
  )
}

export default Funktionstest
