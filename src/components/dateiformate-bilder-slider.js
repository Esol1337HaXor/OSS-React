import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import DateiformateBilderEx2 from './dateiformate-bilder-ex2'
import DateiformateBilderEx1 from './dateiformate-bilder-ex1'
import DateiformateBilderEx3 from './dateiformate-bilder-ex3'
import './dateiformate-bilder-slider.css'

const DateiformateBilderSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div
      className={`dateiformate-bilder-slider-container ${props.rootClassName} `}
    >
      <div className="dateiformate-bilder-slider-container01">
        <div className="dateiformate-bilder-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="dateiformate-bilder-slider-container02">
              <div className="dateiformate-bilder-slider-storyfortschrit">
                <div className="dateiformate-bilder-slider-activ"></div>
                <div className="dateiformate-bilder-slider-passiv"></div>
                <div className="dateiformate-bilder-slider-passiv1"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="dateiformate-bilder-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="dateiformate-bilder-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="dateiformate-bilder-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading11}</h1>
              <div className="dateiformate-bilder-slider-container03">
                <div className="dateiformate-bilder-slider-container04">
                  <img
                    alt={props.imageAlt311}
                    src={props.imageSrc311}
                    className="dateiformate-bilder-slider-image"
                  />
                  <span className="dateiformate-bilder-slider-text1">
                    {props.text11}
                  </span>
                </div>
              </div>
              <DateiformateBilderEx2 className=""></DateiformateBilderEx2>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="dateiformate-bilder-slider-container05">
              <DateiformateBilderEx1 className=""></DateiformateBilderEx1>
              <div className="dateiformate-bilder-slider-storyfortschrit1">
                <div className="dateiformate-bilder-slider-passiv2"></div>
                <div className="dateiformate-bilder-slider-activ1"></div>
                <div className="dateiformate-bilder-slider-passiv3"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="dateiformate-bilder-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="dateiformate-bilder-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading111}</h1>
              <div className="dateiformate-bilder-slider-container06">
                <div className="dateiformate-bilder-slider-container07">
                  <img
                    alt={props.imageAlt31111}
                    src={props.imageSrc31111}
                    className="dateiformate-bilder-slider-image1"
                  />
                  <span className="dateiformate-bilder-slider-text3">
                    {props.text1111}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="dateiformate-bilder-slider-container08">
              <DateiformateBilderEx3
                rootClassName="dateiformate-bilder-ex3-root-class-name2"
                className=""
              ></DateiformateBilderEx3>
              <div className="dateiformate-bilder-slider-storyfortschrit2">
                <div className="dateiformate-bilder-slider-passiv4"></div>
                <div className="dateiformate-bilder-slider-passiv5"></div>
                <div className="dateiformate-bilder-slider-activ2"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="dateiformate-bilder-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="dateiformate-bilder-slider-rarrow2 finger"
              ></div>
              <h1 className="">{props.heading112}</h1>
              <div className="dateiformate-bilder-slider-container09">
                <div className="dateiformate-bilder-slider-container10">
                  <span className="dateiformate-bilder-slider-text5">
                    {props.text113}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="dateiformate-bilder-slider-container12">
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

DateiformateBilderSlider.defaultProps = {
  imageAlt3112: 'image',
  imageAlt1: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  heading111: 'Moderne Formate',
  heading11: 'Moderne Formate',
  rootClassName: '',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  text1111:
    'AVIF ist ein neues Bildformat, das auf dem Videoformat AV1 basiert. Es bietet eine hohe Kompressionsrate und eine hohe Bildqualität, sogar besser als WebP. Es unterstützt auch Transparenz und HDR-Farben. Es wird jedoch noch nicht von allen Webbrowsern unterstützt. Ab Feb 2024 wird Edge schließlich auch AVIF unterstützen. Adobe unterstützt den AVIF-Export derzeit nicht.',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  text112:
    'WebP ist ein Bildformat, das sowohl verlustfreie als auch verlustbehaftete Kompression unterstützt. Es bietet eine bessere Bildqualität pro Datenmenge als JPEG, insbesondere bei hoher Komprimierung. Eine Studie von Google ergab einen Vorteil von 25-34% gegenüber JPEG bei vergleichbarer struktureller Ähnlichkeit (SSIM). Es kann auch Transparenz darstellen und animierte Bilder unterstützen.',
  imageAlt11: 'image',
  imageSrc31111: '/Bilder Icons/avif.svg',
  imageAlt31111: 'image',
  heading112: 'Cloudinary',
  imageSrc311: '/Bilder Icons/webp.svg',
  text113:
    'Cloudinary bietet ein nützliches Tool, um die Bilder auf bestehenden Websites zu durchsuchen. Es schlägt Skalierungen vor und vergleicht verschiedene Dateitypen. Da es selbstständig optimiert, kann es sein, dass die Bilder, die es direkt zur Verfügung stellt, nicht unbedingt geeignet sind, aber es ist dennoch ein mächtiges Werkzeug, um Herr über seine Bilder zu werden. Es ist zu beachten, dass Ansätze wie unterschiedliche Bilder für Viewports nicht unbedingt berücksichtigt werden.',
  imageSrc3113: '8c31bb2f-5e37-4acf-8f41-0c17b2a58482',
  imageAlt111: 'image',
  imageAlt3113: 'image',
  imageAlt311: 'image',
  text11:
    'WebP ist ein Bildformat, das sowohl verlustfreie als auch verlustbehaftete Kompression unterstützt. Es bietet eine bessere Bildqualität pro Datenmenge als JPEG, insbesondere bei hoher Komprimierung. Eine Studie von Google ergab einen Vorteil von 25-34% gegenüber JPEG bei vergleichbarer struktureller Ähnlichkeit (SSIM). Es kann auch Transparenz darstellen und animierte Bilder unterstützen. Der Adobe MediaEncoder sowie Illustrator und Photoshop unterstützen inzwischen WebP.',
  imageAlt3111: 'image',
  imageSrc3111: 'b09793d1-1fab-4af8-9e0d-725e2b4a8943',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc3112: '8c31bb2f-5e37-4acf-8f41-0c17b2a58482',
  text111:
    'AVIF ist ein neues Bildformat, das auf dem Videoformat AV1 basiert. Es bietet eine hohe Kompressionsrate und eine hohe Bildqualität, sogar besser als WebP. Es unterstützt auch Transparenz und HDR-Farben. Es wird jedoch noch nicht von allen Webbrowsern unterstützt. Ab Feb 2024 wird Edge schließlich auch AVIF unterstützen.',
  imageAlt: 'image',
}

DateiformateBilderSlider.propTypes = {
  imageAlt3112: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc11: PropTypes.string,
  heading111: PropTypes.string,
  heading11: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc111: PropTypes.string,
  text1111: PropTypes.string,
  imageSrc1: PropTypes.string,
  text112: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc31111: PropTypes.string,
  imageAlt31111: PropTypes.string,
  heading112: PropTypes.string,
  imageSrc311: PropTypes.string,
  text113: PropTypes.string,
  imageSrc3113: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageAlt3113: PropTypes.string,
  imageAlt311: PropTypes.string,
  text11: PropTypes.string,
  imageAlt3111: PropTypes.string,
  imageSrc3111: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc3112: PropTypes.string,
  text111: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default DateiformateBilderSlider
