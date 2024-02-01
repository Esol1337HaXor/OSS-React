import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './bildbearbeitung-ex1.css'

const BildbearbeitungEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`bildbearbeitung-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="bildbearbeitung-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="bildbearbeitung-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="bildbearbeitung-ex1-container2">
            <a
              href="https://www.zdnet.com/article/google-heres-why-dark-mode-massively-extends-your-oled-phones-battery-life/"
              target="_blank"
              rel="noreferrer noopener"
              className="bildbearbeitung-ex1-link"
            >
              {props.text}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="bildbearbeitung-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="bildbearbeitung-ex1-icon2">
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

BildbearbeitungEx1.defaultProps = {
  text1: 'Mit diesem Tool können Wörter in ASCI-Logos umgewandelt werden.',
  text11: 'Mit diesem Tool können ASCI-Texte aus Bildern erzeugt werden.',
  rootClassName: '',
  text3: 'Text to ASCI',
  text: 'Google Studie',
  text2: 'Text',
}

BildbearbeitungEx1.propTypes = {
  text1: PropTypes.string,
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default BildbearbeitungEx1
