import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './animation-ex3.css'

const AnimationEx3 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`animation-ex3-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="animation-ex3-container1"
        >
          <svg viewBox="0 0 1024 1024" className="animation-ex3-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="animation-ex3-container2">
            <a
              href="https://kulturbanause.de/blog/lottie-animationen-in-websites-integrieren/"
              target="_blank"
              rel="noreferrer noopener"
              className="animation-ex3-link"
            >
              {props.text}
            </a>
            <span className="animation-ex3-text">{props.text3}</span>
            <a
              href="https://github.com/LottieFiles/lottie-player"
              target="_blank"
              rel="noreferrer noopener"
              className="animation-ex3-link1"
            >
              {props.text4}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="animation-ex3-container3"
        >
          <svg viewBox="0 0 1024 1024" className="animation-ex3-icon2">
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

AnimationEx3.defaultProps = {
  text2: 'Text',
  text: 'Github lottie-player',
  rootClassName: '',
  text1: 'Text',
  text3:
    'Anbei finden Sie eine Anleitung, wie Sie den Lottieplayer integrieren können.',
  text4: 'Guide',
}

AnimationEx3.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
}

export default AnimationEx3
