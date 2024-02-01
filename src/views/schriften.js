import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import AHeadline from '../components/a-headline'
import './schriften.css'

const Schriften = (props) => {
  return (
    <div className="schriften-container">
      <Helmet>
        <title>Schriften - OSS</title>
        <meta property="og:title" content="Schriften - OSS" />
      </Helmet>
      <Link to="/dateien" className="schriften-navlink">
        <ABackbutton className="schriften-component"></ABackbutton>
      </Link>
      <div className="schriften-content">
        <AHeadline
          text="Schrift"
          rootClassName="a-headline-root-class-name2"
          className="schriften-component1"
        ></AHeadline>
        <div className="schriften-container01">
          <span className="schriften-lvl Rubrik">GRUNDLAGEN</span>
          <Link to="/einbindung" className="schriften-navlink1">
            <div className="schriften-strom">
              <div className="schriften-titel">
                <span className="schriften-text Heading">Einbindung</span>
              </div>
              <div className="schriften-container02">
                <div className="schriften-container03">
                  <div className="schriften-container04">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="schriften-image"
                    />
                    <span className="schriften-text01 minitext">MEHRWERT</span>
                  </div>
                  <div className="schriften-container05">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="schriften-image01"
                    />
                    <span className="minitext schriften-text02">3 MIN.</span>
                  </div>
                </div>
                <div className="schriften-container06">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="schriften-image02"
                  />
                  <span className="schriften-text03 minitext">3 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="schriften-container07">
          <span className="schriften-lvl1 Rubrik">EINFACH</span>
          <Link to="/dateiformate" className="schriften-navlink2">
            <div className="schriften-punkt">
              <div className="schriften-titel1">
                <span className="schriften-text04 Heading">Dateiformate</span>
              </div>
              <div className="schriften-wertung">
                <div className="schriften-container08">
                  <div className="schriften-container09">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="schriften-image03"
                    />
                    <span className="schriften-text05 minitext">MEHRWERT</span>
                  </div>
                  <div className="schriften-container10">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="schriften-image04"
                    />
                    <span className="minitext schriften-text06">2 MIN.</span>
                  </div>
                  <div className="schriften-container11">
                    <img
                      alt="image"
                      src="/Icons/gray/2g.svg"
                      className="schriften-image05"
                    />
                    <span className="schriften-text07 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="schriften-container12">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="schriften-image06"
                  />
                  <span className="schriften-text08 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/woff2-optimierung" className="schriften-navlink3">
            <div className="schriften-serverwahl">
              <div className="schriften-titel2">
                <span className="schriften-text09 Heading">
                  WOFF2 optimierung
                </span>
              </div>
              <div className="schriften-container13">
                <div className="schriften-container14">
                  <div className="schriften-container15">
                    <img
                      alt="image"
                      src="/Icons/green/4.svg"
                      className="schriften-image07"
                    />
                    <span className="schriften-text10 minitext">MEHRWERT</span>
                  </div>
                  <div className="schriften-container16">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="schriften-image08"
                    />
                    <span className="minitext schriften-text11">2 MIN.</span>
                  </div>
                  <div className="schriften-container17">
                    <img
                      alt="image"
                      src="/Icons/gray/1g.svg"
                      className="schriften-image09"
                    />
                    <span className="schriften-text12 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="schriften-container18">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="schriften-image10"
                  />
                  <span className="schriften-text13 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Schriften
