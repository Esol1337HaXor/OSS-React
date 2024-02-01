import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './worte-slider.css'

const WorteSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`worte-slider-container ${props.rootClassName} `}>
      <div className="worte-slider-container1">
        <div className="worte-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="worte-slider-container2">
              <div className="worte-slider-storyfortschrit">
                <div className="worte-slider-activ"></div>
              </div>
              <h1 className="">{props.heading1}</h1>
              <div className="worte-slider-container3">
                <div className="worte-slider-container4">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="worte-slider-image"
                  />
                  <span className="worte-slider-text1">{props.text3}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="worte-slider-container6">
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

WorteSlider.defaultProps = {
  imageSrc31: '/Bilder Icons/bild.svg',
  rootClassName: '',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt1: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  heading1: 'Sagt das Bild so viel?',
  imageAlt: 'image',
  imageAlt11: 'image',
  imageAlt111: 'image',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageAlt31: 'image',
  text3:
    'Es ist zu hinterfragen, ob ein Bild wirklich so aussagekräftig ist, wie man es sich vorstellt; bei Stockbildern ist davon auszugehen, dass dies nicht der Fall ist. Ein Foto kann leicht Megabyte-Größen erreichen. Da 1 Kilobyte 1024 Bytes entspricht, würden 10.000 Wörter etwa 58,6 KB (bei Wörtern mit 5 Buchstaben) bis 156,25 KB (bei Wörtern mit 15 Buchstaben) einnehmen. Es ist schwierig, ein Bild in dieser Größe zu erhalten.',
}

WorteSlider.propTypes = {
  imageSrc31: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt31: PropTypes.string,
  text3: PropTypes.string,
}

export default WorteSlider
