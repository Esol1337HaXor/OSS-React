import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import AHeadline from '../components/a-headline'
import './bewegte-bilder.css'

const BewegteBilder = (props) => {
  return (
    <div className="bewegte-bilder-container">
      <Helmet>
        <title>Bewegte-Bilder - OSS</title>
        <meta property="og:title" content="Bewegte-Bilder - OSS" />
      </Helmet>
      <Link to="/dateien" className="bewegte-bilder-navlink">
        <ABackbutton className="bewegte-bilder-component"></ABackbutton>
      </Link>
      <div className="bewegte-bilder-content">
        <AHeadline
          text="Bewegtbild"
          rootClassName="a-headline-root-class-name3"
          className="bewegte-bilder-component1"
        ></AHeadline>
        <div className="bewegte-bilder-container01">
          <span className="bewegte-bilder-lvl Rubrik">GRUNDLAGEN</span>
          <Link to="/muss-das-sein" className="bewegte-bilder-navlink1">
            <div className="bewegte-bilder-strom">
              <div className="bewegte-bilder-titel">
                <span className="bewegte-bilder-text Heading">
                  Hinterfragen
                </span>
              </div>
              <div className="bewegte-bilder-container02">
                <div className="bewegte-bilder-container03">
                  <div className="bewegte-bilder-container04">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="bewegte-bilder-image"
                    />
                    <span className="bewegte-bilder-text01 minitext">
                      MEHRWERT
                    </span>
                  </div>
                  <div className="bewegte-bilder-container05">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bewegte-bilder-image01"
                    />
                    <span className="minitext bewegte-bilder-text02">
                      1MIN.
                    </span>
                  </div>
                </div>
                <div className="bewegte-bilder-container06">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bewegte-bilder-image02"
                  />
                  <span className="bewegte-bilder-text03 minitext">1 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="bewegte-bilder-container07">
          <span className="bewegte-bilder-lvl1 Rubrik">EINFACH</span>
          <Link to="/animationen" className="bewegte-bilder-navlink2">
            <div className="bewegte-bilder-punkt">
              <div className="bewegte-bilder-titel1">
                <span className="bewegte-bilder-text04 Heading">
                  Animationen
                </span>
              </div>
              <div className="bewegte-bilder-wertung">
                <div className="bewegte-bilder-container08">
                  <div className="bewegte-bilder-container09">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="bewegte-bilder-image03"
                    />
                    <span className="bewegte-bilder-text05 minitext">
                      MEHRWERT
                    </span>
                  </div>
                  <div className="bewegte-bilder-container10">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bewegte-bilder-image04"
                    />
                    <span className="minitext bewegte-bilder-text06">
                      2 MIN.
                    </span>
                  </div>
                  <div className="bewegte-bilder-container11">
                    <img
                      alt="image"
                      src="/Icons/gray/4g.svg"
                      className="bewegte-bilder-image05"
                    />
                    <span className="bewegte-bilder-text07 minitext">
                      AUFWAND
                    </span>
                  </div>
                </div>
                <div className="bewegte-bilder-container12">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bewegte-bilder-image06"
                  />
                  <span className="bewegte-bilder-text08 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/videos" className="bewegte-bilder-navlink3">
            <div className="bewegte-bilder-serverwahl">
              <div className="bewegte-bilder-titel2">
                <span className="bewegte-bilder-text09 Heading">Videos</span>
              </div>
              <div className="bewegte-bilder-container13">
                <div className="bewegte-bilder-container14">
                  <div className="bewegte-bilder-container15">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="bewegte-bilder-image07"
                    />
                    <span className="bewegte-bilder-text10 minitext">
                      MEHRWERT
                    </span>
                  </div>
                  <div className="bewegte-bilder-container16">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bewegte-bilder-image08"
                    />
                    <span className="minitext bewegte-bilder-text11">
                      1MIN.
                    </span>
                  </div>
                  <div className="bewegte-bilder-container17">
                    <img
                      alt="image"
                      src="/Icons/gray/1g.svg"
                      className="bewegte-bilder-image09"
                    />
                    <span className="bewegte-bilder-text12 minitext">
                      AUFWAND
                    </span>
                  </div>
                </div>
                <div className="bewegte-bilder-container18">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bewegte-bilder-image10"
                  />
                  <span className="bewegte-bilder-text13 minitext">1 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BewegteBilder
