// External Dependencies
import React, { Component } from 'react';

// Local Variables
const alexisContainerStyles = {
  background: 'lavenderblush',
  border: '2px solid violet',
  margin: '20px 50px',
};


// Component Definition
class Alexis extends Component {
  render() {
    return (
      <div style={alexisContainerStyles}>
        <div>
          <h2>Alexis</h2>
        </div>
        <p>
          She is so great!
        </p>
      </div>
    );
  }
}

export default Alexis;
