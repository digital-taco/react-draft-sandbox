import React from 'react'

const barStyle = {
  height: 60,
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#789',
  alignItems: 'center',
  padding: '0 16px',
  fontSize: 24,
  fontWeight: 300,
  textTransform: 'uppercase',
  letterSpacing: 3,
}

const textStyle = {
  color: 'white',
  textShadow: '3px 3px 3px #333',
}

export default function TitleBar({ title }) {
  return (
    <div style={barStyle}>
      <span style={textStyle}>
        <span role="img" aria-label="MOON BEARS!">🌕</span>{' '}
        {title}
      </span>
    </div>
  )
}
