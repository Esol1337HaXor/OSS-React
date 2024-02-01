import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './animation-ex2.css'

const AnimationEx2 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`animation-ex2-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="animation-ex2-container1"
        >
          <svg viewBox="0 0 1024 1024" className="animation-ex2-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="animation-ex2-container2">
            <a
              href="https://lottiemizer.com/de"
              target="_blank"
              rel="noreferrer noopener"
              className="animation-ex2-link"
            >
              {props.text}
            </a>
            <span className="animation-ex2-text">{props.text3}</span>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="animation-ex2-container3"
        >
          <svg viewBox="0 0 1024 1024" className="animation-ex2-icon2">
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

AnimationEx2.defaultProps = {
  rootClassName: '',
  text3:
    'Durch die Komprimierung von Lottiefiles kann die Dateigröße um 10-35% reduziert werden.',
  text2: 'Text',
  text: 'lottiemizer.com',
  text1: 'Text',
}

AnimationEx2.propTypes = {
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default AnimationEx2
