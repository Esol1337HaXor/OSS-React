import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './vektorgrafik-ex2.css'

const VektorgrafikEx2 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`vektorgrafik-ex2-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="vektorgrafik-ex2-container1"
        >
          <svg viewBox="0 0 1024 1024" className="vektorgrafik-ex2-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="vektorgrafik-ex2-container2">
            <a
              href="https://svgoptimizer.com/de/"
              target="_blank"
              rel="noreferrer noopener"
              className="vektorgrafik-ex2-link"
            >
              {props.text4}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="vektorgrafik-ex2-container3"
        >
          <svg viewBox="0 0 1024 1024" className="vektorgrafik-ex2-icon2">
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

VektorgrafikEx2.defaultProps = {
  rootClassName: '',
  text4: 'svgoptimizer',
}

VektorgrafikEx2.propTypes = {
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default VektorgrafikEx2
