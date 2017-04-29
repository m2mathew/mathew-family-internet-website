// External Dependencies
import React, { Component } from 'react';

// Local Variables
const isaacContainerStyles = {
  background: 'aliceblue',
  border: '2px solid blue',
  margin: '20px 50px',
};

// Component Definition
class Isaac extends Component {
  render() {
    return (
      <div style={isaacContainerStyles}>
        <div>
          <h2>Isaac</h2>
        </div>
        <p>
          He is stupendous!
        </p>
      </div>
    );
  }
}

export default Isaac;
