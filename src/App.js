import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Michael from './michael';
import Melissa from './melissa';
import Alexis from './alexis';
import Isaac from './isaac';
import Olivia from './olivia';
import Stephen from './stephen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mathew</h2>
        </div>
        <p className="App-intro">
          The origin of our family name comes from a dislike of mathematics. Math? ewwwww!!!
        </p>
        <Michael />
        <Melissa />
        <Isaac />
        <Alexis />
        <Olivia />
        <Stephen />
      </div>
    );
  }
}

export default App;
