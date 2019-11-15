import React from 'react'
import PropTypes from 'prop-types'

export default function DefaultComponent({ propOne = 'Potato', propTwo }) {
  return (
    <div>
      {propOne}
      {propTwo}
    </div>
  )
}

DefaultComponent.propTypes = {
  propOne: PropTypes.string,
  propTwo: PropTypes.string,
}

export function NamedComponent({ propOne = 'Prop One', propTwo = 'Prop Two' }) {
  return (
    <div>
      {propOne}
      {propTwo}
    </div>
  )
}