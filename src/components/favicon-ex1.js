import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './favicon-ex1.css'

const FaviconEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`favicon-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="favicon-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="favicon-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="favicon-ex1-container2">
            <a
              href="https://realfavicongenerator.net/"
              target="_blank"
              rel="noreferrer noopener"
              className="favicon-ex1-link"
            >
              {props.text}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="favicon-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="favicon-ex1-icon2">
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

FaviconEx1.defaultProps = {
  rootClassName: '',
  text: 'Favicon Generator',
  text2: 'Text',
  text1: 'Text',
}

FaviconEx1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
}

export default FaviconEx1
