import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import ASCIEx1 from './asci-ex1'
import './asci-slider.css'

const ASCISlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`asci-slider-container ${props.rootClassName} `}>
      <div className="asci-slider-container01">
        <div className="asci-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="asci-slider-container02">
              <div className="asci-slider-storyfortschrit">
                <div className="asci-slider-activ"></div>
                <div className="asci-slider-passiv"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="asci-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="asci-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="asci-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="asci-slider-container03">
                <div className="asci-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="asci-slider-image"
                  />
                  <span className="asci-slider-text1">{props.text}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="asci-slider-container05">
              <div className="asci-slider-storyfortschrit1">
                <div className="asci-slider-passiv1"></div>
                <div className="asci-slider-activ1"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="asci-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="asci-slider-rarrow1 finger"
              ></div>
              <ASCIEx1 className=""></ASCIEx1>
              <h1 className="">{props.heading1}</h1>
              <div className="asci-slider-container06">
                <div className="asci-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="asci-slider-image1"
                  />
                  <span className="asci-slider-text3">{props.text1}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="asci-slider-container09">
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

ASCISlider.defaultProps = {
  rootClassName: '',
  imageAlt3: 'image',
  imageSrc3: '/Bilder Icons/asci.svg',
  text: 'ASCII-Art ist eine computergestützte Grafiktechnik, die aus Bildern besteht, die aus den 95 druckbaren Zeichen des ASCII-Zeichensatzes zusammengesetzt sind. ASCII-Art kann mit jedem Texteditor erstellt werden und wird häufig in sprachfreien Umgebungen verwendet. Die meisten ASCII-Art-Arbeiten erfordern eine Schriftart mit fester Zeichenbreite.',
  text1:
    'ASCII-Art, die im Web verwendet wird, erfordert das Einbetten einer Schriftart, die monochrom ist. Außerdem muss für jeden Viewport darauf geachtet werden, dass die Textbox, in der sich der Text befindet, genau passt. Da Texte aber nur wenige Bytes haben, ist diese grafische Darstellung sehr klein. Einige Bilder können so nicht dargestellt werden.',
  imageSrc31: '/Bilder Icons/asci.svg',
  heading: 'Bilder ohne Bilder',
  imageAlt31: 'image',
  heading1: 'ASCI',
}

ASCISlider.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  imageSrc31: PropTypes.string,
  heading: PropTypes.string,
  imageAlt31: PropTypes.string,
  heading1: PropTypes.string,
}

export default ASCISlider
