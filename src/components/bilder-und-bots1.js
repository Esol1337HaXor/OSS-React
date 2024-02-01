import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './bilder-und-bots1.css'

const BilderUndBots1 = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`bilder-und-bots1-container ${props.rootClassName} `}>
      <div className="bilder-und-bots1-container01">
        <div className="bilder-und-bots1-sliderpanel">
          {slideNumber === 1 && (
            <div className="bilder-und-bots1-container02">
              <div className="bilder-und-bots1-storyfortschrit">
                <div className="bilder-und-bots1-activ"></div>
                <div className="bilder-und-bots1-passiv"></div>
                <div className="bilder-und-bots1-passiv01"></div>
                <div className="bilder-und-bots1-passiv02"></div>
                <div className="bilder-und-bots1-passiv03"></div>
                <div className="bilder-und-bots1-passiv04"></div>
                <div className="bilder-und-bots1-passiv05"></div>
                <div className="bilder-und-bots1-passiv06"></div>
                <div className="bilder-und-bots1-passiv07"></div>
                <div className="bilder-und-bots1-passiv08"></div>
              </div>
              <div
                onClick={() => setSlideNumber(10)}
                className="bilder-und-bots1-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="bilder-und-bots1-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="bilder-und-bots1-lottie-node"
                ></Player>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="bilder-und-bots1-container03">
              <div className="bilder-und-bots1-storyfortschrit01">
                <div className="bilder-und-bots1-passiv09"></div>
                <div className="bilder-und-bots1-activ01"></div>
                <div className="bilder-und-bots1-passiv10"></div>
                <div className="bilder-und-bots1-passiv11"></div>
                <div className="bilder-und-bots1-passiv12"></div>
                <div className="bilder-und-bots1-passiv13"></div>
                <div className="bilder-und-bots1-passiv14"></div>
                <div className="bilder-und-bots1-passiv15"></div>
                <div className="bilder-und-bots1-passiv16"></div>
                <div className="bilder-und-bots1-passiv17"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="bilder-und-bots1-larrow01 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="bilder-und-bots1-rarrow01 finger"
              ></div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="bilder-und-bots1-container04">
              <div className="bilder-und-bots1-storyfortschrit02">
                <div className="bilder-und-bots1-passiv18"></div>
                <div className="bilder-und-bots1-passiv19"></div>
                <div className="bilder-und-bots1-activ02"></div>
                <div className="bilder-und-bots1-passiv20"></div>
                <div className="bilder-und-bots1-passiv21"></div>
                <div className="bilder-und-bots1-passiv22"></div>
                <div className="bilder-und-bots1-passiv23"></div>
                <div className="bilder-und-bots1-passiv24"></div>
                <div className="bilder-und-bots1-passiv25"></div>
                <div className="bilder-und-bots1-passiv26"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="bilder-und-bots1-larrow02 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="bilder-und-bots1-rarrow02 finger"
              ></div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="bilder-und-bots1-container05">
              <div className="bilder-und-bots1-storyfortschrit03">
                <div className="bilder-und-bots1-passiv27"></div>
                <div className="bilder-und-bots1-passiv28"></div>
                <div className="bilder-und-bots1-passiv29"></div>
                <div className="bilder-und-bots1-activ03"></div>
                <div className="bilder-und-bots1-passiv30"></div>
                <div className="bilder-und-bots1-passiv31"></div>
                <div className="bilder-und-bots1-passiv32"></div>
                <div className="bilder-und-bots1-passiv33"></div>
                <div className="bilder-und-bots1-passiv34"></div>
                <div className="bilder-und-bots1-passiv35"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="bilder-und-bots1-larrow03 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="bilder-und-bots1-rarrow03 finger"
              ></div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="bilder-und-bots1-container06">
              <div className="bilder-und-bots1-storyfortschrit04">
                <div className="bilder-und-bots1-passiv36"></div>
                <div className="bilder-und-bots1-passiv37"></div>
                <div className="bilder-und-bots1-passiv38"></div>
                <div className="bilder-und-bots1-passiv39"></div>
                <div className="bilder-und-bots1-activ04"></div>
                <div className="bilder-und-bots1-passiv40"></div>
                <div className="bilder-und-bots1-passiv41"></div>
                <div className="bilder-und-bots1-passiv42"></div>
                <div className="bilder-und-bots1-passiv43"></div>
                <div className="bilder-und-bots1-passiv44"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="bilder-und-bots1-larrow04 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(6)}
                className="bilder-und-bots1-rarrow04 finger"
              ></div>
            </div>
          )}
          {slideNumber === 6 && (
            <div className="bilder-und-bots1-container07">
              <div className="bilder-und-bots1-storyfortschrit05">
                <div className="bilder-und-bots1-passiv45"></div>
                <div className="bilder-und-bots1-passiv46"></div>
                <div className="bilder-und-bots1-passiv47"></div>
                <div className="bilder-und-bots1-passiv48"></div>
                <div className="bilder-und-bots1-passiv49"></div>
                <div className="bilder-und-bots1-activ05"></div>
                <div className="bilder-und-bots1-passiv50"></div>
                <div className="bilder-und-bots1-passiv51"></div>
                <div className="bilder-und-bots1-passiv52"></div>
                <div className="bilder-und-bots1-passiv53"></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="bilder-und-bots1-larrow05 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(7)}
                className="bilder-und-bots1-rarrow05 finger"
              ></div>
            </div>
          )}
          {slideNumber === 7 && (
            <div className="bilder-und-bots1-container08">
              <div className="bilder-und-bots1-storyfortschrit06">
                <div className="bilder-und-bots1-passiv54"></div>
                <div className="bilder-und-bots1-passiv55"></div>
                <div className="bilder-und-bots1-passiv56"></div>
                <div className="bilder-und-bots1-passiv57"></div>
                <div className="bilder-und-bots1-passiv58"></div>
                <div className="bilder-und-bots1-passiv59"></div>
                <div className="bilder-und-bots1-activ06"></div>
                <div className="bilder-und-bots1-passiv60"></div>
                <div className="bilder-und-bots1-passiv61"></div>
                <div className="bilder-und-bots1-passiv62"></div>
              </div>
              <div
                onClick={() => setSlideNumber(6)}
                className="bilder-und-bots1-larrow06 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(8)}
                className="bilder-und-bots1-rarrow06 finger"
              ></div>
            </div>
          )}
          {slideNumber === 8 && (
            <div className="bilder-und-bots1-container09">
              <div className="bilder-und-bots1-storyfortschrit07">
                <div className="bilder-und-bots1-passiv63"></div>
                <div className="bilder-und-bots1-passiv64"></div>
                <div className="bilder-und-bots1-passiv65"></div>
                <div className="bilder-und-bots1-passiv66"></div>
                <div className="bilder-und-bots1-passiv67"></div>
                <div className="bilder-und-bots1-passiv68"></div>
                <div className="bilder-und-bots1-passiv69"></div>
                <div className="bilder-und-bots1-activ07"></div>
                <div className="bilder-und-bots1-passiv70"></div>
                <div className="bilder-und-bots1-passiv71"></div>
              </div>
              <div
                onClick={() => setSlideNumber(7)}
                className="bilder-und-bots1-larrow07 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(9)}
                className="bilder-und-bots1-rarrow07 finger"
              ></div>
            </div>
          )}
          {slideNumber === 9 && (
            <div className="bilder-und-bots1-container10">
              <div className="bilder-und-bots1-storyfortschrit08">
                <div className="bilder-und-bots1-passiv72"></div>
                <div className="bilder-und-bots1-passiv73"></div>
                <div className="bilder-und-bots1-passiv74"></div>
                <div className="bilder-und-bots1-passiv75"></div>
                <div className="bilder-und-bots1-passiv76"></div>
                <div className="bilder-und-bots1-passiv77"></div>
                <div className="bilder-und-bots1-passiv78"></div>
                <div className="bilder-und-bots1-passiv79"></div>
                <div className="bilder-und-bots1-activ08"></div>
                <div className="bilder-und-bots1-passiv80"></div>
              </div>
              <div
                onClick={() => setSlideNumber(8)}
                className="bilder-und-bots1-larrow08 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(10)}
                className="bilder-und-bots1-rarrow08 finger"
              ></div>
            </div>
          )}
          {slideNumber === 10 && (
            <div className="bilder-und-bots1-container11">
              <div className="bilder-und-bots1-storyfortschrit09">
                <div className="bilder-und-bots1-passiv81"></div>
                <div className="bilder-und-bots1-passiv82"></div>
                <div className="bilder-und-bots1-passiv83"></div>
                <div className="bilder-und-bots1-passiv84"></div>
                <div className="bilder-und-bots1-passiv85"></div>
                <div className="bilder-und-bots1-passiv86"></div>
                <div className="bilder-und-bots1-passiv87"></div>
                <div className="bilder-und-bots1-passiv88"></div>
                <div className="bilder-und-bots1-passiv89"></div>
                <div className="bilder-und-bots1-activ09"></div>
              </div>
              <div
                onClick={() => setSlideNumber(9)}
                className="bilder-und-bots1-larrow09 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="bilder-und-bots1-rarrow09 finger"
              ></div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="bilder-und-bots1-container13">
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

BilderUndBots1.defaultProps = {
  imageAlt1: 'image',
  imageAlt: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  rootClassName: '',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt11: 'image',
  imageAlt111: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
}

BilderUndBots1.propTypes = {
  imageAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc11: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default BilderUndBots1
