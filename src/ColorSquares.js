import React, { Component } from 'react';
import './ColorSquares.css'

class ColorSquares extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: this.props.colors
    }
  }

  render() {
    const swatches = this.state.colors.map((color) =>
      <div key={color.hex} style={{backgroundColor: color.hex}} className="swatch">
        <div className="hex">{color.hex}</div>
        <div className="rgb">{color.rgb}</div>
      </div>
    );

    return (
      <div className="swatch-container">
        {swatches}
      </div>
    )
  }
}

export default ColorSquares;
