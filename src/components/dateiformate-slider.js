import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import DateiformateEx1 from './dateiformate-ex1'
import DateiformateEx2 from './dateiformate-ex2'
import './dateiformate-slider.css'

const DateiformateSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`dateiformate-slider-container ${props.rootClassName} `}>
      <div className="dateiformate-slider-container01">
        <div className="dateiformate-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="dateiformate-slider-container02">
              <div className="dateiformate-slider-storyfortschrit">
                <div className="dateiformate-slider-activ"></div>
                <div className="dateiformate-slider-passiv"></div>
                <div className="dateiformate-slider-passiv01"></div>
                <div className="dateiformate-slider-passiv02"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="dateiformate-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="dateiformate-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="dateiformate-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="dateiformate-slider-container03">
                <div className="dateiformate-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="dateiformate-slider-image"
                  />
                  <span className="dateiformate-slider-text01">
                    {props.text}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="dateiformate-slider-container05">
              <div className="dateiformate-slider-storyfortschrit1">
                <div className="dateiformate-slider-passiv03"></div>
                <div className="dateiformate-slider-activ1"></div>
                <div className="dateiformate-slider-passiv04"></div>
                <div className="dateiformate-slider-passiv05"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="dateiformate-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="dateiformate-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="dateiformate-slider-container06">
                <div className="dateiformate-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="dateiformate-slider-image1"
                  />
                  <span className="dateiformate-slider-text03">
                    {props.text1}
                  </span>
                </div>
                <div className="dateiformate-slider-container08">
                  <img
                    alt={props.imageAlt311}
                    src={props.imageSrc311}
                    className="dateiformate-slider-image2"
                  />
                  <span className="dateiformate-slider-text04">
                    {props.text11}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="dateiformate-slider-container09">
              <div className="dateiformate-slider-storyfortschrit2">
                <div className="dateiformate-slider-passiv06"></div>
                <div className="dateiformate-slider-passiv07"></div>
                <div className="dateiformate-slider-activ2"></div>
                <div className="dateiformate-slider-passiv08"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="dateiformate-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="dateiformate-slider-rarrow2 finger"
              ></div>
              <h1 className="">{props.heading11}</h1>
              <div className="dateiformate-slider-container10">
                <div className="dateiformate-slider-container11">
                  <img
                    alt={props.imageAlt31112}
                    src={props.imageSrc31112}
                    className="dateiformate-slider-image3"
                  />
                  <span className="dateiformate-slider-text06">
                    {props.text1112}
                  </span>
                </div>
                <div className="dateiformate-slider-container12">
                  <img
                    alt={props.imageAlt311111}
                    src={props.imageSrc311111}
                    className="dateiformate-slider-image4"
                  />
                  <span className="dateiformate-slider-text07">
                    {props.text11111}
                  </span>
                </div>
                <DateiformateEx1
                  rootClassName="dateiformate-ex1-root-class-name1"
                  className=""
                ></DateiformateEx1>
              </div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="dateiformate-slider-container13">
              <div className="dateiformate-slider-storyfortschrit3">
                <div className="dateiformate-slider-passiv09"></div>
                <div className="dateiformate-slider-passiv10"></div>
                <div className="dateiformate-slider-passiv11"></div>
                <div className="dateiformate-slider-activ3"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="dateiformate-slider-larrow3 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="dateiformate-slider-rarrow3 finger"
              ></div>
              <h1 className="">{props.heading111}</h1>
              <div className="dateiformate-slider-container14">
                <div className="dateiformate-slider-container15">
                  <span className="dateiformate-slider-text09">
                    {props.text11121}
                  </span>
                </div>
                <DateiformateEx1
                  rootClassName="dateiformate-ex1-root-class-name2"
                  className=""
                ></DateiformateEx1>
              </div>
              <DateiformateEx2 className=""></DateiformateEx2>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="dateiformate-slider-container17">
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

