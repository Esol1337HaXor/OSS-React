import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './asci-ex1.css'

const ASCIEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`asci-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div onClick={() => setToggle(false)} className="asci-ex1-container1">
          <svg viewBox="0 0 1024 1024" className="asci-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="asci-ex1-container2">
            <span className="asci-ex1-text">{props.text11}</span>
            <a
              href="https://manytools.org/hacker-tools/convert-images-to-ascii-art/"
              target="_blank"
              rel="noreferrer noopener"
              className="asci-ex1-link"
            >
              {props.text}
            </a>
            <span className="asci-ex1-text1">{props.text1}</span>
            <a
              href="https://patorjk.com/software/taag/#p=display&amp;f=Graffiti&amp;t=NACHHALTIG"
              target="_blank"
              rel="noreferrer noopener"
              className="asci-ex1-link1"
            >
              {props.text3}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div onClick={() => setToggle(!toggle)} className="asci-ex1-container3">
          <svg viewBox="0 0 1024 1024" className="asci-ex1-icon2">
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

ASCIEx1.defaultProps = {
  rootClassName: '',
  text1: 'Mit diesem Tool können Wörter in ASCI-Logos umgewandelt werden.',
  text: 'Ascii Art',
  text2: 'Text',
  text11: 'Mit diesem Tool können ASCI-Texte aus Bildern erzeugt werden.',
  text3: 'Text to ASCI',
}

ASCIEx1.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text11: PropTypes.string,
  text3: PropTypes.string,
}

export default ASCIEx1
