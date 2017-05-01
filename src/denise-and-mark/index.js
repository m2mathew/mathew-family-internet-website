// External Dependencies
import React, { Component } from 'react';

// Local Variables
const deniseAndMarkContainerStyles = {
  background: 'oldlace',
  border: '2px solid olive',
  margin: '20px 50px',
};


// Component Definition
class DeniseAndMark extends Component {
  render() {
    return (
      <div style={deniseAndMarkContainerStyles}>
        <div>
          <h2>Denise And Mark</h2>
        </div>
        <p>
          Where Michael started!
        </p>
      </div>
    );
  }
}

export default DeniseAndMark;
