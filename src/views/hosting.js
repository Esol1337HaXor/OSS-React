import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import AHeadline from '../components/a-headline'
import './hosting.css'

const Hosting = (props) => {
  return (
    <div className="hosting-container">
      <Helmet>
        <title>Hosting - OSS</title>
        <meta property="og:title" content="Hosting - OSS" />
      </Helmet>
      <Link to="/" className="hosting-navlink">
        <ABackbutton className="hosting-component"></ABackbutton>
      </Link>
      <div className="hosting-content">
        <AHeadline
          text="Hosting"
          rootClassName="a-headline-root-class-name1"
          className="hosting-component1"
        ></AHeadline>
        <div className="hosting-container01">
          <span className="hosting-lvl Rubrik">GRUNDLAGEN</span>
          <Link to="/strom" className="hosting-navlink1">
            <div className="hosting-strom">
              <div className="hosting-titel">
                <span className="hosting-text Heading">Strom</span>
              </div>
              <div className="hosting-container02">
                <div className="hosting-container03">
                  <div className="hosting-container04">
                    <img
                      alt="image"
                      src="/Icons/green/3.svg"
                      className="hosting-image"
                    />
                    <span className="hosting-text01 minitext">MEHRWERT</span>
                  </div>
                  <div className="hosting-container05">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="hosting-image01"
                    />
                    <span className="minitext hosting-text02">6 MIN.</span>
                  </div>
                </div>
                <div className="hosting-container06">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="hosting-image02"
                  />
                  <span className="hosting-text03 minitext">6 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/serverwahl" className="hosting-navlink2">
            <div className="hosting-serverwahl">
              <div className="hosting-titel1">
                <span className="hosting-text04 Heading">Serverwahl</span>
              </div>
              <div className="hosting-container07">
                <div className="hosting-container08">
                  <div className="hosting-container09">
                    <img
                      alt="image"
                      src="/Icons/green/3.svg"
                      className="hosting-image03"
                    />
                    <span className="hosting-text05 minitext">MEHRWERT</span>
                  </div>
                  <div className="hosting-container10">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="hosting-image04"
                    />
                    <span className="minitext hosting-text06">4 MIN.</span>
                  </div>
                </div>
                <div className="hosting-container11">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="hosting-image05"
                  />
                  <span className="hosting-text07 minitext">4 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="hosting-container12">
          <span className="hosting-lvl1 Rubrik">EINFACH</span>
          <Link to="/cdn" className="hosting-navlink3">
            <div className="hosting-punkt">
              <div className="hosting-titel2">
                <span className="hosting-text08 Heading">CDN</span>
              </div>
              <div className="hosting-wertung">
                <div className="hosting-container13">
                  <div className="hosting-container14">
                    <img
                      alt="image"
                      src="/Icons/green/4.svg"
                      className="hosting-image06"
                    />
                    <span className="hosting-text09 minitext">MEHRWERT</span>
                  </div>
                  <div className="hosting-container15">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="hosting-image07"
                    />
                    <span className="minitext hosting-text10">2 MIN.</span>
                  </div>
                  <div className="hosting-container16">
                    <img
                      alt="image"
                      src="/Icons/gray/1g.svg"
                      className="hosting-image08"
                    />
                    <span className="hosting-text11 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="hosting-container17">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="hosting-image09"
                  />
                  <span className="hosting-text12 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/anbieterprfung" className="hosting-navlink4">
            <div className="hosting-serverwahl1">
              <div className="hosting-titel3">
                <span className="hosting-text13 Heading">Anbieterprüfung</span>
              </div>
              <div className="hosting-container18">
                <div className="hosting-container19">
                  <div className="hosting-container20">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="hosting-image10"
                    />
                    <span className="hosting-text14 minitext">MEHRWERT</span>
                  </div>
                  <div className="hosting-container21">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="hosting-image11"
                    />
                    <span className="minitext hosting-text15">5 MIN.</span>
                  </div>
                  <div className="hosting-container22">
                    <img
                      alt="image"
                      src="/Icons/gray/4g.svg"
                      className="hosting-image12"
                    />
                    <span className="hosting-text16 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="hosting-container23">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="hosting-image13"
                  />
                  <span className="hosting-text17 minitext">5 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="hosting-container24">
          <span className="hosting-lvl2 Rubrik">FORTGESCHRITTEN</span>
          <Link to="/dateiverarbeitung" className="hosting-navlink5">
            <div className="hosting-strom1">
              <div className="hosting-titel4">
                <span className="hosting-text18 Heading">
                  Dateiverarbeitung
                </span>
              </div>
              <div className="hosting-container25">
                <div className="hosting-container26">
                  <div className="hosting-container27">
                    <img
                      alt="image"
                      src="/Icons/green/2.svg"
                      className="hosting-image14"
                    />
                    <span className="hosting-text19 minitext">MEHRWERT</span>
                  </div>
                  <div className="hosting-container28">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="hosting-image15"
                    />
                    <span className="minitext hosting-text20">2 MIN.</span>
                  </div>
                  <div className="hosting-container29">
                    <img
                      alt="image"
                      src="/Icons/gray/1g.svg"
                      className="hosting-image16"
                    />
                    <span className="hosting-text21 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="hosting-container30">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="hosting-image17"
                  />
                  <span className="hosting-text22 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hosting
