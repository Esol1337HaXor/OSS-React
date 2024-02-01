import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './anbieterprfung-ex1.css'

const AnbieterprfungEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`anbieterprfung-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="anbieterprfung-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="anbieterprfung-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="anbieterprfung-ex1-container2">
            <a
              href="https://www.websitecarbon.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="anbieterprfung-ex1-link"
            >
              {props.text}
            </a>
            <span className="anbieterprfung-ex1-text">{props.text1}</span>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="anbieterprfung-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="anbieterprfung-ex1-icon2">
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

AnbieterprfungEx1.defaultProps = {
  text1:
    'In diesem Zusammenhang wird empfohlen, das Kapitel Elektrizität zu lesen, um die Nachhaltigkeit von Elektrizität besser beurteilen zu können. >Hosting>Strom',
  text: 'websitecarbon.com',
  text2: 'Text',
  rootClassName: '',
}

AnbieterprfungEx1.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AnbieterprfungEx1