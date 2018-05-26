import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var verifier = require('google-id-token-verifier');
 
// ID token from client. 
var IdToken = 'XYZ123';
 
// app's client IDs to check with audience in ID Token. 
var clientId = 'abc123.apps.googleusercontent.com';
 
verifier.verify(IdToken, clientId, function (err, tokenInfo) {
  if (!err) {
    // use tokenInfo in here. 
    console.log(tokenInfo);
  }
});
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
