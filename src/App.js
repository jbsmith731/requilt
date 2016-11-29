import React, { Component } from 'react';
import {colors} from './lib.js';
import ColorSquares from './ColorSquares';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorsObj: colors
    }
  }

  render() {
    return (
      <div className="app">
        <ColorSquares colors={this.state.colorsObj} />
      </div>
    );
  }
}



export default App;
