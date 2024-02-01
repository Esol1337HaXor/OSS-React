import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './dateiformate-bilder-ex1.css'

const DateiformateBilderEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div
      className={`dateiformate-bilder-ex1-container ${props.rootClassName} `}
    >
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="dateiformate-bilder-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="dateiformate-bilder-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="dateiformate-bilder-ex1-container2">
            <span className="dateiformate-bilder-ex1-text">{props.text1}</span>
            <a
              href="https://caniuse.com/avif"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiformate-bilder-ex1-link"
            >
              {props.text2}
            </a>
            <span className="dateiformate-bilder-ex1-text1">
              {props.text11}
            </span>
            <a
              href="https://github.com/0xC0000054/avif-format"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiformate-bilder-ex1-link1"
            >
              {props.text21}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="dateiformate-bilder-ex1-container3"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="dateiformate-bilder-ex1-icon2"
          >
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

DateiformateBilderEx1.defaultProps = {
  text21: 'AVIF Ps Plugin',
  text: 'Text',
  text1:
    '88,75% der Browser unterstützen AVIF, es wird jedoch empfohlen, einen Fallback auf WebP anzubieten.',
  rootClassName: '',
  text11:
    'Im Zweifelsfall empfiehlt es sich, Plugins für Adobe-Programme zu installieren oder Online-Konverter zu verwenden. Cloudinary bietet für bestehende Inhalte eine AVIF-Datei an.',
  text2: 'caniuse',
}

DateiformateBilderEx1.propTypes = {
  text21: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  text2: PropTypes.string,
}

export default DateiformateBilderEx1
