// External Dependencies
import React, { Component } from 'react';

// Local Variables
const oliviaContainerStyles = {
  background: 'linen',
  border: '2px solid hotpink',
  margin: '20px 50px',
};

// Component Definition
class Olivia extends Component {
  render() {
    return (
      <div style={oliviaContainerStyles}>
        <div>
          <h2>Olivia</h2>
        </div>
        <p>
          She is very exciting!!
        </p>
      </div>
    );
  }
}

export default Olivia;
