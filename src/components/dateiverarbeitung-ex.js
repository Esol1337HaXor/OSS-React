import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './dateiverarbeitung-ex.css'

const DateiverarbeitungEx = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`dateiverarbeitung-ex-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="dateiverarbeitung-ex-container1"
        >
          <svg viewBox="0 0 1024 1024" className="dateiverarbeitung-ex-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="dateiverarbeitung-ex-container2">
            <span className="dateiverarbeitung-ex-text">{props.text1}</span>
            <a
              href="https://prepros.io/"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiverarbeitung-ex-link"
            >
              {props.text2}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="dateiverarbeitung-ex-container3"
        >
          <svg viewBox="0 0 1024 1024" className="dateiverarbeitung-ex-icon2">
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

DateiverarbeitungEx.defaultProps = {
  text: 'Text',
  text2: 'prepros.io',
  text1:
    'prepros.io ist ein Windows-Programm, das Code vor dem Deployment automatisch minimieren kann. CDNs wie Cloudflare tun dies automatisch, so dass dieser Schritt nicht notwendig ist.',
  rootClassName: '',
}

DateiverarbeitungEx.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DateiverarbeitungEx
