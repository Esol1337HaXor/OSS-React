import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './dateiformate-bilder-ex2.css'

const DateiformateBilderEx2 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div
      className={`dateiformate-bilder-ex2-container ${props.rootClassName} `}
    >
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="dateiformate-bilder-ex2-container1"
        >
          <svg viewBox="0 0 1024 1024" className="dateiformate-bilder-ex2-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="dateiformate-bilder-ex2-container2">
            <span className="dateiformate-bilder-ex2-text">{props.text1}</span>
            <a
              href="https://de.wordpress.org/plugins/wp-smushit/"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiformate-bilder-ex2-link"
            >
              {props.text2}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="dateiformate-bilder-ex2-container3"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="dateiformate-bilder-ex2-icon2"
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

DateiformateBilderEx2.defaultProps = {
  text11:
    'Im Zweifelsfall empfiehlt es sich, Plugins für Adobe-Programme zu installieren oder Online-Konverter zu verwenden. Cloudinary bietet für bestehende Inhalte eine AVIF-Datei an.',
  rootClassName: '',
  heading: 'Heading',
  text21: 'AVIF Ps Plugin',
  text2: 'Smush',
  text: 'Text',
  text1:
    'Pagebuilder wandeln häufig Bilder in WebP um. Für Wordpress-Sites gibt es Plugins wie Smush.',
}

DateiformateBilderEx2.propTypes = {
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text21: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default DateiformateBilderEx2
