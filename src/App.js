import React from 'react';
import './App.css';
import './index.css'

import TitleBar from './components/TitleBar'
import Button from './components/Button'
import Container from './components/Container'

const textStyle = {
  textAlign: 'center',
  maxWidth: '50%',
  margin: '0 auto',
  lineHeight: 2,
  textShadow: '1px 1px 3px #ff1',
  padding: '24px 0',
  fontSize: 18,
  letterSpacing: 1.3,
  fontWeight: 300,
}

function App() {
  return (
    <div className="App" style={{height: '300vh'}}>
      <TitleBar title="Lunar Bears" />
      <Container padding="md">
        <div style={textStyle}>
          For many years, people have doubted the existence of <i>Ursidae Luna</i>, or the "Lunar Bear", despite overwhelming evidence. Doubt no more! We have conclusive literature, media, and interviews with officials depicting these beautiful moon-wandering creatures.
        </div>
        <div style={textStyle}>
          Doubt no more! Explore our site to learn more.
        </div>
        <div style={{textAlign: 'center'}}>
          <Button onClick={() => window.alert('Have cake')} label="Learn More about Lunar Bears" />
        </div>
      </Container>
      <div id="stars-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </div>
  );
}

export default App;