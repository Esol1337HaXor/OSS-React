import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './skalierung-ex1.css'

const SkalierungEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`skalierung-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="skalierung-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="skalierung-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="skalierung-ex1-container2">
            <span className="skalierung-ex1-text">{props.text}</span>
            <a
              href="https://webspeedtest.cloudinary.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="skalierung-ex1-link"
            >
              {props.text1}
            </a>
            <a
              href="https://de.wordpress.org/plugins/wp-smushit/"
              target="_blank"
              rel="noreferrer noopener"
              className="skalierung-ex1-link1"
            >
              {props.text2}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="skalierung-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="skalierung-ex1-icon2">
            <path
              d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
              className=""
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}

SkalierungEx1.defaultProps = {
  text1: 'cloudinary.com',
  text2: 'Smush',
  text: 'Es ist nicht einfach, die perfekten Bilder zu erstellen. Anwendungen und Plug-ins können dies leisten. Hier ein Dienst, der Formatempfehlungen ausspuckt und liefert, und ein WordPress-Plugin, das die Skalierung automatisch anpasst.',
  rootClassName: '',
}

SkalierungEx1.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SkalierungEx1
