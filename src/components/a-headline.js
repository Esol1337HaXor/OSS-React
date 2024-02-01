import React from 'react'

import PropTypes from 'prop-types'

import './a-headline.css'

const AHeadline = (props) => {
  return (
    <div className={`a-headline-headline ${props.rootClassName} `}>
      <span className="a-headline-text Heading">{props.text}</span>
    </div>
  )
}

AHeadline.defaultProps = {
  rootClassName: '',
  text: 'Text',
}

AHeadline.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default AHeadline
