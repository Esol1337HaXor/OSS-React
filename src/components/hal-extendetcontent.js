import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './hal-extendetcontent.css'

const HALExtendetcontent = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`hal-extendetcontent-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="hal-extendetcontent-container1"
        >
          <svg viewBox="0 0 1024 1024" className="hal-extendetcontent-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="hal-extendetcontent-container2">
            <span className="hal-extendetcontent-text">{props.text1}</span>
            <span className="hal-extendetcontent-text1">{props.text2}</span>
            <span className="hal-extendetcontent-text2">{props.text3}</span>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="hal-extendetcontent-container3"
        >
          <svg viewBox="0 0 1024 1024" className="hal-extendetcontent-icon2">
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

HALExtendetcontent.defaultProps = {
  text1: 'Hier finden Sie weitere nützliche Informationen, sofern verfügbar.',
  text: 'Text',
  text3: 'oder erwähnte URLs',
  text2: 'oder Querverweise',
  rootClassName: '',
}

HALExtendetcontent.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HALExtendetcontent
