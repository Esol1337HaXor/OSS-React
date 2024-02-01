import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import VektorgrafikEx from './vektorgrafik-ex'
import VektorgrafikEx2 from './vektorgrafik-ex2'
import './vektorgrafik-slider.css'

const VektorgrafikSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`vektorgrafik-slider-container ${props.rootClassName} `}>
      <div className="vektorgrafik-slider-container01">
        <div className="vektorgrafik-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="vektorgrafik-slider-container02">
              <div className="vektorgrafik-slider-storyfortschrit">
                <div className="vektorgrafik-slider-activ"></div>
                <div className="vektorgrafik-slider-passiv"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="vektorgrafik-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="vektorgrafik-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="vektorgrafik-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="vektorgrafik-slider-container03">
                <div className="vektorgrafik-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="vektorgrafik-slider-image"
                  />
                  <span className="vektorgrafik-slider-text1">
                    {props.text}
                  </span>
                </div>
              </div>
              <VektorgrafikEx className=""></VektorgrafikEx>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="vektorgrafik-slider-container05">
              <div className="vektorgrafik-slider-storyfortschrit1">
                <div className="vektorgrafik-slider-passiv1"></div>
                <div className="vektorgrafik-slider-activ1"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="vektorgrafik-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="vektorgrafik-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="vektorgrafik-slider-container06">
                <div className="vektorgrafik-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="vektorgrafik-slider-image1"
                  />
                  <span className="vektorgrafik-slider-text3">
                    {props.text3}
                  </span>
                </div>
              </div>
              <VektorgrafikEx2
                rootClassName="vektorgrafik-ex2-root-class-name2"
                className=""
              ></VektorgrafikEx2>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="vektorgrafik-slider-container09">
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

VektorgrafikSlider.defaultProps = {
  imageSrc31: '/Bilder Icons/vektor.svg',
  heading: 'SVG',
  rootClassName: '',
  imageSrc3: '/Bilder Icons/vektor.svg',
  text: 'SVGs sind in der Regel kleiner als pixelbasierte Bilder. Da SVGs vektorbasiert sind, werden sie durch mathematische Formeln definiert, die weniger Speicherplatz benötigen als die Darstellung jedes einzelnen Pixels in einem pixelbasierten Bild. SVGs sind auflösungsunabhängig und können ohne Qualitätsverlust auf jede beliebige Größe skaliert werden. SVG-Dateien können mit gzip/brotli komprimiert werden, was die Dateigröße weiter reduziert.',
  imageAlt31: 'image',
  text3:
    'SVG-Dateien können wie Textdateien betrachtet und oft weiter reduziert werden, indem unnötige Inhalte oder Knoten entfernt werden. Dies kann SVG-Dateien verkleinern. Im SVG-Export von Illustrator ist dies für selbst erstellte Grafiken möglich, ansonsten wäre dies auch online mit svgoptimizer möglich.',
  heading1: 'SVG optimieren',
  imageAlt3: 'image',
}

VektorgrafikSlider.propTypes = {
  imageSrc31: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc3: PropTypes.string,
  text: PropTypes.string,
  imageAlt31: PropTypes.string,
  text3: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt3: PropTypes.string,
}

export default VektorgrafikSlider
