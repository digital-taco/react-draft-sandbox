import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ onClick, label = onClick ? 'Click Meee' : 'Nothing Will Happen', ...props }) {
  return (
    <button style={{
      appearance: 'none',
      padding: '8px 12px',
      color: 'white',
      backgroundColor: '#789',
      fontSize: 18,
      borderRadius: 4,
      cursor: 'pointer'
    }} onClick={onClick} {...props}>{label}</button>
  )
}

Button.propTypes = {
  /** The text displayed on the button. */
  label: PropTypes.string,

  /** Click handler that runs when the button is clicked. */
  onClick: PropTypes.func,
}