import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import EinbindungEx1 from './einbindung-ex1'
import './einbindung-slider.css'

const EinbindungSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`einbindung-slider-container ${props.rootClassName} `}>
      <div className="einbindung-slider-container01">
        <div className="einbindung-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="einbindung-slider-container02">
              <div className="einbindung-slider-storyfortschrit">
                <div className="einbindung-slider-activ"></div>
                <div className="einbindung-slider-passiv"></div>
                <div className="einbindung-slider-passiv1"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="einbindung-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="einbindung-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="einbindung-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="einbindung-slider-container03">
                <div className="einbindung-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="einbindung-slider-image"
                  />
                  <span className="einbindung-slider-text1">{props.text}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="einbindung-slider-container05">
              <div className="einbindung-slider-storyfortschrit1">
                <div className="einbindung-slider-passiv2"></div>
                <div className="einbindung-slider-activ1"></div>
                <div className="einbindung-slider-passiv3"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="einbindung-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="einbindung-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="einbindung-slider-container06">
                <div className="einbindung-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="einbindung-slider-image1"
                  />
                  <span className="einbindung-slider-text3">{props.text1}</span>
                </div>
                <EinbindungEx1
                  rootClassName="einbindung-ex1-root-class-name1"
                  className=""
                ></EinbindungEx1>
              </div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="einbindung-slider-container08">
              <div className="einbindung-slider-storyfortschrit2">
                <div className="einbindung-slider-passiv4"></div>
                <div className="einbindung-slider-passiv5"></div>
                <div className="einbindung-slider-activ2"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="einbindung-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="einbindung-slider-rarrow2 finger"
              ></div>
              <h1 className="">{props.heading11}</h1>
              <div className="einbindung-slider-container09">
                <div className="einbindung-slider-container10">
                  <img
                    alt={props.imageAlt311}
                    src={props.imageSrc311}
                    className="einbindung-slider-image2"
                  />
                  <span className="einbindung-slider-text5">
                    {props.text11}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="einbindung-slider-container12">
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

EinbindungSlider.defaultProps = {
  imageAlt3: 'image',
  imageSrc311: '/font icons/ttcross.svg',
  imageSrc3: '/CDN/cdn.svg',
  heading11: 'Machs nicht',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt1: 'image',
  imageAlt11: 'image',
  imageAlt: 'image',
  text11:
    'Ein radikaler Ansatz, der zu einer Einsparung von 100 % bei den Schriften führt, besteht darin, einfach keine Schriften zu verwenden, sondern nur Systemschriften. Für den Designer mag das hart klingen, aber aus Sicht der Nachhaltigkeit ist es die beste Variante.',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  rootClassName: '',
  imageAlt311: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  text1:
    'Eine einfache Möglichkeit, die Verbindung zu sparen, besteht darin, die Schriften selbst zur Verfügung zu stellen. Oft kann man Schriften herunterladen, z.B. bei Googlefonts.',
  heading1: 'Machs dir selbst',
  text: 'Üblicherweise werden Schriften über ein CDN eingebunden, das sind Links, die die Schriften zur Verfügung stellen. Bei kommerziellen Schriften ist dies notwendig, damit der Betreiber weiß, wie viele Aufrufe auf der Seite des Nutzers generiert werden. Dies hat jedoch zur Folge, dass eine Verbindung zu einem anderen Server als dem, auf dem sich die Website befindet, hergestellt wird.',
  imageSrc31: '/Serverwahl/server1.svg',
  heading: 'Gängige Praxis',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt31: 'image',
  imageAlt111: 'image',
}

EinbindungSlider.propTypes = {
  imageAlt3: PropTypes.string,
  imageSrc311: PropTypes.string,
  imageSrc3: PropTypes.string,
  heading11: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageAlt: PropTypes.string,
  text11: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt311: PropTypes.string,
  imageSrc1: PropTypes.string,
  text1: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  imageSrc31: PropTypes.string,
  heading: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageAlt31: PropTypes.string,
  imageAlt111: PropTypes.string,
}

export default EinbindungSlider
