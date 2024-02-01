import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './dateiverarbeitung-ex2.css'

const DateiverarbeitungEx2 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`dateiverarbeitung-ex2-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="dateiverarbeitung-ex2-container1"
        >
          <svg viewBox="0 0 1024 1024" className="dateiverarbeitung-ex2-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="dateiverarbeitung-ex2-container2">
            <span className="dateiverarbeitung-ex2-text">{props.text1}</span>
            <a
              href="https://digitalbeacon.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiverarbeitung-ex2-link"
            >
              {props.text}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="dateiverarbeitung-ex2-container3"
        >
          <svg viewBox="0 0 1024 1024" className="dateiverarbeitung-ex2-icon2">
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

DateiverarbeitungEx2.defaultProps = {
  rootClassName: '',
  text1:
    'Beacon kann auch Aufschluss über das gesamte Datenvolumen einer Website geben, eingebettete Videos werden dabei aber offenbar nicht berücksichtigt.',
  text2: 'Text',
  text: 'digitalbeacon.co',
}

DateiverarbeitungEx2.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default DateiverarbeitungEx2
