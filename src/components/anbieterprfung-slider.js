import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import AnbieterprfungEx1 from './anbieterprfung-ex1'
import AnbieterprfungEx2 from './anbieterprfung-ex2'
import AnbieterprfungEx3 from './anbieterprfung-ex3'
import './anbieterprfung-slider.css'

const AnbieterprfungSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`anbieterprfung-slider-container ${props.rootClassName} `}>
      <div className="anbieterprfung-slider-container01">
        <div className="anbieterprfung-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="anbieterprfung-slider-container02">
              <div className="anbieterprfung-slider-storyfortschrit">
                <div className="anbieterprfung-slider-activ"></div>
                <div className="anbieterprfung-slider-passiv"></div>
                <div className="anbieterprfung-slider-passiv01"></div>
                <div className="anbieterprfung-slider-passiv02"></div>
                <div className="anbieterprfung-slider-passiv03"></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="anbieterprfung-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="anbieterprfung-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="/HAL/handpointer.json"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="anbieterprfung-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="anbieterprfung-slider-text">{props.heading}</h1>
              <div className="anbieterprfung-slider-container03">
                <div className="anbieterprfung-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="anbieterprfung-slider-image"
                  />
                  <span className="anbieterprfung-slider-text01">
                    {props.text}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="anbieterprfung-slider-container05">
              <div className="anbieterprfung-slider-storyfortschrit1">
                <div className="anbieterprfung-slider-passiv04"></div>
                <div className="anbieterprfung-slider-activ1"></div>
                <div className="anbieterprfung-slider-passiv05"></div>
                <div className="anbieterprfung-slider-passiv06"></div>
                <div className="anbieterprfung-slider-passiv07"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="anbieterprfung-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="anbieterprfung-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="anbieterprfung-slider-container06">
                <div className="anbieterprfung-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="anbieterprfung-slider-image1"
                  />
                  <span className="anbieterprfung-slider-text03">
                    {props.text3}
                  </span>
                </div>
              </div>
              <AnbieterprfungEx1
                rootClassName="anbieterprfung-ex1-root-class-name1"
                className=""
              ></AnbieterprfungEx1>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="anbieterprfung-slider-container08">
              <div className="anbieterprfung-slider-storyfortschrit2">
                <div className="anbieterprfung-slider-passiv08"></div>
                <div className="anbieterprfung-slider-passiv09"></div>
                <div className="anbieterprfung-slider-activ2"></div>
                <div className="anbieterprfung-slider-passiv10"></div>
                <div className="anbieterprfung-slider-passiv11"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="anbieterprfung-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="anbieterprfung-slider-rarrow2 finger"
              ></div>
              <h1 className="">{props.heading11}</h1>
              <div className="anbieterprfung-slider-container09">
                <div className="anbieterprfung-slider-container10">
                  <img
                    alt={props.imageAlt311}
                    src={props.imageSrc311}
                    className="anbieterprfung-slider-image2"
                  />
                  <span className="anbieterprfung-slider-text05">
                    {props.text31}
                  </span>
                </div>
                <AnbieterprfungEx2
                  rootClassName="anbieterprfung-ex2-root-class-name1"
                  className=""
                ></AnbieterprfungEx2>
              </div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="anbieterprfung-slider-container11">
              <div className="anbieterprfung-slider-storyfortschrit3">
                <div className="anbieterprfung-slider-passiv12"></div>
                <div className="anbieterprfung-slider-passiv13"></div>
                <div className="anbieterprfung-slider-passiv14"></div>
                <div className="anbieterprfung-slider-activ3"></div>
                <div className="anbieterprfung-slider-passiv15"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="anbieterprfung-slider-larrow3 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="anbieterprfung-slider-rarrow3 finger"
              ></div>
              <h1 className="">{props.heading111}</h1>
              <div className="anbieterprfung-slider-container12">
                <div className="anbieterprfung-slider-container13">
                  <img
                    alt={props.imageAlt3111}
                    src={props.imageSrc3111}
                    className="anbieterprfung-slider-image3"
                  />
                  <span className="anbieterprfung-slider-text07">
                    {props.text311}
                  </span>
                </div>
                <AnbieterprfungEx3
                  rootClassName="anbieterprfung-ex3-root-class-name1"
                  className=""
                ></AnbieterprfungEx3>
              </div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="anbieterprfung-slider-container14">
              <div className="anbieterprfung-slider-storyfortschrit4">
                <div className="anbieterprfung-slider-passiv16"></div>
                <div className="anbieterprfung-slider-passiv17"></div>
                <div className="anbieterprfung-slider-passiv18"></div>
                <div className="anbieterprfung-slider-passiv19"></div>
                <div className="anbieterprfung-slider-activ4"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="anbieterprfung-slider-larrow4 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="anbieterprfung-slider-rarrow4 finger"
              ></div>
              <h1 className="">{props.heading1111}</h1>
              <div className="anbieterprfung-slider-container15">
                <div className="anbieterprfung-slider-container16">
                  <img
                    alt={props.imageAlt31111}
                    src={props.imageSrc31111}
                    className="anbieterprfung-slider-image4"
                  />
                  <span className="anbieterprfung-slider-text09">
                    {props.text3111}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="anbieterprfung-slider-container18">
          <Script
            html={`<script>
var element = document.getElementById('one');
if (element) {
  element.style.display = 'block';
  setTimeout(function() {
    element.style.display = 'none';
  }, 2800);
}
</script>`}
            className=""
          ></Script>
        </div>
      </div>
    </div>
  )
}

