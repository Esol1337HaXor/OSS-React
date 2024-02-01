import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './a-extendetcontent.css'

const AExtendetcontent = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`a-extendetcontent-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="a-extendetcontent-container1"
        >
          <svg viewBox="0 0 1024 1024" className="a-extendetcontent-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="a-extendetcontent-container2">
            <span className="a-extendetcontent-text">{props.text}</span>
            <span className="a-extendetcontent-text1">{props.text1}</span>
            <span className="a-extendetcontent-text2">{props.text2}</span>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="a-extendetcontent-container3"
        >
          <svg viewBox="0 0 1024 1024" className="a-extendetcontent-icon2">
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

AExtendetcontent.defaultProps = {
  text1: 'Text',
  rootClassName: '',
  text: 'Text',
  text2: 'Text',
}

AExtendetcontent.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default AExtendetcontent
