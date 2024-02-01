import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import AHeadline from '../components/a-headline'
import './bilder.css'

const Bilder = (props) => {
  return (
    <div className="bilder-container">
      <Helmet>
        <title>Bilder - OSS</title>
        <meta property="og:title" content="Bilder - OSS" />
      </Helmet>
      <Link to="/dateien" className="bilder-navlink">
        <ABackbutton className="bilder-component"></ABackbutton>
      </Link>
      <div className="bilder-content">
        <AHeadline
          text="Bilder"
          rootClassName="a-headline-root-class-name4"
          className="bilder-component1"
        ></AHeadline>
        <div className="bilder-container01">
          <span className="bilder-lvl Rubrik">GRUNDLAGEN</span>
          <Link to="/worte" className="bilder-navlink1">
            <div className="bilder-strom">
              <div className="bilder-titel">
                <span className="bilder-text Heading">10000 Worte</span>
              </div>
              <div className="bilder-container02">
                <div className="bilder-container03">
                  <div className="bilder-container04">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="bilder-image"
                    />
                    <span className="bilder-text01 minitext">MEHRWERT</span>
                  </div>
                  <div className="bilder-container05">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bilder-image01"
                    />
                    <span className="minitext bilder-text02">1 MIN.</span>
                  </div>
                </div>
                <div className="bilder-container06">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bilder-image02"
                  />
                  <span className="bilder-text03 minitext">1 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="bilder-container07">
          <span className="bilder-lvl1 Rubrik">EINFACH</span>
          <Link to="/skalierung" className="bilder-navlink2">
            <div className="bilder-punkt">
              <div className="bilder-titel1">
                <span className="bilder-text04 Heading">Skalierung</span>
              </div>
              <div className="bilder-wertung">
                <div className="bilder-container08">
                  <div className="bilder-container09">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="bilder-image03"
                    />
                    <span className="bilder-text05 minitext">MEHRWERT</span>
                  </div>
                  <div className="bilder-container10">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bilder-image04"
                    />
                    <span className="minitext bilder-text06">3 MIN.</span>
                  </div>
                  <div className="bilder-container11">
                    <img
                      alt="image"
                      src="/Icons/gray/3g.svg"
                      className="bilder-image05"
                    />
                    <span className="bilder-text07 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="bilder-container12">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bilder-image06"
                  />
                  <span className="bilder-text08 minitext">3MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/dateiformate-bilder" className="bilder-navlink3">
            <div className="bilder-serverwahl">
              <div className="bilder-titel2">
                <span className="bilder-text09 Heading">Dateiformate</span>
              </div>
              <div className="bilder-container13">
                <div className="bilder-container14">
                  <div className="bilder-container15">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="bilder-image07"
                    />
                    <span className="bilder-text10 minitext">MEHRWERT</span>
                  </div>
                  <div className="bilder-container16">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bilder-image08"
                    />
                    <span className="minitext bilder-text11">3 MIN.</span>
                  </div>
                  <div className="bilder-container17">
                    <img
                      alt="image"
                      src="/Icons/gray/3g.svg"
                      className="bilder-image09"
                    />
                    <span className="bilder-text12 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="bilder-container18">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bilder-image10"
                  />
                  <span className="bilder-text13 minitext">3MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/vektorgrafik" className="bilder-navlink4">
            <div className="bilder-serverwahl1">
              <div className="bilder-titel3">
                <span className="bilder-text14 Heading">Vektorgrafik</span>
              </div>
              <div className="bilder-container19">
                <div className="bilder-container20">
                  <div className="bilder-container21">
                    <img
                      alt="image"
                      src="/Icons/green/5.svg"
                      className="bilder-image11"
                    />
                    <span className="bilder-text15 minitext">MEHRWERT</span>
                  </div>
                  <div className="bilder-container22">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bilder-image12"
                    />
                    <span className="minitext bilder-text16">2 MIN.</span>
                  </div>
                  <div className="bilder-container23">
                    <img
                      alt="image"
                      src="/Icons/gray/2g.svg"
                      className="bilder-image13"
                    />
                    <span className="bilder-text17 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="bilder-container24">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bilder-image14"
                  />
                  <span className="bilder-text18 minitext">2MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="bilder-container25">
          <span className="bilder-lvl2 Rubrik">FORTGESCHRITTEN</span>
          <Link to="/favicon" className="bilder-navlink5">
            <div className="bilder-punkt1">
              <div className="bilder-titel4">
                <span className="bilder-text19 Heading">Favicon</span>
              </div>
              <div className="bilder-wertung1">
                <div className="bilder-container26">
                  <div className="bilder-container27">
                    <img
                      alt="image"
                      src="/Icons/green/2.svg"
                      className="bilder-image15"
                    />
                    <span className="bilder-text20 minitext">MEHRWERT</span>
                  </div>
                  <div className="bilder-container28">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bilder-image16"
                    />
                    <span className="minitext bilder-text21">2 MIN.</span>
                  </div>
                  <div className="bilder-container29">
                    <img
                      alt="image"
                      src="/Icons/gray/2g.svg"
                      className="bilder-image17"
                    />
                    <span className="bilder-text22 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="bilder-container30">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bilder-image18"
                  />
                  <span className="bilder-text23 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="bilder-container31">
          <span className="bilder-lvl3 Rubrik">EXPERTE</span>
          <Link to="/bildbearbeitung" className="bilder-navlink6">
            <div className="bilder-punkt2">
              <div className="bilder-titel5">
                <span className="bilder-text24 Heading">Bildbearbeitung</span>
              </div>
              <div className="bilder-wertung2">
                <div className="bilder-container32">
                  <div className="bilder-container33">
                    <img
                      alt="image"
                      src="/Icons/green/3.svg"
                      className="bilder-image19"
                    />
                    <span className="bilder-text25 minitext">MEHRWERT</span>
                  </div>
                  <div className="bilder-container34">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bilder-image20"
                    />
                    <span className="minitext bilder-text26">4 MIN.</span>
                  </div>
                  <div className="bilder-container35">
                    <img
                      alt="image"
                      src="/Icons/gray/5g.svg"
                      className="bilder-image21"
                    />
                    <span className="bilder-text27 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="bilder-container36">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bilder-image22"
                  />
                  <span className="bilder-text28 minitext">4 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/asci" className="bilder-navlink7">
            <div className="bilder-serverwahl2">
              <div className="bilder-titel6">
                <span className="bilder-text29 Heading">
                  Bilder ohne Bilder
                </span>
              </div>
              <div className="bilder-container37">
                <div className="bilder-container38">
                  <div className="bilder-container39">
                    <img
                      alt="image"
                      src="/Icons/green/2.svg"
                      className="bilder-image23"
                    />
                    <span className="bilder-text30 minitext">MEHRWERT</span>
                  </div>
                  <div className="bilder-container40">
                    <img
                      alt="image"
                      src="/Icons/uhr.svg"
                      className="bilder-image24"
                    />
                    <span className="minitext bilder-text31">2 MIN.</span>
                  </div>
                  <div className="bilder-container41">
                    <img
                      alt="image"
                      src="/Icons/gray/1g.svg"
                      className="bilder-image25"
                    />
                    <span className="bilder-text32 minitext">AUFWAND</span>
                  </div>
                </div>
                <div className="bilder-container42">
                  <img
                    alt="image"
                    src="/Icons/uhr.svg"
                    className="bilder-image26"
                  />
                  <span className="bilder-text33 minitext">2 MIN.</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Bilder
