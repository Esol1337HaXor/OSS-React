import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import AHeadline from '../components/a-headline'
import './analyse.css'

const Analyse = (props) => {
  return (
    <div className="analyse-container">
      <Helmet>
        <title>Analyse - OSS</title>
        <meta property="og:title" content="Analyse - OSS" />
      </Helmet>
      <Link to="/" className="analyse-navlink">
        <ABackbutton className="analyse-component"></ABackbutton>
      </Link>
      <div className="analyse-content">
        <AHeadline
          text="Analyse"
          rootClassName="a-headline-root-class-name5"
          className="analyse-component1"
        ></AHeadline>
        <div className="analyse-container01">
          <span className="analyse-lvl Rubrik">EINFACH</span>
          <Link to="/animationen" className="analyse-navlink1">
            <div className="analyse-punkt">
              <div className="analyse-titel">
                <span className="analyse-text Heading">Carboncalculator</span>
              </div>
              <div className="analyse-wertung">
                <div className="analyse-container02">
                  <div className="analyse-container03">
                    <img
                      alt="image"
                      src="/Icons/green/1.svg"
                      className="analyse-image"
                    />
                    <span className="analyse-text01 minitext">MEHRWERT</span>
                  </div>
                  <div className="analyse-container04">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="analyse-image01"
                    />
                    <span className="minitext analyse-text02">2 MIN.</span>
                  </div>
                  <div className="analyse-container05">
                    <img
                      alt="image"
                      src="/Icons/gray/1g.svg"
                      className="analyse-image02"
                    />
                    <span className="analyse-text03 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="analyse-container06">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="analyse-image03"
                  />
                  <span className="analyse-text04 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/videos" className="analyse-navlink2">
            <div className="analyse-serverwahl">
              <div className="analyse-titel1">
                <span className="analyse-text05 Heading">Beacon</span>
              </div>
              <div className="analyse-container07">
                <div className="analyse-container08">
                  <div className="analyse-container09">
                    <img
                      alt="image"
                      src="/Icons/green/3.svg"
                      className="analyse-image04"
                    />
                    <span className="analyse-text06 minitext">MEHRWERT</span>
                  </div>
                  <div className="analyse-container10">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="analyse-image05"
                    />
                    <span className="minitext analyse-text07">1MIN.</span>
                  </div>
                  <div className="analyse-container11">
                    <img
                      alt="image"
                      src="/Icons/gray/1g.svg"
                      className="analyse-image06"
                    />
                    <span className="analyse-text08 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="analyse-container12">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="analyse-image07"
                  />
                  <span className="analyse-text09 minitext">1 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/videos" className="analyse-navlink3">
            <div className="analyse-serverwahl1">
              <div className="analyse-titel2">
                <span className="analyse-text10">
                  <span className="Heading">GiftOfSpeed</span>
                  <br></br>
                </span>
              </div>
              <div className="analyse-container13">
                <div className="analyse-container14">
                  <div className="analyse-container15">
                    <img
                      alt="image"
                      src="/Icons/green/1.svg"
                      className="analyse-image08"
                    />
                    <span className="analyse-text13 minitext">MEHRWERT</span>
                  </div>
                  <div className="analyse-container16">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="analyse-image09"
                    />
                    <span className="minitext analyse-text14">1MIN.</span>
                  </div>
                  <div className="analyse-container17">
                    <img
                      alt="image"
                      src="/Icons/gray/1g.svg"
                      className="analyse-image10"
                    />
                    <span className="analyse-text15 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="analyse-container18">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="analyse-image11"
                  />
                  <span className="analyse-text16 minitext">1 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/videos" className="analyse-navlink4">
            <div className="analyse-serverwahl2">
              <div className="analyse-titel3">
                <span className="analyse-text17">
                  <span className="Heading">Cloudinary</span>
                  <br></br>
                </span>
              </div>
              <div className="analyse-container19">
                <div className="analyse-container20">
                  <div className="analyse-container21">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="analyse-image12"
                    />
                    <span className="analyse-text20 minitext">MEHRWERT</span>
                  </div>
                  <div className="analyse-container22">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="analyse-image13"
                    />
                    <span className="minitext analyse-text21">1MIN.</span>
                  </div>
                  <div className="analyse-container23">
                    <img
                      alt="image"
                      src="/Icons/gray/2g.svg"
                      className="analyse-image14"
                    />
                    <span className="analyse-text22 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="analyse-container24">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="analyse-image15"
                  />
                  <span className="analyse-text23 minitext">1 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="analyse-container25">
          <span className="analyse-lvl1 Rubrik">FORTGESCHRITTEN</span>
          <Link to="/animationen" className="analyse-navlink5">
            <div className="analyse-punkt1">
              <div className="analyse-titel4">
                <span className="analyse-text24 Heading">Build with</span>
              </div>
              <div className="analyse-wertung1">
                <div className="analyse-container26">
                  <div className="analyse-container27">
                    <img
                      alt="image"
                      src="/Icons/green/2.svg"
                      className="analyse-image16"
                    />
                    <span className="analyse-text25 minitext">MEHRWERT</span>
                  </div>
                  <div className="analyse-container28">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="analyse-image17"
                    />
                    <span className="minitext analyse-text26">2 MIN.</span>
                  </div>
                  <div className="analyse-container29">
                    <img
                      alt="image"
                      src="/Icons/gray/2g.svg"
                      className="analyse-image18"
                    />
                    <span className="analyse-text27 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="analyse-container30">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="analyse-image19"
                  />
                  <span className="analyse-text28 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="analyse-container31">
          <span className="analyse-lvl2 Rubrik">EXPERTE</span>
          <Link to="/animationen" className="analyse-navlink6">
            <div className="analyse-punkt2">
              <div className="analyse-titel5">
                <span className="analyse-text29 Heading">Pagespeed</span>
              </div>
              <div className="analyse-wertung2">
                <div className="analyse-container32">
                  <div className="analyse-container33">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="analyse-image20"
                    />
                    <span className="analyse-text30 minitext">MEHRWERT</span>
                  </div>
                  <div className="analyse-container34">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="analyse-image21"
                    />
                    <span className="minitext analyse-text31">2 MIN.</span>
                  </div>
                  <div className="analyse-container35">
                    <img
                      alt="image"
                      src="/Icons/gray/5g.svg"
                      className="analyse-image22"
                    />
                    <span className="analyse-text32 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="analyse-container36">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="analyse-image23"
                  />
                  <span className="analyse-text33 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Analyse
