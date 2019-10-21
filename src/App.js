import React from 'react';
import './App.css';
import './index.css'
import PropTypes from 'prop-types'

function PropValue({ propName, propValue, propType }) {
  return (
    <>
      <div data-prop-type>{propType}</div>{' '}
      <div data-prop-name>{propName}:</div>{' '}
      <div data-prop-value>{propValue}</div>
    </>
  )
}

function App({
  name = 'Draft',
  cookies = 1000,
  noPropTypeHere = 'potato',
  isOpen,
}) {
  return (
    <div className="App">
      <PropValue propType="string" propName="name" propValue={name} />
      <PropValue propType="number" propName="cookies" propValue={cookies} />
      <PropValue propType="boolean" propName="isOpen" propValue={isOpen ? 'true' : 'false'} />
    </div>
  );
}

export default App;

App.propTypes = {
  name: PropTypes.string,
  bacon: PropTypes.string,
  cookies: PropTypes.number,
  isOpen: PropTypes.bool,
  // cookies: PropTypes.object,
  // cookies: PropTypes.func,
  // cookies: PropTypes.array,
  // cookies: PropTypes.arrayOf,
}