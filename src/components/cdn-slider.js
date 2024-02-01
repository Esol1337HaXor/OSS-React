import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './cdn-slider.css'

const CDNSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`cdn-slider-container ${props.rootClassName} `}>
      <div className="cdn-slider-container01">
        <div className="cdn-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="cdn-slider-container02">
              <div className="cdn-slider-storyfortschrit">
                <div className="cdn-slider-activ"></div>
                <div className="cdn-slider-passiv"></div>
                <div className="cdn-slider-passiv01"></div>
                <div className="cdn-slider-passiv02"></div>
                <div className="cdn-slider-passiv03"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="cdn-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="cdn-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="cdn-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="cdn-slider-container03">
                <div className="cdn-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="cdn-slider-image"
                  />
                  <span className="cdn-slider-text01">{props.text}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="cdn-slider-container05">
              <div className="cdn-slider-storyfortschrit1">
                <div className="cdn-slider-passiv04"></div>
                <div className="cdn-slider-activ1"></div>
                <div className="cdn-slider-passiv05"></div>
                <div className="cdn-slider-passiv06"></div>
                <div className="cdn-slider-passiv07"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="cdn-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="cdn-slider-rarrow1 finger"
              ></div>
              <h1 className="cdn-slider-text02">{props.heading1}</h1>
              <div className="cdn-slider-container06">
                <div className="cdn-slider-container07">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="cdn-slider-image1"
                  />
                  <span className="cdn-slider-text03">{props.text3}</span>
                </div>
                <div className="cdn-slider-container08">
                  <img
                    alt={props.imageAlt314}
                    src={props.imageSrc314}
                    className="cdn-slider-image2"
                  />
                  <span className="cdn-slider-text04">{props.text34}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="cdn-slider-container09">
              <div className="cdn-slider-storyfortschrit2">
                <div className="cdn-slider-passiv08"></div>
                <div className="cdn-slider-passiv09"></div>
                <div className="cdn-slider-activ2"></div>
                <div className="cdn-slider-passiv10"></div>
                <div className="cdn-slider-passiv11"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="cdn-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="cdn-slider-rarrow2 finger"
              ></div>
              <h1 className="cdn-slider-text05">{props.heading11}</h1>
              <div className="cdn-slider-container10">
                <div className="cdn-slider-container11">
                  <img
                    alt={props.imageAlt315}
                    src={props.imageSrc315}
                    className="cdn-slider-image3"
                  />
                  <span className="cdn-slider-text06">{props.text35}</span>
                </div>
                <div className="cdn-slider-container12">
                  <img
                    alt={props.imageAlt313}
                    src={props.imageSrc313}
                    className="cdn-slider-image4"
                  />
                  <span className="cdn-slider-text07">{props.text33}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="cdn-slider-container13">
              <div className="cdn-slider-storyfortschrit3">
                <div className="cdn-slider-passiv12"></div>
                <div className="cdn-slider-passiv13"></div>
                <div className="cdn-slider-passiv14"></div>
                <div className="cdn-slider-activ3"></div>
                <div className="cdn-slider-passiv15"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="cdn-slider-larrow3 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="cdn-slider-rarrow3 finger"
              ></div>
              <h1 className="cdn-slider-text08">{props.heading112}</h1>
              <div className="cdn-slider-container14">
                <div className="cdn-slider-container15">
                  <img
                    alt={props.imageAlt31412}
                    src={props.imageSrc31412}
                    className="cdn-slider-image5"
                  />
                  <span className="cdn-slider-text09">{props.text3412}</span>
                </div>
                <div className="cdn-slider-container16">
                  <img
                    alt={props.imageAlt31312}
                    src={props.imageSrc31312}
                    className="cdn-slider-image6"
                  />
                  <span className="cdn-slider-text10">{props.text3312}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="cdn-slider-container17">
              <div className="cdn-slider-storyfortschrit4">
                <div className="cdn-slider-passiv16"></div>
                <div className="cdn-slider-passiv17"></div>
                <div className="cdn-slider-passiv18"></div>
                <div className="cdn-slider-passiv19"></div>
                <div className="cdn-slider-activ4"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="cdn-slider-larrow4 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="cdn-slider-rarrow4 finger"
              ></div>
              <h1 className="">{props.heading111}</h1>
              <div className="cdn-slider-container18">
                <div className="cdn-slider-container19">
                  <img
                    alt={props.imageAlt3151}
                    src={props.imageSrc3151}
                    className="cdn-slider-image7"
                  />
                  <span className="cdn-slider-text12">{props.text351}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="cdn-slider-container21">
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

