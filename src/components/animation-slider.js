import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import AnimationEx1 from './animation-ex1'
import AnimationEx2 from './animation-ex2'
import AnimationEx3 from './animation-ex3'
import './animation-slider.css'

const AnimationSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`animation-slider-container ${props.rootClassName} `}>
      <div className="animation-slider-container01">
        <div className="animation-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="animation-slider-container02">
              <div className="animation-slider-storyfortschrit">
                <div className="animation-slider-activ"></div>
                <div className="animation-slider-passiv"></div>
                <div className="animation-slider-passiv1"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="animation-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="animation-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="animation-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="animation-slider-container03">
                <div className="animation-slider-container04">
                  <Player
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/491ce46a-5893-4b5d-bb33-c88ddad389fe"
                    loop
                    speed="0.3"
                    autoplay
                    background="transparent"
                    className="animation-slider-lottie-node1"
                  ></Player>
                  <span className="animation-slider-text1">{props.text}</span>
                </div>
              </div>
              <AnimationEx1 className=""></AnimationEx1>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="animation-slider-container05">
              <div className="animation-slider-storyfortschrit1">
                <div className="animation-slider-passiv2"></div>
                <div className="animation-slider-activ1"></div>
                <div className="animation-slider-passiv3"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="animation-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="animation-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="animation-slider-container06">
                <div className="animation-slider-container07">
                  <Player
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/98f1e934-d648-4204-9922-614a41700bc0"
                    loop
                    speed="0.3"
                    autoplay
                    background="transparent"
                    className="animation-slider-lottie-node2"
                  ></Player>
                  <span className="animation-slider-text3">{props.text1}</span>
                </div>
                <AnimationEx2
                  rootClassName="animation-ex2-root-class-name1"
                  className=""
                ></AnimationEx2>
              </div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="animation-slider-container08">
              <div className="animation-slider-storyfortschrit2">
                <div className="animation-slider-passiv4"></div>
                <div className="animation-slider-passiv5"></div>
                <div className="animation-slider-activ2"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="animation-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="animation-slider-rarrow2 finger"
              ></div>
              <h1 className="">{props.heading11}</h1>
              <div className="animation-slider-container09">
                <div className="animation-slider-container10">
                  <Player
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/398cd10d-338f-4904-beeb-ccbb7cc73231"
                    loop
                    speed="0.3"
                    autoplay
                    background="transparent"
                    className="animation-slider-lottie-node3"
                  ></Player>
                  <span className="animation-slider-text5">{props.text11}</span>
                </div>
                <AnimationEx3
                  rootClassName="animation-ex3-root-class-name3"
                  className=""
                ></AnimationEx3>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="animation-slider-container12">
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

AnimationSlider.defaultProps = {
  imageAlt11: 'image',
  text: 'Lottie-Animationen sind bei gleicher Qualität deutlich kleiner als andere Formate wie GIF oder MP4 Lottie-Dateien sind vektorbasiert, d.h. sie können ohne Qualitätsverlust vergrößert oder verkleinert werden. Hier ein Beispiel für eine Lottie-Datei. Da Lottie von AirBnB kommerzialisiert wird, hat es jedoch einen entscheidenden Nachteil. Die Nutzung von Lottie ohne den Anbieter erfordert technisches Verständnis.',
  text11:
    'Es ist zu beachten, dass für das Abspielen von Lottiefiles ein Skript oder ein Nodemodul benötigt wird. Wenn möglich, sollte dieses Skript heruntergeladen werden, damit der Player nicht von einem CDN neu geladen werden muss. ein Skripttag, der das vom CDN heruntergeladene Skript enthält, sollte ausreichen. Für JS-Framework-Anwendungen reicht es aus, das Nodemodul zu installieren und zu verlinken.',
  imageAlt111: 'image',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  heading11: 'Lottieplayer',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  rootClassName: '',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  text1:
    'Natürlich sind Lottiefiles, wie man sie üblicherweise selbst erstellt oder herunterlädt, noch nicht optimiert. Mit Hilfe des Lottiemizers ist es möglich, die Dateigröße von Lottiefiles zu reduzieren.',
  imageAlt1: 'image',
  heading1: 'Lottiemizer',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  heading: 'Lottiefile',
  imageAlt: 'image',
}

AnimationSlider.propTypes = {
  imageAlt11: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc111: PropTypes.string,
  heading11: PropTypes.string,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc11: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default AnimationSlider
