import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import HALExtendetcontent from './hal-extendetcontent'
import ABackbutton from './a-backbutton'
import './hal-slider.css'

const HALSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`hal-slider-container ${props.rootClassName} `}>
      <div className="hal-slider-container01">
        <div className="hal-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="hal-slider-slide-1">
              <div className="hal-slider-storyfortschrit">
                <div
                  onClick={() => setSlideNumber(1)}
                  className="hal-slider-activ"
                ></div>
                <div
                  onClick={() => setSlideNumber(2)}
                  className="hal-slider-passiv"
                ></div>
                <div
                  onClick={() => setSlideNumber(3)}
                  className="hal-slider-passiv01"
                ></div>
                <div
                  onClick={() => setSlideNumber(4)}
                  className="hal-slider-passiv02"
                ></div>
                <div
                  onClick={() => setSlideNumber(5)}
                  className="hal-slider-passiv03"
                ></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="hal-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="hal-slider-rarrow finger"
              ></div>
              <div className="hal-slider-hal">
                <div className="hal-slider-container02">
                  <div className="hal-slider-container03">
                    <div className="hal-slider-container04"></div>
                  </div>
                </div>
                <div className="hal-slider-typedjs">
                  <div className="hal-slider-container05">
                    <span
                      id="animate-with-typed-js"
                      className="hal-slider-text HAL"
                    >
                      I
                    </span>
                    <div className="">
                      <div className="hal-slider-container07">
                        <Script
                          html={`<script>
    var typed = new Typed('#animate-with-typed-js', {
        strings: [" Tippe rechts oder links, um in den Panelen vor- oder zurückzublättern."],
        typeSpeed: 10,
        startDelay: 0,
    
        showCursor: false,
        
        
        loop: false,
    });
</script>`}
                          className=""
                        ></Script>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Player
                id="pointer1"
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                loop
                speed="0.5"
                autoplay
                background="transparent"
                className="hal-slider-lottie-node"
              ></Player>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="hal-slider-slide-2">
              <div className="hal-slider-storyfortschrit1">
                <div
                  onClick={() => setSlideNumber(1)}
                  className="hal-slider-passiv04"
                ></div>
                <div
                  onClick={() => setSlideNumber(2)}
                  className="hal-slider-activ1"
                ></div>
                <div
                  onClick={() => setSlideNumber(3)}
                  className="hal-slider-passiv05"
                ></div>
                <div
                  onClick={() => setSlideNumber(4)}
                  className="hal-slider-passiv06"
                ></div>
                <div
                  onClick={() => setSlideNumber(5)}
                  className="hal-slider-passiv07"
                ></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="hal-slider-larrow1 finger"
              ></div>
              <HALExtendetcontent
                rootClassName="hal-extendetcontent-root-class-name1"
                className=""
              ></HALExtendetcontent>
              <div
                onClick={() => setSlideNumber(3)}
                className="hal-slider-rarrow1 finger"
              ></div>
              <div className="hal-slider-hal1">
                <div className="hal-slider-container08">
                  <div className="hal-slider-container09">
                    <div className="hal-slider-container10"></div>
                  </div>
                </div>
                <div className="hal-slider-typedjs1">
                  <div className="hal-slider-container11">
                    <span
                      id="animate-with-typed-js"
                      className="hal-slider-text01 HAL"
                    >
                      I
                    </span>
                    <div className="">
                      <div className="hal-slider-container13">
                        <Script
                          html={`<script>
    var typed = new Typed('#animate-with-typed-js', {
        strings: [" Mit dem Erweiterungsbanner können Querverweise, URLs zu anderen Seiten sowie zusätzliche Informationen ein- und ausgeklappt werden."],
        typeSpeed: 10,
        startDelay: 0,
    
        showCursor: false,
        
        
        loop: false,
    });
</script>`}
                          className=""
                        ></Script>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Player
                id="pointer2"
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                loop
                speed="0.5"
                autoplay
                background="transparent"
                className="hal-slider-lottie-node1"
              ></Player>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="hal-slider-slide-3">
              <div className="hal-slider-storyfortschrit2">
                <div
                  onClick={() => setSlideNumber(1)}
                  className="hal-slider-passiv08"
                ></div>
                <div
                  onClick={() => setSlideNumber(2)}
                  className="hal-slider-passiv09"
                ></div>
                <div
                  onClick={() => setSlideNumber(3)}
                  className="hal-slider-activ2"
                ></div>
                <div
                  onClick={() => setSlideNumber(4)}
                  className="hal-slider-passiv10"
                ></div>
                <div
                  onClick={() => setSlideNumber(5)}
                  className="hal-slider-passiv11"
                ></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="hal-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="hal-slider-rarrow2 finger"
              ></div>
              <div className="hal-slider-hal2">
                <div className="hal-slider-container14">
                  <div className="hal-slider-container15">
                    <div className="hal-slider-container16"></div>
                  </div>
                </div>
                <div className="hal-slider-typedjs2">
                  <div className="hal-slider-container17">
                    <span
                      id="animate-with-typed-js"
                      className="hal-slider-text02 HAL"
                    >
                      I
                    </span>
                    <div className="">
                      <div className="hal-slider-container19">
                        <Script
                          html={`<script>
    var typed = new Typed('#animate-with-typed-js', {
        strings: [" Die verschiedenen Skalen geben Auskunft über die jeweiligen Kapitel. Die GRÜNE Skala gibt die Effektivität der Maßnahme an, je höher desto besser. Die GRAUE Skala gibt Auskunft über den Umsetzungsaufwand, je geringer, desto besser."],
        typeSpeed: 10,
        startDelay: 0,
    
        showCursor: false,
        
        
        loop: false,
    });
</script>`}
                          className=""
                        ></Script>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hal-slider-container20">
                <div className="hal-slider-container21">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="hal-slider-image"
                  />
                  <img
                    alt={props.imageAlt5}
                    src={props.imageSrc5}
                    className="hal-slider-image1"
                  />
                </div>
              </div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="hal-slider-slide-4">
              <div className="hal-slider-storyfortschrit3">
                <div
                  onClick={() => setSlideNumber(1)}
                  className="hal-slider-passiv12"
                ></div>
                <div
                  onClick={() => setSlideNumber(2)}
                  className="hal-slider-passiv13"
                ></div>
                <div
                  onClick={() => setSlideNumber(3)}
                  className="hal-slider-passiv14"
                ></div>
                <div
                  onClick={() => setSlideNumber(4)}
                  className="hal-slider-activ3"
                ></div>
                <div
                  onClick={() => setSlideNumber(5)}
                  className="hal-slider-passiv15"
                ></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="hal-slider-larrow3 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="hal-slider-rarrow3 finger"
              ></div>
              <div className="hal-slider-hal3">
                <div className="hal-slider-container22">
                  <div className="hal-slider-container23">
                    <div className="hal-slider-container24"></div>
                  </div>
                </div>
                <div className="hal-slider-typedjs3">
                  <div className="hal-slider-container25">
                    <span
                      id="animate-with-typed-js"
                      className="hal-slider-text03 HAL"
                    >
                      I
                    </span>
                    <div className="">
                      <div className="hal-slider-container27">
                        <Script
                          html={`<script>
    var typed = new Typed('#animate-with-typed-js', {
        strings: [" Die Uhr gibt an, wie lange man zum Lesen einer Einheit braucht. GRUNDLAGEN sind Erklärungen, die gelesen werden sollten. EINFACHE Lektionen erfordern ein geringes technisches Verständnis. FORTGESCHRITTENE Lektionen sind komplexer. EXPERTEN Lektionen erfordern oft ein komplettes Umdenken im Gestaltungsprozess."],
        typeSpeed: 10,
        startDelay: 0,
    
        showCursor: false,
        
        
        loop: false,
    });
</script>`}
                          className=""
                        ></Script>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hal-slider-container28">
                <span className="hal-slider-text04 Rubrik">
                  {props.text211}
                </span>
                <span className="hal-slider-text05 Rubrik">{props.text22}</span>
                <span className="hal-slider-text06 Rubrik">{props.text2}</span>
                <span className="hal-slider-text07 Rubrik">{props.text21}</span>
              </div>
              <div className="hal-slider-container29">
                <img
                  alt={props.imageAlt4}
                  src={props.imageSrc4}
                  className="hal-slider-image2"
                />
                <span className="hal-slider-text08">{props.text1}</span>
              </div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="hal-slider-slide-5">
              <div className="hal-slider-storyfortschrit4">
                <div
                  onClick={() => setSlideNumber(1)}
                  className="hal-slider-passiv16"
                ></div>
                <div
                  onClick={() => setSlideNumber(2)}
                  className="hal-slider-passiv17"
                ></div>
                <div
                  onClick={() => setSlideNumber(3)}
                  className="hal-slider-passiv18"
                ></div>
                <div
                  onClick={() => setSlideNumber(4)}
                  className="hal-slider-passiv19"
                ></div>
                <div
                  onClick={() => setSlideNumber(5)}
                  className="hal-slider-activ4"
                ></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="hal-slider-larrow4 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="hal-slider-rarrow4 finger"
              ></div>
              <div className="hal-slider-hal4">
                <div className="hal-slider-container30">
                  <div className="hal-slider-container31">
                    <div className="hal-slider-container32"></div>
                  </div>
                </div>
                <div className="hal-slider-typedjs4">
                  <div className="hal-slider-container33">
                    <span
                      id="animate-with-typed-js"
                      className="hal-slider-text09 HAL"
                    >
                      I
                    </span>
                    <div className="">
                      <div className="hal-slider-container35">
                        <Script
                          html={`<script>
    var typed = new Typed('#animate-with-typed-js', {
        strings: [" Mit dem großen Zurück-Button gelangt man immer zum vorherigen Menü und verlässt auch dieses Tutorial."],
        typeSpeed: 10,
        startDelay: 0,
    
        showCursor: false,
        
        
        loop: false,
    });
</script>`}
                          className=""
                        ></Script>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/" className="hal-slider-navlink">
                <ABackbutton
                  rootClassName="a-backbutton-root-class-name1"
                  className="hal-slider-component1"
                ></ABackbutton>
              </Link>
              <Player
                id="pointer4"
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                loop
                speed="0.5"
                autoplay
                background="transparent"
                className="hal-slider-lottie-node2"
              ></Player>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

