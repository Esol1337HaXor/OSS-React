import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './anbieterprfung-ex3.css'

const AnbieterprfungEx3 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`anbieterprfung-ex3-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="anbieterprfung-ex3-container1"
        >
          <svg viewBox="0 0 1024 1024" className="anbieterprfung-ex3-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="anbieterprfung-ex3-container2">
            <a
              href="https://builtwith.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="anbieterprfung-ex3-link"
            >
              {props.text}
            </a>
            <a
              href="https://dnschecker.org"
              target="_blank"
              rel="noreferrer noopener"
              className="anbieterprfung-ex3-link1"
            >
              {props.text1}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="anbieterprfung-ex3-container3"
        >
          <svg viewBox="0 0 1024 1024" className="anbieterprfung-ex3-icon2">
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

AnbieterprfungEx3.defaultProps = {
  text: 'builtwith.com',
  text1: 'dnschecker.org',
  text2: 'Text',
  rootClassName: '',
}

AnbieterprfungEx3.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AnbieterprfungEx3
