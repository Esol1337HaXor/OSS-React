import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './woff2-optimierung-ex2.css'

const WOFF2OptimierungEx2 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`woff2-optimierung-ex2-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="woff2-optimierung-ex2-container1"
        >
          <svg viewBox="0 0 1024 1024" className="woff2-optimierung-ex2-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="woff2-optimierung-ex2-container2">
            <a
              href="https://everythingfonts.com/subsetter"
              target="_blank"
              rel="noreferrer noopener"
              className="woff2-optimierung-ex2-link"
            >
              {props.text3}
            </a>
            <a
              href="https://fontdrop.info/#/?darkmode=true"
              target="_blank"
              rel="noreferrer noopener"
              className="woff2-optimierung-ex2-link1"
            >
              {props.text11}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="woff2-optimierung-ex2-container3"
        >
          <svg viewBox="0 0 1024 1024" className="woff2-optimierung-ex2-icon2">
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

WOFF2OptimierungEx2.defaultProps = {
  rootClassName: '',
  text11: 'FontDrop!',
  text: 'google-webfonts-helper',
  text3: 'Font Subsetter',
  text1: 'Text',
  text2: 'Text',
}

WOFF2OptimierungEx2.propTypes = {
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default WOFF2OptimierungEx2
