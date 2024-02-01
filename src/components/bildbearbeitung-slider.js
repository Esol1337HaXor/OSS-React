import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import BildbearbeitungEx1 from './bildbearbeitung-ex1'
import './bildbearbeitung-slider.css'

const BildbearbeitungSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`bildbearbeitung-slider-container ${props.rootClassName} `}>
      <div className="bildbearbeitung-slider-container01">
        <div className="bildbearbeitung-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="bildbearbeitung-slider-container02">
              <div className="bildbearbeitung-slider-storyfortschrit">
                <div className="bildbearbeitung-slider-activ"></div>
                <div className="bildbearbeitung-slider-passiv"></div>
                <div className="bildbearbeitung-slider-passiv01"></div>
                <div className="bildbearbeitung-slider-passiv02"></div>
                <div className="bildbearbeitung-slider-passiv03"></div>
                <div className="bildbearbeitung-slider-passiv04"></div>
              </div>
              <div
                onClick={() => setSlideNumber(6)}
                className="bildbearbeitung-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="bildbearbeitung-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="bildbearbeitung-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="bildbearbeitung-slider-container03">
                <div className="bildbearbeitung-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="bildbearbeitung-slider-image"
                  />
                  <span className="bildbearbeitung-slider-text01">
                    {props.text}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="bildbearbeitung-slider-container05">
              <div className="bildbearbeitung-slider-storyfortschrit1">
                <div className="bildbearbeitung-slider-passiv05"></div>
                <div className="bildbearbeitung-slider-activ1"></div>
                <div className="bildbearbeitung-slider-passiv06"></div>
                <div className="bildbearbeitung-slider-passiv07"></div>
                <div className="bildbearbeitung-slider-passiv08"></div>
                <div className="bildbearbeitung-slider-passiv09"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="bildbearbeitung-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="bildbearbeitung-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="bildbearbeitung-slider-container06">
                <div className="bildbearbeitung-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="bildbearbeitung-slider-image1"
                  />
                  <span className="bildbearbeitung-slider-text03">
                    {props.text1}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="bildbearbeitung-slider-container08">
              <div className="bildbearbeitung-slider-storyfortschrit2">
                <div className="bildbearbeitung-slider-passiv10"></div>
                <div className="bildbearbeitung-slider-passiv11"></div>
                <div className="bildbearbeitung-slider-activ2"></div>
                <div className="bildbearbeitung-slider-passiv12"></div>
                <div className="bildbearbeitung-slider-passiv13"></div>
                <div className="bildbearbeitung-slider-passiv14"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="bildbearbeitung-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="bildbearbeitung-slider-rarrow2 finger"
              ></div>
              <h1 className="">{props.heading11}</h1>
              <div className="bildbearbeitung-slider-container09">
                <div className="bildbearbeitung-slider-container10">
                  <img
                    alt={props.imageAlt311}
                    src={props.imageSrc311}
                    className="bildbearbeitung-slider-image2"
                  />
                  <span className="bildbearbeitung-slider-text05">
                    {props.text11}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="bildbearbeitung-slider-container11">
              <div className="bildbearbeitung-slider-storyfortschrit3">
                <div className="bildbearbeitung-slider-passiv15"></div>
                <div className="bildbearbeitung-slider-passiv16"></div>
                <div className="bildbearbeitung-slider-passiv17"></div>
                <div className="bildbearbeitung-slider-activ3"></div>
                <div className="bildbearbeitung-slider-passiv18"></div>
                <div className="bildbearbeitung-slider-passiv19"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="bildbearbeitung-slider-larrow3 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="bildbearbeitung-slider-rarrow3 finger"
              ></div>
              <h1 className="">{props.heading111}</h1>
              <div className="bildbearbeitung-slider-container12">
                <div className="bildbearbeitung-slider-container13">
                  <img
                    alt={props.imageAlt3111}
                    src={props.imageSrc3111}
                    className="bildbearbeitung-slider-image3"
                  />
                  <span className="bildbearbeitung-slider-text07">
                    {props.text111}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="bildbearbeitung-slider-container14">
              <div className="bildbearbeitung-slider-storyfortschrit4">
                <div className="bildbearbeitung-slider-passiv20"></div>
                <div className="bildbearbeitung-slider-passiv21"></div>
                <div className="bildbearbeitung-slider-passiv22"></div>
                <div className="bildbearbeitung-slider-passiv23"></div>
                <div className="bildbearbeitung-slider-activ4"></div>
                <div className="bildbearbeitung-slider-passiv24"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="bildbearbeitung-slider-larrow4 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(6)}
                className="bildbearbeitung-slider-rarrow4 finger"
              ></div>
              <h1 className="">{props.heading1111}</h1>
              <div className="bildbearbeitung-slider-container15">
                <div className="bildbearbeitung-slider-container16">
                  <img
                    alt={props.imageAlt31111}
                    src={props.imageSrc31111}
                    className="bildbearbeitung-slider-image4"
                  />
                  <span className="bildbearbeitung-slider-text09">
                    {props.text1111}
                  </span>
                </div>
              </div>
              <BildbearbeitungEx1 className=""></BildbearbeitungEx1>
            </div>
          )}
          {slideNumber === 6 && (
            <div className="bildbearbeitung-slider-container17">
              <div className="bildbearbeitung-slider-storyfortschrit5">
                <div className="bildbearbeitung-slider-passiv25"></div>
                <div className="bildbearbeitung-slider-passiv26"></div>
                <div className="bildbearbeitung-slider-passiv27"></div>
                <div className="bildbearbeitung-slider-passiv28"></div>
                <div className="bildbearbeitung-slider-passiv29"></div>
                <div className="bildbearbeitung-slider-activ5"></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="bildbearbeitung-slider-larrow5 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="bildbearbeitung-slider-rarrow5 finger"
              ></div>
              <h1 className="">{props.heading11111}</h1>
              <div className="bildbearbeitung-slider-container18">
                <div className="bildbearbeitung-slider-container19">
                  <img
                    alt={props.imageAlt311111}
                    src={props.imageSrc311111}
                    className="bildbearbeitung-slider-image5"
                  />
                  <span className="bildbearbeitung-slider-text11">
                    {props.text11111}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="bildbearbeitung-slider-container21">
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

BildbearbeitungSlider.defaultProps = {
  imageAlt31111: 'image',
  imageSrc31111: '/Bilder Icons/oled.svg',
  imageSrc3111: '/Bilder Icons/unscharf.svg',
  text1:
    'Die Verwendung von Graustufen reduziert die Farbinformationen und damit die Dateigröße.',
  imageAlt3: 'image',
  imageAlt31: 'image',
  imageAlt311111: 'image',
  text1111:
    'Eine Möglichkeit, Energie bei den Endgeräten der Nutzer einzusparen, ist der Einsatz von OLED-Geräten. OLED-Bildschirme können Pixel abschalten, wenn sie schwarz darstellen. Der Dark Mode von Google Maps soll den Batterieverbrauch auf OLED Geräten um 63% gegenüber dem Light Mode reduzieren.',
  heading111: 'Unschärfe',
  heading11111: 'RGB',
  heading1: 'SW',
  imageAlt311: 'image',
  imageAlt3111: 'image',
  text11:
    'Dithering ist eine alte Methode, bei der nur wenige Farben verwendet werden. Durch das Punktieren von Farben können Verläufe in Bildern erzeugt werden, ohne Zwischenfarben zu verwenden. Da dadurch die Anzahl der zu speichernden Farben reduziert wird, ist auch eine Dateieinsparung zu erwarten.',
  heading1111: 'OLED',
  heading: 'Einschränkung',
  rootClassName: '',
  text: 'Es gibt einige Methoden, Bilder unabhängig vom Dateityp durch Filter und Stile zu verkleinern. Dies kann vor allem bei Fotografien angewendet werden. Dabei ist jedoch zu beachten, dass diese Methoden einen bestimmten Stil vorgeben.',
  text111:
    'Unschärfe ist bei Bildern unbeliebt, aber durch die Erstellung einer Vignette um das eigentliche Motiv herum und z.B. durch das Verwenden von blured Hintergründen kann die Dateigröße um fast 40% reduziert werden.',
  imageSrc311111: '/Bilder Icons/rgb.svg',
  imageSrc311: '/Bilder Icons/dither.svg',
  text11111:
    'Auch bei RGB gibt es energetische Unterschiede zwischen den Pixeln: Der blaue Pixel verbraucht etwa 30 % mehr Energie als die roten und grünen. Die Vermeidung von blauen Darstellungen kann daher bei OLED-Displays zu Einsparungen führen.',
  imageSrc3: '/Bilder Icons/imgedit.svg',
  imageSrc31: '/Bilder Icons/sw.svg',
  heading11: 'dithering',
}

BildbearbeitungSlider.propTypes = {
  imageAlt31111: PropTypes.string,
  imageSrc31111: PropTypes.string,
  imageSrc3111: PropTypes.string,
  text1: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt31: PropTypes.string,
  imageAlt311111: PropTypes.string,
  text1111: PropTypes.string,
  heading111: PropTypes.string,
  heading11111: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt311: PropTypes.string,
  imageAlt3111: PropTypes.string,
  text11: PropTypes.string,
  heading1111: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text111: PropTypes.string,
  imageSrc311111: PropTypes.string,
  imageSrc311: PropTypes.string,
  text11111: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc31: PropTypes.string,
  heading11: PropTypes.string,
}

export default BildbearbeitungSlider