CDNSlider.defaultProps = {
  text2:
    'Die Festplattenkapazität bezeichnet den Speicherplatz, der auf einem Server für die langfristige Datenspeicherung zur Verfügung steht, und ist entscheidend für die Menge an Daten, die gespeichert und abgerufen werden können.',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  imageAlt31: 'image',
  heading111: 'Cloudflare',
  imageAlt2: 'image',
  imageAlt315: 'image',
  imageAlt111: 'image',
  text3411:
    'Brotli ist ein von Google entwickeltes Kompressionsverfahren. Es ist effizienter als ältere Methoden wie Gzip und kann die Größe von Webinhalten weiter reduzieren. Auch dies geschieht automatisch.',
  imageAlt313: 'image',
  imageAlt3151: 'image',
  heading112: 'Weitere Vorteile',
  text: 'Ein Content Delivery Network (CDN) ist ein Netzwerk aus miteinander verbundenen Servern, das dazu dient, Inhalte wie Webseiten, Bilder oder Videos schnell und effizient an Nutzer zu liefern. Die Server sind geografisch über den Globus verteilt und speichern Kopien der Inhalte. Wenn ein Nutzer auf diese Inhalte zugreift, werden sie von dem Server geliefert, der ihm geografisch am nächsten ist. Dies reduziert die Latenz, also die Verzögerung, die durch die Distanz zwischen Nutzer und Server entsteht, und beschleunigt das Laden der Inhalte.',
  imageAlt4: 'image',
  imageAlt312: 'image',
  imageAlt311: 'image',
  imageSrc313: '/CDN/cache.svg',
  imageAlt3152: 'image',
  imageAlt3141: 'image',
  imageSrc3141: 'f96928e0-f077-4b84-b964-fdd93212dd1d',
  imageSrc31411: 'f96928e0-f077-4b84-b964-fdd93212dd1d',
  imageAlt3131: 'image',
  imageSrc3151: '/CDN/cdn.svg',
  text341:
    'Brotli ist ein von Google entwickeltes Kompressionsverfahren. Es ist effizienter als ältere Methoden wie Gzip und kann die Größe von Webinhalten weiter reduzieren. Auch dies geschieht automatisch.',
  imageSrc312: 'e69a918b-4403-47ab-bdce-79a9bdab029f',
  imageAlt1: 'image',
  imageSrc3152: 'd2d7aa2a-cb2e-468a-9d32-e0f477061e57',
  heading11: 'Weitere Vorteile',
  imageAlt3: 'image',
  text352:
    'Minification ist ein Prozess, bei dem alle unnötigen Zeichen, einschließlich Leerzeichen, Zeilenumbrüche und Kommentare, aus dem Code einer Webseite entfernt werden. Dies reduziert die Dateigröße und damit den Datenverkehr. Hier geschieht dies automatisch.',
  imageAlt31412: 'image',
  imageSrc2: 'c56716d5-2017-4085-9e5d-4db4e39cf05a',
  imageSrc3131: 'dba50455-251a-4e26-be1d-eeefa783fcea',
  imageSrc4: 'c815931b-2780-4b48-aabd-7430bc437105',
  rootClassName: '',
  text33:
    'Beim Caching werden Kopien von Webinhalten auf dem lokalen Gerät des Nutzers oder auf einem Server gespeichert. CDNs nehmen hier viel manuelle Arbeit ab und erledigen dies effizient. Dadurch können Daten für wiederkehrende Besuche gespeichert werden.',
  text32:
    'Ein Content Delivery Network (CDN) ist ein Netzwerk aus miteinander verbundenen Servern, das dazu dient, Inhalte wie Webseiten, Bilder oder Videos schnell und effizient an Nutzer zu liefern. Die Server sind geografisch über den Globus verteilt und speichern Kopien der Inhalte. Wenn ein Nutzer auf diese Inhalte zugreift, werden sie von dem Server geliefert, der ihm geografisch am nächsten ist. Dies reduziert die Latenz, also die Verzögerung, die durch die Distanz zwischen Nutzer und Server entsteht, und beschleunigt das Laden der Inhalte.',
  text1:
    'Die CPU, auch bekannt als Prozessor, ist das Herzstück eines Servers und führt Befehle von Programmen aus, indem sie komplexe Berechnungen und Steuerungsoperationen durchführt.',
  imageAlt31312: 'image',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc3: '/CDN/cdn.svg',
  imageAlt314: 'image',
  imageSrc315: '/CDN/minifi.svg',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc31311: 'dba50455-251a-4e26-be1d-eeefa783fcea',
  text3311:
    'Kurze Datenwege, wie sie durch ein CDN ermöglicht werden, reduzieren die Latenz, indem Inhalte von einem Server geliefert werden, der geografisch näher am Nutzer liegt. Dies kann zur Nachhaltigkeit beitragen, da weniger Energie für die Datenübertragung benötigt wird.',
  text35:
    'Minification ist ein Prozess, bei dem alle unnötigen Zeichen, einschließlich Leerzeichen, Zeilenumbrüche und Kommentare, aus dem Code einer Webseite entfernt werden. Dies reduziert die Dateigröße und damit den Datenverkehr. Hier geschieht dies automatisch.',
  text3412:
    'Brotli ist ein von Google entwickeltes Kompressionsverfahren. Es ist effizienter als ältere Methoden wie Gzip und kann die Größe von Webinhalten weiter reduzieren. Auch dies geschieht automatisch.',
  heading: 'CDN',
  imageSrc311: 'e69a918b-4403-47ab-bdce-79a9bdab029f',
  text31:
    'Ein Content Delivery Network (CDN) ist ein Netzwerk aus miteinander verbundenen Servern, das dazu dient, Inhalte wie Webseiten, Bilder oder Videos schnell und effizient an Nutzer zu liefern. Die Server sind geografisch über den Globus verteilt und speichern Kopien der Inhalte. Wenn ein Nutzer auf diese Inhalte zugreift, werden sie von dem Server geliefert, der ihm geografisch am nächsten ist. Dies reduziert die Latenz, also die Verzögerung, die durch die Distanz zwischen Nutzer und Server entsteht, und beschleunigt das Laden der Inhalte.',
  text351:
    'Cloudflare ist der bekannteste Anbieter von CDN-Lösungen. Grundsätzlich handelt es sich um einen amerikanischen Anbieter, auch wenn die Server regional betrieben werden. Dies sollte berücksichtigt werden. Im Allgemeinen ist die Einrichtung eines CDN relativ einfach und kann durch viele kleine Maßnahmen Einfluss haben.',
  imageAlt31411: 'image',
  text3:
    'SSL verwendet Zertifikate, um eine verschlüsselte Verbindung zwischen einem Server und einem Client herzustellen. Dies ermöglicht die sichere Übertragung sensibler Informationen wie Kreditkartendetails. Cloudflare bietet dies Kostenlos an.',
  text34:
    'Ein DDoS-Angriff ist eine Cyberattacke, bei der viele verschiedene Quellen genutzt werden, um ein Ziel mit so viel Datenverkehr zu überfluten, dass dessen Dienste überlastet werden und nicht mehr verfügbar sind. Aus Sicht der Datensparsamkeit kann ein Starker Schutz abschreckend wirken.',
  imageSrc31: '/CDN/ssl.svg',
  text331:
    'Kurze Datenwege, wie sie durch ein CDN ermöglicht werden, reduzieren die Latenz, indem Inhalte von einem Server geliefert werden, der geografisch näher am Nutzer liegt. Dies kann zur Nachhaltigkeit beitragen, da weniger Energie für die Datenübertragung benötigt wird.',
  heading1: 'Allgemeine Vorteile',
  imageAlt11: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt: 'image',
  imageAlt31311: 'image',
  imageSrc31412: '/CDN/brotli.svg',
  text3312:
    'Kurze Datenwege, wie sie durch ein CDN ermöglicht werden, reduzieren die Latenz, indem Inhalte von einem Server geliefert werden, der geografisch näher am Nutzer liegt. Dies kann zur Nachhaltigkeit beitragen, da weniger Energie für die Datenübertragung benötigt wird.',
  imageSrc314: '/CDN/ddos.svg',
  imageSrc31312: '/CDN/autobahn.svg',
}