HALSlider.defaultProps = {
  text22: 'EINFACH',
  imageAlt22: 'image',
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  text2: 'FORTGESCHRITTEN',
  imageAlt211: 'image',
  imageAlt21: 'image',
  imageSrc5: '/Icons/gray/2g.svg',
  imageAlt23: 'image',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  text: 'Text',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  imageAlt4: 'image',
  imageAlt1: 'image',
  text21: 'EXPERTE',
  imageAlt2: 'image',
  imageSrc4: '/Icons/uhr.svg',
  text211: 'GRUNDLAGEN',
  imageAlt3: 'image',
  imageAlt: 'image',
  imageAlt111: 'image',
  rootClassName: '',
  imageAlt11: 'image',
  imageAlt5: 'image',
  imageSrc3: '/Icons/green/4.svg',
  text1: '5 Min',
}

HALSlider.propTypes = {
  text22: PropTypes.string,
  imageAlt22: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc: PropTypes.string,
  text2: PropTypes.string,
  imageAlt211: PropTypes.string,
  imageAlt21: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt23: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageSrc11: PropTypes.string,
  text: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt1: PropTypes.string,
  text21: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc4: PropTypes.string,
  text211: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt111: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc3: PropTypes.string,
  text1: PropTypes.string,
}

export default HALSlider
