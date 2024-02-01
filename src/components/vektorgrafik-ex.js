import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './vektorgrafik-ex.css'

const VektorgrafikEx = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`vektorgrafik-ex-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="vektorgrafik-ex-container1"
        >
          <svg viewBox="0 0 1024 1024" className="vektorgrafik-ex-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="vektorgrafik-ex-container2">
            <Link to="/anbieterprfung" className="vektorgrafik-ex-navlink">
              {props.text4}
            </Link>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="vektorgrafik-ex-container3"
        >
          <svg viewBox="0 0 1024 1024" className="vektorgrafik-ex-icon2">
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

VektorgrafikEx.defaultProps = {
  text4: 'Was ist Brotli/Gzip? Slide 3',
  rootClassName: '',
}

VektorgrafikEx.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default VektorgrafikEx
