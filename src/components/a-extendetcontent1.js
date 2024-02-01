import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './a-extendetcontent1.css'

const AExtendetcontent1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`a-extendetcontent1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="a-extendetcontent1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="a-extendetcontent1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="a-extendetcontent1-container2">
            <span className="a-extendetcontent1-text">{props.text}</span>
            <span className="a-extendetcontent1-text1">{props.text1}</span>
            <span className="a-extendetcontent1-text2">{props.text2}</span>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="a-extendetcontent1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="a-extendetcontent1-icon2">
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

AExtendetcontent1.defaultProps = {
  rootClassName: '',
  text1: 'Text',
  text2: 'Text',
  text: 'Text',
}

AExtendetcontent1.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default AExtendetcontent1
