import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import VideosEx from './videos-ex'
import './videos-slider.css'

const VideosSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`videos-slider-container ${props.rootClassName} `}>
      <div className="videos-slider-container01">
        <div className="videos-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="videos-slider-container02">
              <div className="videos-slider-storyfortschrit">
                <div className="videos-slider-activ"></div>
                <div className="videos-slider-passiv"></div>
                <div className="videos-slider-passiv1"></div>
              </div>
              <div
                onClick={() => setSlideNumber(10)}
                className="videos-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="videos-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="videos-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="videos-slider-container03">
                <div className="videos-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="videos-slider-image"
                  />
                  <span className="videos-slider-text1">{props.text1}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="videos-slider-container05">
              <div className="videos-slider-storyfortschrit1">
                <div className="videos-slider-passiv2"></div>
                <div className="videos-slider-activ1"></div>
                <div className="videos-slider-passiv3"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="videos-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="videos-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="videos-slider-container06">
                <div className="videos-slider-container07">
                  <Player
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/642076b9-7f4e-4bff-984d-536c84de0957"
                    loop
                    speed="0.3"
                    autoplay
                    background="transparent"
                    className="videos-slider-lottie-node1"
                  ></Player>
                  <span className="videos-slider-text3">{props.text2}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="videos-slider-container08">
              <div className="videos-slider-storyfortschrit2">
                <div className="videos-slider-passiv4"></div>
                <div className="videos-slider-passiv5"></div>
                <div className="videos-slider-activ2"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="videos-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="videos-slider-rarrow2 finger"
              ></div>
              <h1 className="">{props.heading2}</h1>
              <div className="videos-slider-container09">
                <span className="videos-slider-text4">{props.text122}</span>
                <div className="videos-slider-container10">
                  <img
                    alt={props.imageAlt32}
                    src={props.imageSrc32}
                    className="videos-slider-image1"
                  />
                  <span className="videos-slider-text5">{props.text12}</span>
                </div>
                <div className="videos-slider-container11">
                  <img
                    alt={props.imageAlt321}
                    src={props.imageSrc321}
                    className="videos-slider-image2"
                  />
                  <span className="videos-slider-text6">{props.text121}</span>
                </div>
                <VideosEx
                  rootClassName="videos-ex-root-class-name2"
                  className=""
                ></VideosEx>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="videos-slider-container13">
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

VideosSlider.defaultProps = {
  imageAlt1: 'image',
  imageSrc32: '/Bewegtbilder Icons/mp4.svg',
  text: 'Lottie-Animationen sind bei gleicher Qualität deutlich kleiner als andere Formate wie GIF oder MP4 Lottie-Dateien sind vektorbasiert, d.h. sie können ohne Qualitätsverlust vergrößert oder verkleinert werden. Hier ein Beispiel für eine Lottie-Datei. Da Lottie von AirBnB kommerzialisiert wird, hat es jedoch einen entscheidenden Nachteil. Die Nutzung von Lottie ohne den Anbieter erfordert technisches Verständnis.',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  heading2: 'Formate',
  imageAlt321: 'image',
  text11:
    'Die Endgeräte werden mit Strom betrieben, die Einflussnahme auf diesen Bereich ist jedoch gering.',
  text21:
    'Entscheidend für die Dateigröße eines Videos ist die verwendete Auflösung. Wenn Videos einen geringen cinematischen Anspruch haben oder als Beiwerk zu betrachten sind, ist eine FullHD Auflösung grundsätzlich nicht notwendig. Es sollte genau überlegt werden, wie hoch die Auflösung sein soll. Sie sollte immer an die tatsächliche Darstellungsgröße des Players angepasst werden.',
  heading: 'Autoplay',
  text3: 'Text',
  text122:
    'Eine genaue Empfehlung für Videos kann nicht gegeben werden, aber es ist ratsam, moderne Formate zu verwenden, um kleinere Dateigrößen bei gleicher Qualität zu erzielen.',
  imageSrc321: '/Bewegtbilder Icons/webm.svg',
  imageAlt3: 'image',
  imageAlt32: 'image',
  text121:
    'WebM mit dem VP9-Codec kann bei vergleichbarer Qualität bis zu 50% kleinere Dateigrößen erreichen als MP4 mit dem H.264-Codec.',
  text1:
    'Grundsätzlich wäre es besser, wenn Videos nicht automatisch abgespielt würden: Automatisch abgespielte Videos erzeugen Traffic, der unter Umständen gar nicht notwendig ist, weil der Empfänger das Video gar nicht anschaut oder anschauen will.',
  imageAlt: 'image',
  text2:
    'Entscheidend für die Dateigröße eines Videos ist die verwendete Auflösung. Wenn Videos einen geringen cinematischen Anspruch haben oder als Beiwerk zu betrachten sind, ist eine FullHD Auflösung grundsätzlich nicht notwendig. Es sollte genau überlegt werden, wie hoch die Auflösung sein soll. Sie sollte immer an die tatsächliche Darstellungsgröße des Players angepasst werden.',
  imageAlt31: 'image',
  text12:
    'Der H.265-Codec (HEVC), der in MP4-Containern verwendet werden kann, bietet ebenfalls eine hohe Kompressionseffizienz und kann Dateigrößen im Vergleich zu H.264 um etwa 40-50% reduzieren.',
  heading1: 'Qualität',
  imageAlt11: 'image',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc31: '8e735af8-eb7b-4aa1-a575-efd360fda1c8',
  rootClassName: '',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt111: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  heading11: 'Dateiforamte',
  imageSrc3: '/Bewegtbilder Icons/noplay.svg',
}

VideosSlider.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc32: PropTypes.string,
  text: PropTypes.string,
  imageSrc1: PropTypes.string,
  heading2: PropTypes.string,
  imageAlt321: PropTypes.string,
  text11: PropTypes.string,
  text21: PropTypes.string,
  heading: PropTypes.string,
  text3: PropTypes.string,
  text122: PropTypes.string,
  imageSrc321: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt32: PropTypes.string,
  text121: PropTypes.string,
  text1: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  imageAlt31: PropTypes.string,
  text12: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc31: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc11: PropTypes.string,
  heading11: PropTypes.string,
  imageSrc3: PropTypes.string,
}

export default VideosSlider