DateiformateSlider.defaultProps = {
  text1111:
    'Üblicherweise werden Schriften über ein CDN eingebunden, das sind Links, die die Schriften zur Verfügung stellen. Bei kommerziellen Schriften ist dies notwendig, damit der Betreiber weiß, wie viele Aufrufe auf der Seite des Nutzers generiert werden. Dies hat jedoch zur Folge, dass eine Verbindung zu einem anderen Server als dem, auf dem sich die Website befindet, hergestellt wird.',
  imageAlt3: 'image',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  text12:
    'Üblicherweise werden Schriften über ein CDN eingebunden, das sind Links, die die Schriften zur Verfügung stellen. Bei kommerziellen Schriften ist dies notwendig, damit der Betreiber weiß, wie viele Aufrufe auf der Seite des Nutzers generiert werden. Dies hat jedoch zur Folge, dass eine Verbindung zu einem anderen Server als dem, auf dem sich die Website befindet, hergestellt wird.',
  text111:
    'Üblicherweise werden Schriften über ein CDN eingebunden, das sind Links, die die Schriften zur Verfügung stellen. Bei kommerziellen Schriften ist dies notwendig, damit der Betreiber weiß, wie viele Aufrufe auf der Seite des Nutzers generiert werden. Dies hat jedoch zur Folge, dass eine Verbindung zu einem anderen Server als dem, auf dem sich die Website befindet, hergestellt wird.',
  imageAlt311121: 'image',
  imageSrc3: '/font icons/font.svg',
  text112:
    'Üblicherweise werden Schriften über ein CDN eingebunden, das sind Links, die die Schriften zur Verfügung stellen. Bei kommerziellen Schriften ist dies notwendig, damit der Betreiber weiß, wie viele Aufrufe auf der Seite des Nutzers generiert werden. Dies hat jedoch zur Folge, dass eine Verbindung zu einem anderen Server als dem, auf dem sich die Website befindet, hergestellt wird.',
  imageSrc311111: '/font icons/woff2.svg',
  imageAlt31112: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  text111111:
    'WOFF2 ist eine verbesserte Version von WOFF, die eine noch effizientere Komprimierung bietet. Es wird von den meisten modernen Browsern unterstützt, bietet aber keine Vorteile gegenüber WOFF in Browsern, die WOFF2 nicht unterstützen. Aus Gründen der Dateigröße wird die Verwendung von WOFF2 empfohlen.',
  text11111:
    'WOFF2 ist eine verbesserte Version von WOFF, die eine noch effizientere Komprimierung bietet. Es wird von den meisten modernen Browsern unterstützt, bietet aber keine Vorteile gegenüber WOFF in Browsern, die WOFF2 nicht unterstützen. Aus Gründen der Dateigröße wird die Verwendung von WOFF2 empfohlen.',
  heading: 'fontfiles',
  imageAlt31111: 'image',
  imageAlt311111: 'image',
  imageSrc31112: '/font icons/woff.svg',
  imageAlt3111111: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt311: 'image',
  imageSrc3111111: 'f05f3da3-f115-4db3-b838-684d315f6eab',
  imageSrc3112: '7fa98f4e-02ba-49d0-97d5-3b3c98c038f4',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc311121: '394e89fe-f7d1-46b8-8b46-a5e309393022',
  heading111: 'Transfonter',
  heading11: 'Dateiformate',
  imageAlt312: 'image',
  imageAlt31: 'image',
  text1112:
    'WOFF ist ein web-spezifisches Format, das von allen gängigen Desktop-Browsern unterstützt wird. Es ist eine komprimierte Version von TTF und OTF, was zu kleineren Dateien und schnelleren Ladezeiten führt.',
  imageAlt111: 'image',
  imageAlt1: 'Fontfiles',
  imageSrc31: '/font icons/ttf.svg',
  text1:
    'TTF ist ein älteres Schriftformat, das von Apple entwickelt wurde. Es wird von vielen verschiedenen Systemen und Plattformen unterstützt, einschließlich älterer Versionen von Safari, Android und iOS. Wenn Sie eine Schriftart herunterladen, liegt sie oft in diesem Format vor.',
  imageSrc3111: '394e89fe-f7d1-46b8-8b46-a5e309393022',
  imageAlt3111: 'image',
  rootClassName: '',
  heading1: 'Dateiformate',
  imageAlt: 'image',
  imageAlt3112: 'image',
  imageSrc312: '9e2738b2-bee3-42dd-851a-7a07621ee575',
  imageSrc311: '/font icons/otf.svg',
  imageSrc31111: 'f05f3da3-f115-4db3-b838-684d315f6eab',
  imageAlt11: 'image',
  text11:
    'OTF ist eine von Microsoft und Adobe entwickelte Erweiterung des TTF-Formats. Es bietet zusätzliche Funktionen wie die Unterstützung von Ligaturen und Glyphen. OTF ist weitgehend abwärtskompatibel zu TTF, d.h. wenn Sie eine Schriftart herunterladen, liegt sie häufig in diesem Format vor.',
  text11121:
    'Mit Transfonter ist es möglich, Schriften verlustfrei zu konvertieren. Wenn Sie also die Berechtigung haben, Schriften zu verändern, können Sie die Dateigröße reduzieren, indem Sie Ihre ttf- oder otf-Schriften konvertieren.',
  text: 'Üblicherweise werden Schriften über ein CDN eingebunden, das sind Links, die die Schriften zur Verfügung stellen. Bei kommerziellen Schriften ist dies notwendig, damit der Betreiber weiß, wie viele Aufrufe auf der Seite des Nutzers generiert werden. Dies hat jedoch zur Folge, dass eine Verbindung zu einem anderen Server als dem, auf dem sich die Website befindet, hergestellt wird.',
}

DateiformateSlider.propTypes = {
  text1111: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc111: PropTypes.string,
  text12: PropTypes.string,
  text111: PropTypes.string,
  imageAlt311121: PropTypes.string,
  imageSrc3: PropTypes.string,
  text112: PropTypes.string,
  imageSrc311111: PropTypes.string,
  imageAlt31112: PropTypes.string,
  imageSrc1: PropTypes.string,
  text111111: PropTypes.string,
  text11111: PropTypes.string,
  heading: PropTypes.string,
  imageAlt31111: PropTypes.string,
  imageAlt311111: PropTypes.string,
  imageSrc31112: PropTypes.string,
  imageAlt3111111: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt311: PropTypes.string,
  imageSrc3111111: PropTypes.string,
  imageSrc3112: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc311121: PropTypes.string,
  heading111: PropTypes.string,
  heading11: PropTypes.string,
  imageAlt312: PropTypes.string,
  imageAlt31: PropTypes.string,
  text1112: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc31: PropTypes.string,
  text1: PropTypes.string,
  imageSrc3111: PropTypes.string,
  imageAlt3111: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt3112: PropTypes.string,
  imageSrc312: PropTypes.string,
  imageSrc311: PropTypes.string,
  imageSrc31111: PropTypes.string,
  imageAlt11: PropTypes.string,
  text11: PropTypes.string,
  text11121: PropTypes.string,
  text: PropTypes.string,
}

export default DateiformateSlider
