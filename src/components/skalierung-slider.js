import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import SkalierungEx1 from './skalierung-ex1'
import './skalierung-slider.css'

const SkalierungSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`skalierung-slider-container ${props.rootClassName} `}>
      <div className="skalierung-slider-container1">
        <div className="skalierung-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="skalierung-slider-container2">
              <div className="skalierung-slider-storyfortschrit">
                <div className="skalierung-slider-activ"></div>
              </div>
              <h1 className="">{props.heading1}</h1>
              <div className="skalierung-slider-container3">
                <div className="skalierung-slider-container4">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="skalierung-slider-image"
                  />
                  <span className="skalierung-slider-text1">{props.text3}</span>
                </div>
              </div>
              <SkalierungEx1 className=""></SkalierungEx1>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="skalierung-slider-container6">
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

SkalierungSlider.defaultProps = {
  imageAlt: 'image',
  imageAlt1: 'image',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc31: '/Bilder Icons/scale.svg',
  rootClassName: '',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  heading1: 'Skalierung',
  imageAlt111: 'image',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  text3:
    'Die Auflösung eines Bildes ist entscheidend. Aus UX-Sicht wäre es ideal, für jeden Viewport ein Bild mit der idealen Auflösung zur Verfügung zu stellen. Es gibt Plugins und Dienste, die dies ermöglichen. Je kleiner ein Bild aufgelöst ist, desto weniger Traffic erzeugt es.',
  imageAlt31: 'image',
  imageAlt11: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
}

SkalierungSlider.propTypes = {
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc31: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc11: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc111: PropTypes.string,
  text3: PropTypes.string,
  imageAlt31: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default SkalierungSlider
