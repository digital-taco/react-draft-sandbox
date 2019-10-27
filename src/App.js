import React from 'react';
import './App.css';
import './index.css'
import PropTypes from 'prop-types'

function PropValue({ propName, propValue, propType }) {
  return (
    <>
      <div data-prop-type>{propType}</div>{' '}
      <div data-prop-name>{propName}</div>{' '}
      <div data-prop-value>{propValue}</div>
    </>
  )
}

function App({
  name = 'Draft',
  cookies = 1000,
  noPropTypeHere,
  isOpen,
  infoObject,
  doThang,
  things,
  thingsOftype,
}) {
  return (
    <div className="App">
      <PropValue propType="string" propName="name" propValue={name} />
      <PropValue propType="number" propName="cookies" propValue={cookies} />
      <PropValue propType="boolean" propName="isOpen" propValue={isOpen ? 'true' : 'false'} />
      <PropValue propType="string" propName="noPropTypeHere" propValue={noPropTypeHere} />
      <PropValue propType="object" propName="infoObject" propValue={JSON.stringify(infoObject)} />
      <PropValue propType="func" propName="doThang" propValue={JSON.stringify(doThang)} />
      <PropValue propType="array" propName="things" propValue={JSON.stringify(things)} />
      <PropValue propType="arrayOf" propName="thingsOftype" propValue={JSON.stringify(thingsOftype)} />
    </div>
  );
}

App.propTypes = {
  cookies: PropTypes.number,
  doThang: PropTypes.func,
  infoObject: PropTypes.object,
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  things: PropTypes.array,
  thingsOftype: PropTypes.arrayOf
}

export default App;

const NonExportedComponent = () => {
  return <div />
}