import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import ServerwahlEx from './serverwahl-ex'
import './serverwahl-slider.css'

const ServerwahlSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`serverwahl-slider-container ${props.rootClassName} `}>
      <div className="serverwahl-slider-container01">
        <div className="serverwahl-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="serverwahl-slider-container02">
              <div className="serverwahl-slider-storyfortschrit">
                <div className="serverwahl-slider-activ"></div>
                <div className="serverwahl-slider-passiv"></div>
                <div className="serverwahl-slider-passiv01"></div>
                <div className="serverwahl-slider-passiv02"></div>
                <div className="serverwahl-slider-passiv03"></div>
                <div className="serverwahl-slider-passiv04"></div>
              </div>
              <div
                onClick={() => setSlideNumber(6)}
                className="serverwahl-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="serverwahl-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="serverwahl-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="serverwahl-slider-container03">
                <div className="serverwahl-slider-container04">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="serverwahl-slider-image"
                  />
                  <span className="serverwahl-slider-text01">{props.text}</span>
                </div>
                <div className="serverwahl-slider-container05">
                  <img
                    alt={props.imageAlt4}
                    src={props.imageSrc4}
                    className="serverwahl-slider-image01"
                  />
                  <span className="serverwahl-slider-text02">
                    {props.text1}
                  </span>
                </div>
                <div className="serverwahl-slider-container06">
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="serverwahl-slider-image02"
                  />
                  <span className="serverwahl-slider-text03">
                    {props.text2}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="serverwahl-slider-container07">
              <div className="serverwahl-slider-storyfortschrit1">
                <div className="serverwahl-slider-passiv05"></div>
                <div className="serverwahl-slider-activ1"></div>
                <div className="serverwahl-slider-passiv06"></div>
                <div className="serverwahl-slider-passiv07"></div>
                <div className="serverwahl-slider-passiv08"></div>
                <div className="serverwahl-slider-passiv09"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="serverwahl-slider-larrow1 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="serverwahl-slider-rarrow1 finger"
              ></div>
              <h1 className="">{props.heading1}</h1>
              <div className="serverwahl-slider-container08">
                <div className="serverwahl-slider-container09">
                  <img
                    alt={props.imageAlt31}
                    src={props.imageSrc31}
                    className="serverwahl-slider-image03"
                  />
                  <span className="serverwahl-slider-text05">
                    {props.text3}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="serverwahl-slider-container10">
              <div className="serverwahl-slider-storyfortschrit2">
                <div className="serverwahl-slider-passiv10"></div>
                <div className="serverwahl-slider-passiv11"></div>
                <div className="serverwahl-slider-activ2"></div>
                <div className="serverwahl-slider-passiv12"></div>
                <div className="serverwahl-slider-passiv13"></div>
                <div className="serverwahl-slider-passiv14"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="serverwahl-slider-larrow2 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="serverwahl-slider-rarrow2 finger"
              ></div>
              <h1 className="">{props.heading11}</h1>
              <div className="serverwahl-slider-container11">
                <img
                  alt={props.imageAlt5}
                  src={props.imageSrc5}
                  className="serverwahl-slider-image04"
                />
                <div className="serverwahl-slider-container12">
                  <img
                    alt={props.imageAlt311}
                    src={props.imageSrc311}
                    className="serverwahl-slider-image05"
                  />
                  <span className="serverwahl-slider-text07">
                    {props.text31}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="serverwahl-slider-container13">
              <div className="serverwahl-slider-storyfortschrit3">
                <div className="serverwahl-slider-passiv15"></div>
                <div className="serverwahl-slider-passiv16"></div>
                <div className="serverwahl-slider-passiv17"></div>
                <div className="serverwahl-slider-activ3"></div>
                <div className="serverwahl-slider-passiv18"></div>
                <div className="serverwahl-slider-passiv19"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="serverwahl-slider-larrow3 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="serverwahl-slider-rarrow3 finger"
              ></div>
              <h1 className="">{props.heading111}</h1>
              <div className="serverwahl-slider-container14">
                <div className="serverwahl-slider-container15">
                  <img
                    alt={props.imageAlt3111}
                    src={props.imageSrc3111}
                    className="serverwahl-slider-image06"
                  />
                  <span className="serverwahl-slider-text09">
                    {props.text311}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="serverwahl-slider-container16">
              <div className="serverwahl-slider-storyfortschrit4">
                <div className="serverwahl-slider-passiv20"></div>
                <div className="serverwahl-slider-passiv21"></div>
                <div className="serverwahl-slider-passiv22"></div>
                <div className="serverwahl-slider-passiv23"></div>
                <div className="serverwahl-slider-activ4"></div>
                <div className="serverwahl-slider-passiv24"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="serverwahl-slider-larrow4 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(6)}
                className="serverwahl-slider-rarrow4 finger"
              ></div>
              <h1 className="">{props.heading1111}</h1>
              <div className="serverwahl-slider-container17">
                <div className="serverwahl-slider-container18">
                  <img
                    alt={props.imageAlt31111}
                    src={props.imageSrc31111}
                    className="serverwahl-slider-image07"
                  />
                  <span className="serverwahl-slider-text11">
                    {props.text3111}
                  </span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 6 && (
            <div className="serverwahl-slider-container19">
              <div className="serverwahl-slider-storyfortschrit5">
                <div className="serverwahl-slider-passiv25"></div>
                <div className="serverwahl-slider-passiv26"></div>
                <div className="serverwahl-slider-passiv27"></div>
                <div className="serverwahl-slider-passiv28"></div>
                <div className="serverwahl-slider-passiv29"></div>
                <div className="serverwahl-slider-activ5"></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="serverwahl-slider-larrow5 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="serverwahl-slider-rarrow5 finger"
              ></div>
              <h1 className="">{props.heading11111}</h1>
              <div className="serverwahl-slider-container20">
                <div className="serverwahl-slider-container21">
                  <img
                    alt={props.imageAlt311111}
                    src={props.imageSrc311111}
                    className="serverwahl-slider-image08"
                  />
                  <span className="serverwahl-slider-text13">
                    {props.text31111}
                  </span>
                </div>
                <div className="serverwahl-slider-container22">
                  <img
                    alt={props.imageAlt3111111}
                    src={props.imageSrc3111111}
                    className="serverwahl-slider-image09"
                  />
                  <span className="serverwahl-slider-text14">
                    {props.text311111}
                  </span>
                </div>
              </div>
              <ServerwahlEx className=""></ServerwahlEx>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="serverwahl-slider-container24">
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

ServerwahlSlider.defaultProps = {
  heading11: 'VPS',
  text1:
    'Die CPU, auch Prozessor genannt, ist das Herzstück eines Servers und führt Befehle von Programmen aus, indem sie komplexe Berechnungen durchführt.',
  imageAlt41: 'image',
  imageSrc311: '/Serverwahl/server1.svg',
  text31111:
    'Es kann sinnvoll sein, sich mit anderen zusammenzuschließen, um die Webspace-Tarife optimal zu nutzen, so dass alle Ressourcen dynamisch verwaltet werden und der verfügbare Webspace optimal ausgenutzt werden kann.',
  imageAlt3: 'image',
  text21:
    'Die wichtigste Stellschraube ist der Server, auf dem die Website liegt, hier gibt es viele Möglichkeiten, Strom zu sparen oder zu entscheiden, wie nachhaltig dieser sein soll.',
  imageSrc21: '0279bf8a-c5d9-4fa0-b5ab-5f745e9baec5',
  imageAlt2: 'image',
  imageAlt31: 'image',
  imageAlt4: 'image',
  text3:
    'Ein dedizierter Server bietet exklusiven Zugriff auf die gesamte Hardware, einschließlich CPU, RAM und Festplattenkapazität, was maximale Leistung und Konfigurierbarkeit für anspruchsvolle Anwendungen wie Big Data ermöglicht. Aus Sicht der Nachhaltigkeit ist dies nur dann sinnvoll, wenn die gesamten Ressourcen annähernd ausgelastet sind, da nicht genutzter, reservierter Speicherplatz ungenutzte Ressourcen darstellt.',
  text311:
    'Cloud-Server sind über ein Netzwerk mit mehreren Knoten verteilt und bieten eine hohe Skalierbarkeit und Redundanz, wobei die Ressourcen nahezu augenblicklich angepasst werden können. Sie bieten eine gewisse Konfigurierbarkeit, allerdings mit Einschränkungen im Vergleich zu dedizierten Servern und VPS. Eine in Deutschland kaum verbreitete Lösung. Ein bekannter Vertreter ist Amazon AWS. Der Vorteil ist, dass man eine maßgeschneiderte und hochdynamische Leistung erhält, man zahlt oft für Rechenleistung und Traffic.',
  imageSrc41: '6eaee16f-2d95-415b-818f-15d7508a8e3c',
  imageAlt21: 'image',
  text: 'Der Arbeitsspeicher dient der kurzfristigen Speicherung von Daten, die für die Ausführung aktiver Prozesse und Anwendungen auf einem Server notwendig sind.',
  text2:
    'Die Festplattenkapazität bezeichnet den Speicherplatz, der auf einem Server für die Datenspeicherung zur Verfügung steht und ist entscheidend für die Datenmenge, die gespeichert und abgerufen werden kann.',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  heading111: 'Cloud Computing',
  text31:
    'Ein VPS (Virtual Private Server) teilt sich die physische Hardware eines Servers mit anderen VPS-Instanzen, wobei jeder VPS eine vordefinierte Menge an Ressourcen wie CPU-Leistung und RAM zugewiesen bekommt. VPS sind hoch skalierbar, da Ressourcen bei Bedarf schnell neu zugewiesen werden können, und bieten eine kostengünstigere Lösung mit einem gewissen Maß an Isolation und Konfigurierbarkeit. Dadurch kann die vorhandene Hardware besser ausgenutzt werden, allerdings ist eine Verschwendung von Ressourcen innerhalb der VPS-Instanz möglich.',
  heading1111: 'Webspace Only',
  imageAlt11: 'image',
  imageAlt311: 'image',
  text311111:
    'Für Einzelpersonen, die sich nicht mit anderen zusammenschließen können, bietet sich Cloud Computing an. Ich habe hier mal ein paar Anbieter herausgesucht, es handelt sich aber überwiegend um amerikanische Anbieter, ein regionales Rechenzentrum wie bei einem deutschen Anbieter ist nicht sichergestellt.',
  imageSrc311111: '/Serverwahl/banden.svg',
  imageSrc31: '/Serverwahl/server1.svg',
  text3111:
    'Ein "Nur Webspace"-Angebot ist ein Webhosting-Service, der Speicherplatz auf einem Server für das Hosting einer Website oder Webanwendung bereitstellt Im Gegensatz zu umfassenderen Hosting-Angeboten, die zusätzliche Dienste wie E-Mail-Hosting, Datenbankunterstützung oder Entwickler-Tools enthalten können, konzentriert sich ein "Nur Webspace"-Angebot ausschließlich auf die Bereitstellung von Speicherplatz für Webinhalte Dieser Tarif ist häufig kostengünstiger und kann eine gute Wahl für einfache Websites sein, die keine erweiterten Funktionen oder Ressourcen benötigen.',
  imageAlt111: 'image',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageAlt5: 'image',
  rootClassName: '',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt1: 'image',
  imageSrc3: '/Serverwahl/ram.svg',
  imageAlt: 'image',
  imageAlt3111111: 'image',
  heading1: 'Dedizierter Server',
  imageSrc31111: '/Serverwahl/hdd.svg',
  imageSrc2: '/Serverwahl/hdd.svg',
  text11:
    'Die "Datenautobahnen", also die Verbindung zwischen Endgerät und Server, verbrauchen Strom. Alle Geräte dazwischen auch. Hier kann nur durch kurze Wege gespart werden.',
  imageSrc3111: '/Serverwahl/cloud.svg',
  imageAlt31111: 'image',
  heading: 'Server',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt51: 'image',
  imageSrc5: '/Serverwahl/banden.svg',
  imageSrc3111111: '/Serverwahl/solo.svg',
  imageSrc4: '/Serverwahl/cpu.svg',
  imageAlt311111: 'image',
  heading11111: 'Bildet Banden',
  imageAlt3111: 'image',
  imageSrc51: '265c776c-c17b-47dc-a827-66e58d5a3b33',
}

ServerwahlSlider.propTypes = {
  heading11: PropTypes.string,
  text1: PropTypes.string,
  imageAlt41: PropTypes.string,
  imageSrc311: PropTypes.string,
  text31111: PropTypes.string,
  imageAlt3: PropTypes.string,
  text21: PropTypes.string,
  imageSrc21: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt31: PropTypes.string,
  imageAlt4: PropTypes.string,
  text3: PropTypes.string,
  text311: PropTypes.string,
  imageSrc41: PropTypes.string,
  imageAlt21: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  imageSrc1: PropTypes.string,
  heading111: PropTypes.string,
  text31: PropTypes.string,
  heading1111: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageAlt311: PropTypes.string,
  text311111: PropTypes.string,
  imageSrc311111: PropTypes.string,
  imageSrc31: PropTypes.string,
  text3111: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt5: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt3111111: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc31111: PropTypes.string,
  imageSrc2: PropTypes.string,
  text11: PropTypes.string,
  imageSrc3111: PropTypes.string,
  imageAlt31111: PropTypes.string,
  heading: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt51: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc3111111: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt311111: PropTypes.string,
  heading11111: PropTypes.string,
  imageAlt3111: PropTypes.string,
  imageSrc51: PropTypes.string,
}

export default ServerwahlSlider
