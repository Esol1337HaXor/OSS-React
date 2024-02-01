import React from 'react'

import PropTypes from 'prop-types'

import './a-backbutton.css'

const ABackbutton = (props) => {
  return (
    <div className={`a-backbutton-backbutton ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="a-backbutton-image"
      />
    </div>
  )
}

ABackbutton.defaultProps = {
  imageSrc: '/Icons/back.svg',
  rootClassName: '',
  imageAlt: 'image',
}

ABackbutton.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ABackbutton
