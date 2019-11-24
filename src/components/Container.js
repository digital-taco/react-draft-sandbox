import React from 'react'
import PropTypes from 'prop-types'

const padMap = {
  sm: 8,
  md: 16,
  lg: 32
}

export default function Container({ children, padding = 'sm' }) {
  return (
    <div style={{padding: padMap[padding]}}>
      {children}
    </div>
  )
}

Container.propTypes = {
  /** The amount of padding the container has. */
  padding: PropTypes.oneOf(['sm', 'md', 'lg'])
}