AnbieterprfungSlider.defaultProps = {
  heading1111: 'Externe Domain',
  imageAlt3111: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt4: 'image',
  rootClassName: '',
  imageSrc3111: '/Anbieterpruefen/serverstandort.svg',
  imageSrc3: '/Anbieterpruefen/pruefen.svg',
  heading11: 'Textkompression',
  text3111:
    'Um den Vorschlag eines gemeinsam genutzten Webspace aus der Lektion "Grundlagen" umzusetzen, muss geprüft werden, ob der gewählte Provider externe Domains unterstützt, denn viele Provider beschränken die Anzahl der Domains, die auf einen Webserver verweisen können.',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  imageAlt31: 'image',
  imageAlt2: 'image',
  imageSrc311: '/CDN/brotli.svg',
  heading111: 'Serverstandorte',
  text1:
    'Die CPU, auch bekannt als Prozessor, ist das Herzstück eines Servers und führt Befehle von Programmen aus, indem sie komplexe Berechnungen und Steuerungsoperationen durchführt.',
  heading1: 'Strom',
  imageAlt111: 'image',
  heading: 'Bestehende Anbieter Prüfen',
  text31:
    'Mit giftofspeed.com kann eine URL auf Textkomprimierung geprüft werden. Gzip sollte mindestens bei einem Managed Tarif vorhanden sein. Brotli wäre ideal, da es eine ca. 15% höhere Kompression bietet.',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc31: '/Anbieterpruefen/strom.svg',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc4: 'c815931b-2780-4b48-aabd-7430bc437105',
  text: 'Es ist ratsam, seinen derzeitigen Versorger zu überprüfen, um zu sehen, ob er die besten Technologien einsetzt oder Strom aus erneuerbaren Quellen verwendet. Alles, was man braucht, ist eine Seite, von der man weiß, dass sie von dem bevorzugten Anbieter zur Verfügung gestellt wird.',
  text2:
    'Die Festplattenkapazität bezeichnet den Speicherplatz, der auf einem Server für die langfristige Datenspeicherung zur Verfügung steht, und ist entscheidend für die Menge an Daten, die gespeichert und abgerufen werden können.',
  imageAlt311: 'image',
  text3:
    'Mit dem Tool websitecarbon.com ist es möglich, eine URL zu überprüfen und aus einer Datenbank abzulesen, ob der Anbieter des Servers Strom aus erneuerbaren Quellen verwendet.',
  imageSrc31111: '/Anbieterpruefen/url.svg',
  imageAlt31111: 'image',
  imageAlt1: 'image',
  imageAlt11: 'image',
  imageSrc2: 'c56716d5-2017-4085-9e5d-4db4e39cf05a',
  imageAlt: 'image',
  imageAlt3: 'image',
  text311:
    'Builtwith ist ein leistungsstarkes Tool zur Überprüfung von Internetadressen (URLs) und gibt unter anderem Auskunft über den Standort von Servern. Alternativ kann man mit DNSchecker.org den Nameserver einer Website herausfinden, über den man den Provider herausfinden kann, sofern diese Einstellungen nicht vom Betreiber der Website geändert wurden. In Deutschland sind deutsche Standorte aufgrund der kürzeren Verbindung zu bevorzugen.',
}

AnbieterprfungSlider.propTypes = {
  heading1111: PropTypes.string,
  imageAlt3111: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt4: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc3111: PropTypes.string,
  imageSrc3: PropTypes.string,
  heading11: PropTypes.string,
  text3111: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt31: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc311: PropTypes.string,
  heading111: PropTypes.string,
  text1: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt111: PropTypes.string,
  heading: PropTypes.string,
  text31: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageSrc31: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc4: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  imageAlt311: PropTypes.string,
  text3: PropTypes.string,
  imageSrc31111: PropTypes.string,
  imageAlt31111: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt3: PropTypes.string,
  text311: PropTypes.string,
}

export default AnbieterprfungSlider
