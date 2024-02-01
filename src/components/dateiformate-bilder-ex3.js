import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './dateiformate-bilder-ex3.css'

const DateiformateBilderEx3 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div
      className={`dateiformate-bilder-ex3-container ${props.rootClassName} `}
    >
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="dateiformate-bilder-ex3-container1"
        >
          <svg viewBox="0 0 1024 1024" className="dateiformate-bilder-ex3-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="dateiformate-bilder-ex3-container2">
            <a
              href="https://webspeedtest.cloudinary.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiformate-bilder-ex3-link"
            >
              {props.text2}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="dateiformate-bilder-ex3-container3"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="dateiformate-bilder-ex3-icon2"
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

DateiformateBilderEx3.defaultProps = {
  text1:
    'Pagebuilder wandeln häufig Bilder in WebP um. Für Wordpress-Sites gibt es Plugins wie Smush.',
  rootClassName: '',
  text: 'Text',
  text2: 'cloudinary.com',
  heading: 'Heading',
  text11:
    'Im Zweifelsfall empfiehlt es sich, Plugins für Adobe-Programme zu installieren oder Online-Konverter zu verwenden. Cloudinary bietet für bestehende Inhalte eine AVIF-Datei an.',
  text21: 'AVIF Ps Plugin',
}

DateiformateBilderEx3.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  heading: PropTypes.string,
  text11: PropTypes.string,
  text21: PropTypes.string,
}

export default DateiformateBilderEx3
