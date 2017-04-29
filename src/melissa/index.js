// External Dependencies
import React, { Component } from 'react';

// Local Variables
const melissaContainerStyles = {
  background: 'lavender',
  border: '2px solid indigo',
  margin: '20px 50px',
};

// Component Definition
class Melissa extends Component {
  render() {
    return (
      <div style={melissaContainerStyles}>
        <div>
          <h2>Melissa</h2>
        </div>
        <p>
          She is the best!
        </p>
      </div>
    );
  }
}

export default Melissa;
