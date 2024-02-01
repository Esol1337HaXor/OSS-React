import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import FaviconEx1 from './favicon-ex1'
import './favicon-slider.css'

const FaviconSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`favicon-slider-container ${props.rootClassName} `}>
      <div className="favicon-slider-container01">
        <div className="favicon-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="favicon-slider-container02">
              <div className="favicon-slider-storyfortschrit">
                <div className="favicon-slider-activ"></div>
                <div className="favicon-slider-passiv"></div>
                <div className="favicon-slider-passiv1"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="favicon-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="favicon-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="favicon-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="favicon-slider-container03">
                <div className="favicon-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="favicon-slider-image"
                  />
                  <span className="favicon-slider-text1">{props.text}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="favicon-slider-container05">
              <div className="favicon-slider-storyfortschrit1">
                <div className="favicon-slider-passiv2"></div>
                <div className="favicon-slider-activ1"></div>
                <div className="favicon-slider-passiv3"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="favicon-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="favicon-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="favicon-slider-container06">
                <div className="favicon-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="favicon-slider-image1"
                  />
                  <span className="favicon-slider-text3">{props.text1}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="favicon-slider-container08">
              <div className="favicon-slider-storyfortschrit2">
                <div className="favicon-slider-passiv4"></div>
                <div className="favicon-slider-passiv5"></div>
                <div className="favicon-slider-activ2"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="favicon-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="favicon-slider-rarrow2 finger"
              ></div>
              <h1 className="">{props.heading11}</h1>
              <div className="favicon-slider-container09">
                <div className="favicon-slider-container10">
                  <img
                    alt={props.imageAlt311}
                    src={props.imageSrc311}
                    className="favicon-slider-image2"
                  />
                  <span className="favicon-slider-text5">{props.text11}</span>
                </div>
                <FaviconEx1
                  rootClassName="favicon-ex1-root-class-name2"
                  className=""
                ></FaviconEx1>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="favicon-slider-container12">
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

FaviconSlider.defaultProps = {
  imageAlt11: 'image',
  imageAlt1: 'image',
  text: 'Jedes Mal, wenn ein Browser eine Seite öffnet, versucht er, das Favicon abzurufen, und erzeugt einen Fehler, wenn keines vorhanden ist.',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc31: '/Bilder Icons/ico.svg',
  imageAlt31: 'image',
  imageAlt111: 'image',
  heading1: 'ICO',
  imageAlt: 'image',
  imageSrc3: '/Bilder Icons/error.svg',
  rootClassName: '',
  text11:
    'Durch die vielen Dienste und Möglichkeiten, Favicons auf App-Screens zu integrieren, verschiedene Endgeräte und vieles mehr, muss das Favicon mehrfach hinterlegt werden und das auch noch mit Fallback-Lösungen. Damit man sich damit nicht mehr beschäftigen muss, gibt es hier einen Dienst, der einem sowohl die Datei als auch die Einbindung des Codes zur Verfügung stellt. Der Favicon Generator.',
  text1:
    'Früher war das ICO-Format für Icons vorgesehen, dieses ist aber deutlich größer als PNG- oder SVG-Dateien. Die Auswahl an Dateien für ein Favicon sollte sich auf diese beschränken.',
  imageAlt311: 'image',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  heading: 'ERROR',
  imageSrc311: '/Bilder Icons/ico.svg',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  heading11: 'Favicon  Mania',
  imageAlt3: 'image',
}

FaviconSlider.propTypes = {
  imageAlt11: PropTypes.string,
  imageAlt1: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc31: PropTypes.string,
  imageAlt31: PropTypes.string,
  imageAlt111: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc3: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  text1: PropTypes.string,
  imageAlt311: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageSrc11: PropTypes.string,
  heading: PropTypes.string,
  imageSrc311: PropTypes.string,
  imageSrc1: PropTypes.string,
  heading11: PropTypes.string,
  imageAlt3: PropTypes.string,
}

export default FaviconSlider
