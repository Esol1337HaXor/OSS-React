import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import StromEx from './strom-ex'
import './strom-slider.css'

const StromSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`strom-slider-container ${props.rootClassName} `}>
      <div className="strom-slider-container01">
        <div className="strom-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="strom-slider-container02">
              <div className="strom-slider-storyfortschrit">
                <div className="strom-slider-activ"></div>
                <div className="strom-slider-passiv"></div>
                <div className="strom-slider-passiv01"></div>
                <div className="strom-slider-passiv02"></div>
                <div className="strom-slider-passiv03"></div>
                <div className="strom-slider-passiv04"></div>
                <div className="strom-slider-passiv05"></div>
              </div>
              <div
                onClick={() => setSlideNumber(7)}
                className="strom-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="strom-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="strom-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="strom-slider-container03">
                <div className="strom-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="strom-slider-image"
                  />
                  <span className="strom-slider-text01">{props.text}</span>
                </div>
                <div className="strom-slider-container05">
                  <img
                    alt={props.imageAlt4}
                    src={props.imageSrc4}
                    className="strom-slider-image01"
                  />
                  <span className="strom-slider-text02">{props.text1}</span>
                </div>
                <div className="strom-slider-container06">
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="strom-slider-image02"
                  />
                  <span className="strom-slider-text03">{props.text2}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="strom-slider-container07">
              <div className="strom-slider-storyfortschrit1">
                <div className="strom-slider-passiv06"></div>
                <div className="strom-slider-activ1"></div>
                <div className="strom-slider-passiv07"></div>
                <div className="strom-slider-passiv08"></div>
                <div className="strom-slider-passiv09"></div>
                <div className="strom-slider-passiv10"></div>
                <div className="strom-slider-passiv11"></div>
              </div>
              <h1 className="">{props.heading1}</h1>
              <div className="strom-slider-container08">
                <span className="">{props.text3}</span>
                <div className="strom-slider-container09">
                  <img
                    alt={props.imageAlt6}
                    src={props.imageSrc6}
                    className="strom-slider-image03"
                  />
                  <span className="strom-slider-text06">{props.text5}</span>
                </div>
                <div className="strom-slider-container10">
                  <img
                    alt={props.imageAlt5}
                    src={props.imageSrc5}
                    className="strom-slider-image04"
                  />
                  <span className="strom-slider-text07">{props.text4}</span>
                </div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="strom-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="strom-slider-rarrow1 finger"
              ></div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="strom-slider-container11">
              <div className="strom-slider-storyfortschrit2">
                <div className="strom-slider-passiv12"></div>
                <div className="strom-slider-passiv13"></div>
                <div className="strom-slider-activ2"></div>
                <div className="strom-slider-passiv14"></div>
                <div className="strom-slider-passiv15"></div>
                <div className="strom-slider-passiv16"></div>
                <div className="strom-slider-passiv17"></div>
              </div>
              <h1 className="">{props.heading2}</h1>
              <div className="strom-slider-container12">
                <img
                  alt={props.imageAlt12}
                  src={props.imageSrc12}
                  className="strom-slider-image05"
                />
                <span className="strom-slider-text09">{props.text14}</span>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="strom-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="strom-slider-rarrow2 finger"
              ></div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="strom-slider-container13">
              <div className="strom-slider-storyfortschrit3">
                <div className="strom-slider-passiv18"></div>
                <div className="strom-slider-passiv19"></div>
                <div className="strom-slider-passiv20"></div>
                <div className="strom-slider-activ3"></div>
                <div className="strom-slider-passiv21"></div>
                <div className="strom-slider-passiv22"></div>
                <div className="strom-slider-passiv23"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="strom-slider-larrow3 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="strom-slider-rarrow3 finger"
              ></div>
              <h1 className="">{props.heading312}</h1>
              <div className="strom-slider-container14">
                <div className="strom-slider-container15">
                  <span className="strom-slider-text11">{props.text1112}</span>
                  <img
                    alt={props.imageAlt812}
                    src={props.imageSrc812}
                    className="strom-slider-image06"
                  />
                  <span className="strom-slider-text12">{props.text712}</span>
                </div>
                <div className="strom-slider-container16">
                  <span className="strom-slider-text13">{props.text1012}</span>
                  <img
                    alt={props.imageAlt712}
                    src={props.imageSrc712}
                    className="strom-slider-image07"
                  />
                  <span className="strom-slider-text14">{props.text612}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="strom-slider-container17">
              <div className="strom-slider-storyfortschrit4">
                <div className="strom-slider-passiv24"></div>
                <div className="strom-slider-passiv25"></div>
                <div className="strom-slider-passiv26"></div>
                <div className="strom-slider-passiv27"></div>
                <div className="strom-slider-activ4"></div>
                <div className="strom-slider-passiv28"></div>
                <div className="strom-slider-passiv29"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="strom-slider-larrow4 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(6)}
                className="strom-slider-rarrow4 finger"
              ></div>
              <h1 className="">{props.heading31}</h1>
              <div className="strom-slider-container18">
                <div className="strom-slider-container19">
                  <span className="strom-slider-text16">{props.text111}</span>
                  <img
                    alt={props.imageAlt81}
                    src={props.imageSrc81}
                    className="strom-slider-image08"
                  />
                  <span className="strom-slider-text17">{props.text71}</span>
                </div>
                <div className="strom-slider-container20">
                  <span className="strom-slider-text18">{props.text101}</span>
                  <img
                    alt={props.imageAlt71}
                    src={props.imageSrc71}
                    className="strom-slider-image09"
                  />
                  <span className="strom-slider-text19">{props.text61}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 6 && (
            <div className="strom-slider-container21">
              <StromEx
                rootClassName="strom-ex-root-class-name1"
                className=""
              ></StromEx>
              <div className="strom-slider-storyfortschrit5">
                <div className="strom-slider-passiv30"></div>
                <div className="strom-slider-passiv31"></div>
                <div className="strom-slider-passiv32"></div>
                <div className="strom-slider-passiv33"></div>
                <div className="strom-slider-passiv34"></div>
                <div className="strom-slider-activ5"></div>
                <div className="strom-slider-passiv35"></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="strom-slider-larrow5 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(7)}
                className="strom-slider-rarrow5 finger"
              ></div>
              <h1 className="">{props.heading31111}</h1>
              <div className="strom-slider-container22">
                <span className="strom-slider-text21">{props.text151}</span>
                <span className="strom-slider-text22">{props.text161}</span>
                <span className="strom-slider-text23">{props.text171}</span>
                <span className="strom-slider-text24">{props.text181}</span>
              </div>
            </div>
          )}
          {slideNumber === 7 && (
            <div className="strom-slider-container23">
              <div className="strom-slider-storyfortschrit6">
                <div className="strom-slider-passiv36"></div>
                <div className="strom-slider-passiv37"></div>
                <div className="strom-slider-passiv38"></div>
                <div className="strom-slider-passiv39"></div>
                <div className="strom-slider-passiv40"></div>
                <div className="strom-slider-passiv41"></div>
                <div className="strom-slider-activ6"></div>
              </div>
              <div
                onClick={() => setSlideNumber(6)}
                className="strom-slider-larrow6 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="strom-slider-rarrow6 finger"
              ></div>
              <StromEx className=""></StromEx>
              <h1 className="">{props.heading311111}</h1>
              <div className="strom-slider-container24">
                <img
                  alt={props.imageAlt13}
                  src={props.imageSrc13}
                  className="strom-slider-image10"
                />
                <span className="strom-slider-text26">{props.text1911}</span>
                <span className="strom-slider-text27">{props.text2011}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="strom-slider-container26">
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

StromSlider.defaultProps = {
  text151:
    'Letztlich muss man genau hinschauen, um einen Anbieter zu finden, der den eigenen Anforderungen an die Energieerzeugung entspricht. Die meisten deutschen Anbieter bezeichnen ihren Strom als nachhaltig. hier eine Auswahl:',
  text161:
    'Netcup: "netcup setzt auf Ökostrom, der aus fließendem Wasser gewonnen wird."',
  imageSrc812: '/Strom/e4.svg',
  heading: 'Wo wird verbraucht?',
  imageSrc3: '/Strom/pc.svg',
  text: 'Die Endgeräte werden mit Strom betrieben, die Einflussnahme auf diesen Bereich ist jedoch gering.',
  imageAlt: 'image',
  imageAlt812: 'image',
  text4:
    'Konventionelle Energien aus nicht erneuerbaren Quellen. Kohle, Gas, Öl und Kernenergie',
  imageAlt71: 'image',
  text712:
    'Der Betreiber kauft Strom- oder Emissionszertifikate. Die Stromzertifikate stellen sicher, dass die Energie in einem anderen Stromnetz nachhaltig erzeugt wird. Das hat keinen direkten Einfluss. Auch Emissionszertifikate stellen nur sicher, dass jemand anderes gegen Geld weniger Emissionen produziert.',
  imageAlt6: 'image',
  text2011:
    'petricore: "100% regenerative Energie [...]  Kompensierung der anfallenden Emissionen [...]"',
  text6: 'Link',
  imageAlt13: 'image',
  text101: '1.',
  heading311111: 'Anbieter',
  text111: '2.',
  text171: 'Strato: "[...] seit 2008 mit 100 Prozent Ökostrom betrieben"',
  text71:
    'Der Betreiber investiert in erneuerbare Energien in seinem Stromnetz oder fördert deren Ausbau aktiv durch Abnahmegarantien im eigenen Stromnetz.',
  imageAlt2: 'image',
  text181:
    'Hetzner: "Hetzner Online setzt für die Stromversorgung seiner deutschen Datacenter-Parks auf die Kraft des Wassers. [...] Für den Datacenter-Park Helsinki in Finnland deckt Hetzner seinen gesamten Strombedarf mit Wind- und Wasserkraft ab."',
  imageAlt81: 'image',
  imageAlt712: 'image',
  imageAlt3: 'image',
  text5: 'Erneuerbare Energien aus Wind, Wasser, Sonne und Geothermik',
  text1112: '4.',
  heading31111: 'Anbieter',
  text1:
    'Die "Datenautobahnen", also die Verbindung zwischen Endgerät und Server, verbrauchen Strom. Alle Geräte dazwischen auch. Hier kann nur durch kurze Wege gespart werden.',
  imageSrc12: '/Strom/notcert.svg',
  text1012: '3.',
  text3:
    'Grundsätzlich kann Strom theoretisch separiert werden. Es ist jedoch zu bedenken, dass durch die Einspeisung in das Netz ein Strommix entsteht, der sich zusammensetzt aus:',
  imageSrc2: '/Strom/server.svg',
  imageSrc4: '/Strom/netz.svg',
  text612:
    'Bei dieser Variante investiert der Anbieter in Erneuerbare Energien in einem anderen Stromnetz. Der erzeugte Strom wird in andere Netze eingespeist. Zum Beispiel ein Solarpark in Afrika.',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading312: 'Nachhaltiger Strom',
  imageAlt4: 'image',
  heading1: 'Arten von Strom',
  imageSrc6: '/Strom/eco.svg',
  heading2: 'Obacht!',
  text2:
    'Die wichtigste Stellschraube ist der Server, auf dem die Website liegt, hier gibt es viele Möglichkeiten, Strom zu sparen oder zu entscheiden, wie nachhaltig dieser sein soll.',
  text1911:
    'Hier noch ein besonderer Anbieter, dessen Server in Island stehen. Island hat ein Stromnetz, das zu 100% aus erneuerbaren Energien gespeist wird, d.h. der Strommix besteht ausschließlich aus Wasserkraft und Geothermie.',
  imageAlt5: 'image',
  text14:
    'Es gibt kein offizielles Label für nachhaltigen Strom. Viele Anbieter stellen jedoch ihre Nachhaltigkeitsberichte zur Verfügung oder legen halbwegs transparent dar, wie die Energie für ihre Rechenzentren erzeugt wird. Die folgenden Folien zeigen die verschiedenen Tricks, mit denen sich Anbieter als nachhaltig darstellen.',
  imageSrc5: '/Strom/coal.svg',
  linkText: 'https://example.com',
  imageSrc71: '/Strom/e1.svg',
  imageSrc13: '/Strom/eco.svg',
  imageSrc712: '/Strom/e3.svg',
  heading31: 'Nachhaltiger Strom',
  rootClassName: '',
  imageAlt12: 'image',
  imageSrc81: '/Strom/e2.svg',
  text61:
    'Der wohl Nachhaltigste Ansatz zur Enrgiegewinnung ist die Selbstversorgung, oder die Teilweise Selbstversorgung mit erneuerbaren Energien',
}

StromSlider.propTypes = {
  text151: PropTypes.string,
  text161: PropTypes.string,
  imageSrc812: PropTypes.string,
  heading: PropTypes.string,
  imageSrc3: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt812: PropTypes.string,
  text4: PropTypes.string,
  imageAlt71: PropTypes.string,
  text712: PropTypes.string,
  imageAlt6: PropTypes.string,
  text2011: PropTypes.string,
  text6: PropTypes.string,
  imageAlt13: PropTypes.string,
  text101: PropTypes.string,
  heading311111: PropTypes.string,
  text111: PropTypes.string,
  text171: PropTypes.string,
  text71: PropTypes.string,
  imageAlt2: PropTypes.string,
  text181: PropTypes.string,
  imageAlt81: PropTypes.string,
  imageAlt712: PropTypes.string,
  imageAlt3: PropTypes.string,
  text5: PropTypes.string,
  text1112: PropTypes.string,
  heading31111: PropTypes.string,
  text1: PropTypes.string,
  imageSrc12: PropTypes.string,
  text1012: PropTypes.string,
  text3: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc4: PropTypes.string,
  text612: PropTypes.string,
  imageSrc: PropTypes.string,
  heading312: PropTypes.string,
  imageAlt4: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc6: PropTypes.string,
  heading2: PropTypes.string,
  text2: PropTypes.string,
  text1911: PropTypes.string,
  imageAlt5: PropTypes.string,
  text14: PropTypes.string,
  imageSrc5: PropTypes.string,
  linkText: PropTypes.string,
  imageSrc71: PropTypes.string,
  imageSrc13: PropTypes.string,
  imageSrc712: PropTypes.string,
  heading31: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt12: PropTypes.string,
  imageSrc81: PropTypes.string,
  text61: PropTypes.string,
}

export default StromSlider
