import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './mussdassein-slider.css'

const MussdasseinSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`mussdassein-slider-container ${props.rootClassName} `}>
      <div className="mussdassein-slider-container1">
        <div className="mussdassein-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="mussdassein-slider-container2">
              <div className="mussdassein-slider-storyfortschrit">
                <div className="mussdassein-slider-activ"></div>
              </div>
              <div
                onClick={() => setSlideNumber(10)}
                className="mussdassein-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="mussdassein-slider-rarrow finger"
              ></div>
              <h1 className="">{props.heading}</h1>
              <div className="mussdassein-slider-container3">
                <div className="mussdassein-slider-container4">
                  <Player
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/25e9c83c-899f-414b-aa0d-a999a85eecee"
                    speed="0.3"
                    autoplay
                    background="transparent"
                    className="mussdassein-slider-lottie-node"
                  ></Player>
                  <span className="mussdassein-slider-text1">{props.text}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="mussdassein-slider-container6">
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

MussdasseinSlider.defaultProps = {
  imageSrc3: 'e69a918b-4403-47ab-bdce-79a9bdab029f',
  imageAlt3: 'image',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageAlt: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  text: 'Ein Video im Sinne einer Aneinanderreihung von Bildern ist im Web in Frage zu stellen. Videos haben mit Abstand das größte Datenvolumen, das eine Website erzeugen kann, da allein durch das Abspielen leicht hunderte MB an Traffic erzeugt werden können. Unvermeidbare Videos, wie z.B. der dringend notwendige Imagefilm, können jedoch optimiert werden. Erklärvideos können sehr gut durch deutlich sparsamere Animationen ersetzt werden, ein Video im eigentlichen Sinne ist nur dann notwendig, wenn tatsächlich etwas Gefilmtes gezeigt wird.',
  rootClassName: '',
  heading: 'Muss das sein?',
  imageAlt1: 'image',
  imageAlt111: 'image',
  imageAlt11: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
}

MussdasseinSlider.propTypes = {
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageSrc111: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default MussdasseinSlider
