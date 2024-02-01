import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './anbieterprfung-ex2.css'

const AnbieterprfungEx2 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`anbieterprfung-ex2-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="anbieterprfung-ex2-container1"
        >
          <svg viewBox="0 0 1024 1024" className="anbieterprfung-ex2-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="anbieterprfung-ex2-container2">
            <a
              href="https://www.giftofspeed.com/gzip-test/"
              target="_blank"
              rel="noreferrer noopener"
              className="anbieterprfung-ex2-link"
            >
              {props.text}
            </a>
            <span className="anbieterprfung-ex2-text">{props.text1}</span>
            <a
              href="https://caniuse.com/?search=brotli"
              target="_blank"
              rel="noreferrer noopener"
              className="anbieterprfung-ex2-link1"
            >
              {props.text2}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="anbieterprfung-ex2-container3"
        >
          <svg viewBox="0 0 1024 1024" className="anbieterprfung-ex2-icon2">
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

AnbieterprfungEx2.defaultProps = {
  text1:
    'Bei modernen Technologien ist es wichtig zu prüfen, wie weit sie verbreitet sind. Mit Hilfe von Can I Use kann die Unterstützung von Browsern geprüft und die Unterstützung in Prozent angezeigt werden. Brotli wird von 97,54% unterstützt.',
  rootClassName: '',
  text: 'giftofspeed.com',
  text2: 'caniuse.com',
}

AnbieterprfungEx2.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default AnbieterprfungEx2
