// External Dependencies
import React, { Component } from 'react';

// Local Variables
const stephenContainerStyles = {
  background: 'cornsilk',
  border: '2px solid darkgreen',
  margin: '20px 50px',
};

// Component Definition
class Stephen extends Component {
  render() {
    return (
      <div style={stephenContainerStyles}>
        <div>
          <h2>Stephen</h2>
        </div>
        <p>
          He rules!
        </p>
      </div>
    );
  }
}

export default Stephen;