CDNSlider.propTypes = {
  text2: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt31: PropTypes.string,
  heading111: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt315: PropTypes.string,
  imageAlt111: PropTypes.string,
  text3411: PropTypes.string,
  imageAlt313: PropTypes.string,
  imageAlt3151: PropTypes.string,
  heading112: PropTypes.string,
  text: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt312: PropTypes.string,
  imageAlt311: PropTypes.string,
  imageSrc313: PropTypes.string,
  imageAlt3152: PropTypes.string,
  imageAlt3141: PropTypes.string,
  imageSrc3141: PropTypes.string,
  imageSrc31411: PropTypes.string,
  imageAlt3131: PropTypes.string,
  imageSrc3151: PropTypes.string,
  text341: PropTypes.string,
  imageSrc312: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc3152: PropTypes.string,
  heading11: PropTypes.string,
  imageAlt3: PropTypes.string,
  text352: PropTypes.string,
  imageAlt31412: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageSrc3131: PropTypes.string,
  imageSrc4: PropTypes.string,
  rootClassName: PropTypes.string,
  text33: PropTypes.string,
  text32: PropTypes.string,
  text1: PropTypes.string,
  imageAlt31312: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt314: PropTypes.string,
  imageSrc315: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc31311: PropTypes.string,
  text3311: PropTypes.string,
  text35: PropTypes.string,
  text3412: PropTypes.string,
  heading: PropTypes.string,
  imageSrc311: PropTypes.string,
  text31: PropTypes.string,
  text351: PropTypes.string,
  imageAlt31411: PropTypes.string,
  text3: PropTypes.string,
  text34: PropTypes.string,
  imageSrc31: PropTypes.string,
  text331: PropTypes.string,
  heading1: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt31311: PropTypes.string,
  imageSrc31412: PropTypes.string,
  text3312: PropTypes.string,
  imageSrc314: PropTypes.string,
  imageSrc31312: PropTypes.string,
}

export default CDNSlider
