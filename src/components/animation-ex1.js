import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './animation-ex1.css'

const AnimationEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`animation-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="animation-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="animation-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="animation-ex1-container2">
            <a
              href="https://lottiefiles.com/de/"
              target="_blank"
              rel="noreferrer noopener"
              className="animation-ex1-link"
            >
              {props.text}
            </a>
            <span className="animation-ex1-text">{props.text4}</span>
            <a
              href="https://creattie.com"
              target="_blank"
              rel="noreferrer noopener"
              className="animation-ex1-link1"
            >
              {props.text3}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="animation-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="animation-ex1-icon2">
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

AnimationEx1.defaultProps = {
  text3: 'creattie.com',
  text1: 'Text',
  text4:
    'Hier ist eine Quelle für kostenlose Lottiefiles neben der Lottiefiles-Seite selbst.',
  rootClassName: '',
  text2: 'Text',
  text: 'lottiefiles.com',
}

AnimationEx1.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default AnimationEx1
