// External Dependencies
import React, { Component } from 'react';

// Local Variables
const michaelContainerStyles = {
  background: 'azure',
  border: '2px solid midnightblue',
  margin: '20px 50px',
};

// Component Definition
class Michael extends Component {
  render() {
    return (
      <div className="michael-container" style={michaelContainerStyles}>
        <div className="michael-title">
          <h2>Michael</h2>
        </div>
        <p>
          He's ok...
        </p>
      </div>
    );
  }
}

export default Michael;
