import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './a-slider-template-10.css'

const ASliderTemplate10 = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`a-slider-template-10-container ${props.rootClassName} `}>
      <div className="a-slider-template-10-container1">
        <div className="a-slider-template-10-sliderpanel">
          {slideNumber === 1 && (
            <div className="a-slider-template-10-slide-1">
              <div className="a-slider-template-10-storyfortschrit">
                <div className="a-slider-template-10-activ"></div>
                <div className="a-slider-template-10-passiv"></div>
                <div className="a-slider-template-10-passiv01"></div>
                <div className="a-slider-template-10-passiv02"></div>
                <div className="a-slider-template-10-passiv03"></div>
                <div className="a-slider-template-10-passiv04"></div>
                <div className="a-slider-template-10-passiv05"></div>
                <div className="a-slider-template-10-passiv06"></div>
                <div className="a-slider-template-10-passiv07"></div>
                <div className="a-slider-template-10-passiv08"></div>
              </div>
              <div
                onClick={() => setSlideNumber(10)}
                className="a-slider-template-10-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="a-slider-template-10-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="a-slider-template-10-lottie-node"
                ></Player>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="a-slider-template-10-slide-2">
              <div className="a-slider-template-10-storyfortschrit01">
                <div className="a-slider-template-10-passiv09"></div>
                <div className="a-slider-template-10-activ01"></div>
                <div className="a-slider-template-10-passiv10"></div>
                <div className="a-slider-template-10-passiv11"></div>
                <div className="a-slider-template-10-passiv12"></div>
                <div className="a-slider-template-10-passiv13"></div>
                <div className="a-slider-template-10-passiv14"></div>
                <div className="a-slider-template-10-passiv15"></div>
                <div className="a-slider-template-10-passiv16"></div>
                <div className="a-slider-template-10-passiv17"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="a-slider-template-10-larrow01 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="a-slider-template-10-rarrow01 finger"
              ></div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="a-slider-template-10-slide-3">
              <div className="a-slider-template-10-storyfortschrit02">
                <div className="a-slider-template-10-passiv18"></div>
                <div className="a-slider-template-10-passiv19"></div>
                <div className="a-slider-template-10-activ02"></div>
                <div className="a-slider-template-10-passiv20"></div>
                <div className="a-slider-template-10-passiv21"></div>
                <div className="a-slider-template-10-passiv22"></div>
                <div className="a-slider-template-10-passiv23"></div>
                <div className="a-slider-template-10-passiv24"></div>
                <div className="a-slider-template-10-passiv25"></div>
                <div className="a-slider-template-10-passiv26"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="a-slider-template-10-larrow02 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="a-slider-template-10-rarrow02 finger"
              ></div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="a-slider-template-10-slide-4">
              <div className="a-slider-template-10-storyfortschrit03">
                <div className="a-slider-template-10-passiv27"></div>
                <div className="a-slider-template-10-passiv28"></div>
                <div className="a-slider-template-10-passiv29"></div>
                <div className="a-slider-template-10-activ03"></div>
                <div className="a-slider-template-10-passiv30"></div>
                <div className="a-slider-template-10-passiv31"></div>
                <div className="a-slider-template-10-passiv32"></div>
                <div className="a-slider-template-10-passiv33"></div>
                <div className="a-slider-template-10-passiv34"></div>
                <div className="a-slider-template-10-passiv35"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="a-slider-template-10-larrow03 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="a-slider-template-10-rarrow03 finger"
              ></div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="a-slider-template-10-slide-5">
              <div className="a-slider-template-10-storyfortschrit04">
                <div className="a-slider-template-10-passiv36"></div>
                <div className="a-slider-template-10-passiv37"></div>
                <div className="a-slider-template-10-passiv38"></div>
                <div className="a-slider-template-10-passiv39"></div>
                <div className="a-slider-template-10-activ04"></div>
                <div className="a-slider-template-10-passiv40"></div>
                <div className="a-slider-template-10-passiv41"></div>
                <div className="a-slider-template-10-passiv42"></div>
                <div className="a-slider-template-10-passiv43"></div>
                <div className="a-slider-template-10-passiv44"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="a-slider-template-10-larrow04 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(6)}
                className="a-slider-template-10-rarrow04 finger"
              ></div>
            </div>
          )}
          {slideNumber === 6 && (
            <div className="a-slider-template-10-slide-6">
              <div className="a-slider-template-10-storyfortschrit05">
                <div className="a-slider-template-10-passiv45"></div>
                <div className="a-slider-template-10-passiv46"></div>
                <div className="a-slider-template-10-passiv47"></div>
                <div className="a-slider-template-10-passiv48"></div>
                <div className="a-slider-template-10-passiv49"></div>
                <div className="a-slider-template-10-activ05"></div>
                <div className="a-slider-template-10-passiv50"></div>
                <div className="a-slider-template-10-passiv51"></div>
                <div className="a-slider-template-10-passiv52"></div>
                <div className="a-slider-template-10-passiv53"></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="a-slider-template-10-larrow05 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(7)}
                className="a-slider-template-10-rarrow05 finger"
              ></div>
            </div>
          )}
          {slideNumber === 7 && (
            <div className="a-slider-template-10-slide-7">
              <div className="a-slider-template-10-storyfortschrit06">
                <div className="a-slider-template-10-passiv54"></div>
                <div className="a-slider-template-10-passiv55"></div>
                <div className="a-slider-template-10-passiv56"></div>
                <div className="a-slider-template-10-passiv57"></div>
                <div className="a-slider-template-10-passiv58"></div>
                <div className="a-slider-template-10-passiv59"></div>
                <div className="a-slider-template-10-activ06"></div>
                <div className="a-slider-template-10-passiv60"></div>
                <div className="a-slider-template-10-passiv61"></div>
                <div className="a-slider-template-10-passiv62"></div>
              </div>
              <div
                onClick={() => setSlideNumber(6)}
                className="a-slider-template-10-larrow06 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(8)}
                className="a-slider-template-10-rarrow06 finger"
              ></div>
            </div>
          )}
          {slideNumber === 8 && (
            <div className="a-slider-template-10-slide-8">
              <div className="a-slider-template-10-storyfortschrit07">
                <div className="a-slider-template-10-passiv63"></div>
                <div className="a-slider-template-10-passiv64"></div>
                <div className="a-slider-template-10-passiv65"></div>
                <div className="a-slider-template-10-passiv66"></div>
                <div className="a-slider-template-10-passiv67"></div>
                <div className="a-slider-template-10-passiv68"></div>
                <div className="a-slider-template-10-passiv69"></div>
                <div className="a-slider-template-10-activ07"></div>
                <div className="a-slider-template-10-passiv70"></div>
                <div className="a-slider-template-10-passiv71"></div>
              </div>
              <div
                onClick={() => setSlideNumber(7)}
                className="a-slider-template-10-larrow07 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(9)}
                className="a-slider-template-10-rarrow07 finger"
              ></div>
            </div>
          )}
          {slideNumber === 9 && (
            <div className="a-slider-template-10-slide-9">
              <div className="a-slider-template-10-storyfortschrit08">
                <div className="a-slider-template-10-passiv72"></div>
                <div className="a-slider-template-10-passiv73"></div>
                <div className="a-slider-template-10-passiv74"></div>
                <div className="a-slider-template-10-passiv75"></div>
                <div className="a-slider-template-10-passiv76"></div>
                <div className="a-slider-template-10-passiv77"></div>
                <div className="a-slider-template-10-passiv78"></div>
                <div className="a-slider-template-10-passiv79"></div>
                <div className="a-slider-template-10-activ08"></div>
                <div className="a-slider-template-10-passiv80"></div>
              </div>
              <div
                onClick={() => setSlideNumber(8)}
                className="a-slider-template-10-larrow08 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(10)}
                className="a-slider-template-10-rarrow08 finger"
              ></div>
            </div>
          )}
          {slideNumber === 10 && (
            <div className="a-slider-template-10-slide-10">
              <div className="a-slider-template-10-storyfortschrit09">
                <div className="a-slider-template-10-passiv81"></div>
                <div className="a-slider-template-10-passiv82"></div>
                <div className="a-slider-template-10-passiv83"></div>
                <div className="a-slider-template-10-passiv84"></div>
                <div className="a-slider-template-10-passiv85"></div>
                <div className="a-slider-template-10-passiv86"></div>
                <div className="a-slider-template-10-passiv87"></div>
                <div className="a-slider-template-10-passiv88"></div>
                <div className="a-slider-template-10-passiv89"></div>
                <div className="a-slider-template-10-activ09"></div>
              </div>
              <div
                onClick={() => setSlideNumber(9)}
                className="a-slider-template-10-larrow09 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="a-slider-template-10-rarrow09 finger"
              ></div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="a-slider-template-10-container3">
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

ASliderTemplate10.defaultProps = {
  imageAlt1: 'image',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt111: 'image',
  imageAlt: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  rootClassName: '',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageAlt11: 'image',
}

ASliderTemplate10.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt11: PropTypes.string,
}

export default ASliderTemplate10
