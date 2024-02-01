import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import WOFF2OptimierungEx1 from './woff2-optimierung-ex1'
import WOFF2OptimierungEx2 from './woff2-optimierung-ex2'
import './woff-optimierung-slider.css'

const WOFFOptimierungSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div
      className={`woff-optimierung-slider-container ${props.rootClassName} `}
    >
      <div className="woff-optimierung-slider-container01">
        <div className="woff-optimierung-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="woff-optimierung-slider-container02">
              <div className="woff-optimierung-slider-storyfortschrit">
                <div className="woff-optimierung-slider-activ"></div>
                <div className="woff-optimierung-slider-passiv"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="woff-optimierung-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="woff-optimierung-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="woff-optimierung-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="woff-optimierung-slider-container03">
                <div className="woff-optimierung-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="woff-optimierung-slider-image"
                  />
                  <span className="woff-optimierung-slider-text1">
                    {props.text}
                  </span>
                </div>
                <WOFF2OptimierungEx1
                  rootClassName="woff2-optimierung-ex1-root-class-name1"
                  className=""
                ></WOFF2OptimierungEx1>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="woff-optimierung-slider-container05">
              <div className="woff-optimierung-slider-storyfortschrit1">
                <div className="woff-optimierung-slider-passiv1"></div>
                <div className="woff-optimierung-slider-activ1"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="woff-optimierung-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="woff-optimierung-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="woff-optimierung-slider-container06">
                <div className="woff-optimierung-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="woff-optimierung-slider-image1"
                  />
                  <span className="woff-optimierung-slider-text3">
                    {props.text1}
                  </span>
                </div>
              </div>
              <WOFF2OptimierungEx2 className=""></WOFF2OptimierungEx2>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="woff-optimierung-slider-container09">
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

WOFFOptimierungSlider.defaultProps = {
  heading1: 'Glyphen Reduzieren',
  rootClassName: '',
  text: 'Die erste Maßnahme zur Optimierung der Schriften ist die Reduzierung der zu hinterlegenden Schnitte. Konvertiert man aus TTF/OTF-Dateien, sollte man darauf achten, dass diese keine Schnitte enthalten, die man am Ende gar nicht verwendet. google-webfonts-helper ermöglicht es, zumindest für Google-Fonts direkt nur die gewünschten Schnitte zu laden.',
  imageAlt31: 'image',
  heading: 'WOFF2 verkleinern',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt: 'image',
  imageAlt1: 'image',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt3: 'image',
  imageSrc3: '/font icons/font%20tt.svg',
  text1:
    'Desweiteren ist es möglich, Glyphen aus Schriften zu entfernen. Für eine englisch- oder deutschsprachige Website können Glyphen wie Kyrillisch oder andere Glyphen entfernt werden. Mit dem Font Subsetter lassen sich Schriften sehr kleinteilig an die jeweiligen Bedürfnisse anpassen. um den Inhalt einer Schrift überhaupt zu überprüfen, kann man sich den Inhalt mit FontDrop! ansehen.',
  imageAlt11: 'image',
  imageAlt111: 'image',
  imageSrc31: '/font icons/tcross.svg',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
}

WOFFOptimierungSlider.propTypes = {
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imageAlt31: PropTypes.string,
  heading: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc3: PropTypes.string,
  text1: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc31: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default WOFFOptimierungSlider
