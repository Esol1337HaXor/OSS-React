import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './einbindung-ex1.css'

const EinbindungEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`einbindung-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="einbindung-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="einbindung-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="einbindung-ex1-container2">
            <a
              href="https://fonts.google.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="einbindung-ex1-link"
            >
              {props.text}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="einbindung-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="einbindung-ex1-icon2">
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

EinbindungEx1.defaultProps = {
  text: 'Google Fonts',
  text1: 'Text',
  text2: 'Text',
  rootClassName: '',
}

EinbindungEx1.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default EinbindungEx1
