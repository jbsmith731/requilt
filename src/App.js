import React, { Component } from 'react';
import {colors} from './lib.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: colors
    }
  }

  render() {
    return (
      <div className="app">

      </div>
    );
  }
}



export default App;
