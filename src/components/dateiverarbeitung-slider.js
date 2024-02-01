import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import DateiverarbeitungEx from './dateiverarbeitung-ex'
import DateiverarbeitungEx2 from './dateiverarbeitung-ex2'
import './dateiverarbeitung-slider.css'

const DateiverarbeitungSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div
      className={`dateiverarbeitung-slider-container ${props.rootClassName} `}
    >
      <div className="dateiverarbeitung-slider-container01">
        <div className="dateiverarbeitung-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="dateiverarbeitung-slider-container02">
              <DateiverarbeitungEx
                rootClassName="dateiverarbeitung-ex-root-class-name1"
                className=""
              ></DateiverarbeitungEx>
              <div className="dateiverarbeitung-slider-storyfortschrit">
                <div className="dateiverarbeitung-slider-activ"></div>
                <div className="dateiverarbeitung-slider-passiv"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="dateiverarbeitung-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="dateiverarbeitung-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="dateiverarbeitung-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="dateiverarbeitung-slider-container03">
                <div className="dateiverarbeitung-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="dateiverarbeitung-slider-image"
                  />
                  <span className="dateiverarbeitung-slider-text1">
                    {props.text}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="dateiverarbeitung-slider-container05">
              <div className="dateiverarbeitung-slider-storyfortschrit1">
                <div className="dateiverarbeitung-slider-passiv1"></div>
                <div className="dateiverarbeitung-slider-activ1"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="dateiverarbeitung-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="dateiverarbeitung-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="dateiverarbeitung-slider-container06">
                <div className="dateiverarbeitung-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="dateiverarbeitung-slider-image1"
                  />
                  <span className="dateiverarbeitung-slider-text3">
                    {props.text1}
                  </span>
                </div>
                <DateiverarbeitungEx2
                  rootClassName="dateiverarbeitung-ex2-root-class-name1"
                  className=""
                ></DateiverarbeitungEx2>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="dateiverarbeitung-slider-container09">
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

DateiverarbeitungSlider.defaultProps = {
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageAlt3: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  rootClassName: '',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt: 'image',
  heading1: 'Caching',
  text: 'Es gibt eine so genannte Code-Minimierung. Textbasierter Code kann so komprimiert werden, indem alle unnötigen Zeichen entfernt werden. Das Ergebnis ist min.js oder min.css, das für Menschen schwer lesbar, aber etwas kleiner ist und vor einem Deployment angewendet werden sollte.',
  imageAlt111: 'image',
  imageAlt31: 'image',
  text1:
    'Caching kann serverseitig aktiviert werden und sollte für wiederkehrende Besucher aktiviert werden, da diese dann bereits statische Inhalte haben und somit der Traffic reduziert wird. nginx unterstützt Caching, muss aber aktiviert werden. Mit Hilfe von Beacon kann sehr einfach festgestellt werden, ob eine Seite Caching verwendet.',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  heading: 'Komprimierung',
  imageAlt1: 'image',
  imageSrc31: '/CDN/cache.svg',
  imageAlt11: 'image',
  imageSrc3: '/CDN/minifi.svg',
}

DateiverarbeitungSlider.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageAlt31: PropTypes.string,
  text1: PropTypes.string,
  imageSrc111: PropTypes.string,
  heading: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc31: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc3: PropTypes.string,
}

export default DateiverarbeitungSlider
