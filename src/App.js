import React from 'react';
import './App.css';
import './index.css'
import PropTypes from 'prop-types'

function App({ name, bacon = 'yes', cookies = 1000, noPropTypeHere = 'potato'}) {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {name}
        </div>
        <div>
          {bacon}
        </div>
        <div>
          {cookies + 100}
        </div>
      </header>
    </div>
  );
}

export default App;

App.propTypes = {
  name: PropTypes.string,
  bacon: PropTypes.string,
  cookies: PropTypes.number,
}