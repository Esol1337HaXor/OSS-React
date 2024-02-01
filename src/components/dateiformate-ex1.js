import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './dateiformate-ex1.css'

const DateiformateEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`dateiformate-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="dateiformate-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="dateiformate-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="dateiformate-ex1-container2">
            <a
              href="https://caniuse.com/?search=woff"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiformate-ex1-link"
            >
              {props.text}
            </a>
            <span className="dateiformate-ex1-text">{props.text1}</span>
            <a
              href="https://caniuse.com/?search=woff2"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiformate-ex1-link1"
            >
              {props.text2}
            </a>
            <span className="dateiformate-ex1-text1">{props.text11}</span>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="dateiformate-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="dateiformate-ex1-icon2">
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

DateiformateEx1.defaultProps = {
  text11: 'WOFF2 wird von 97,84% der Browser unterstüzt',
  text: 'caniuse.com',
  rootClassName: '',
  text1: 'WOFF wird von 98,51% der Browser unterstüzt',
  text2: 'caniuse.com',
}

DateiformateEx1.propTypes = {
  text11: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default DateiformateEx1
